const assert = require('node:assert/strict');
const merge = require('deepmerge');

const malicious = JSON.parse('{"session":{"__proto__":{"admin":true}}}');
for (const target of [{ session: null }, { session: Object.create(null) }]) {
    const result = merge(target, malicious);
    assert.equal(result.session.admin, undefined);
    assert.equal(Object.getPrototypeOf(result.session), Object.prototype);
}

const poisonedTarget = JSON.parse('{"__proto__":{"admin":true},"safe":1}');
assert.equal(merge(poisonedTarget, {}).admin, undefined);
const forbidden = JSON.parse('{"constructor":{"admin":true},"prototype":{"admin":true}}');
const result = merge({}, forbidden);
assert.equal(Object.hasOwn(result, 'constructor'), false);
assert.equal(Object.hasOwn(result, 'prototype'), false);
assert.deepEqual(merge({ nested: { one: 1 }, list: [1] }, { nested: { two: 2 }, list: [2] }),
    { nested: { one: 1, two: 2 }, list: [1, 2] });
console.log('deepmerge security and normal merge checks passed');
