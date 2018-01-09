/* global fetch */
import { BASE_URL } from './globals'

const headers = {
  'Content-Type': 'application/json'
}

export function confirmResults (answers, email, lang) {
  return fetch(`${BASE_URL}/confirm_results/`, {
    method: 'POST',
    body: JSON.stringify({answers, email, lang}),
    headers
  }).then((res) => res.json())
}

export function fetchPersonalizedTips (answers) {
  return fetch(`${BASE_URL}/personalized_tips/`, {
    method: 'POST',
    body: JSON.stringify({answers}),
    headers
  }).then((res) => res.json())
}

export function sendReportEmail (email, id) {
  return fetch(`${BASE_URL}/send_report_email_V2/`, {
    method: 'POST',
    body: JSON.stringify({email, id}),
    headers
  }).then((res) => res.json())
}

export function fetchResults (id) {
  const urlpath = id === null ? 'results/' : `results/?id=${id}`
  const request = `${BASE_URL}/${urlpath}`
  const requestParams = {
    method: 'GET',
    headers
  }
  var retryCount = 0

  function handler (resp) {
    if (!resp.ok && retryCount > 5) {
      throw new Error('Unable to retrieve results')
    }
    if (!resp.ok) {
      retryCount += 1
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(fetch(request, requestParams).then(handler))
        }, 2000)
      })
    }
    return resp.json()
  }

  return fetch(request, requestParams).then(handler)
}

export function sendStarsFeedback (id, stars) {
  return fetch(`${BASE_URL}/feedback_stars/`, {
    method: 'POST',
    body: JSON.stringify({id, stars}),
    headers
  }).then((res) => res.json())
}

export function unlockMoreTips (id) {
  return fetch(`${BASE_URL}/unlock_tips/`, {
    method: 'POST',
    body: JSON.stringify({id}),
    headers
  }).then((res) => res.json())
}
