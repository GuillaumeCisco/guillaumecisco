#! /usr/bin/env node
const shell = require('shelljs');

const timestamp = new Date().getTime();
const registry = 'your_amazon_ecs_repository';
const name = 'image_name';
const raven_url = 'your_raven_url';
const redis_host = 'your_redis_host_url';
const redis_port = 6379;

console.log(`Deploying ${registry}/${name}:${timestamp}`);

shell.exec(`docker build --build-arg raven_url=${raven_url} --build-arg redis_host=${redis_host} --build-arg redis_port=${redis_port} -t ${registry}/${name}:${timestamp} -t ${registry}/${name}:latest .`);
shell.exec(`docker push ${registry}/${name}:latest`);
