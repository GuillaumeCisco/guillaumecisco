#! /usr/bin/env node
const shell = require('shelljs');

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = new Date(`${year}-${month}-${now.getDate()}`);
const timestamp = now.getTime() - day.getTime();
const tag = `${year}.${month}.${timestamp}`;
const registry = 'your_amazon_ecs_repository';
const name = 'image_name';
const redis_host = 'your_redis_host_url';  // use '127.0.0.1'; for testing on your localhost
const redis_port = 6379;

console.log(`Deploying ${registry}/${name}:${tag}`);

const branch_name = shell.exec('git symbolic-ref --short HEAD', {silent: true}).stdout.replace(/\n/g, '');

// docker logout  984406419997.dkr.ecr.eu-central-1.amazonaws.com/guillaumecisco
// aws ecr get-login-password --region eu-central-1| docker login --username AWS --password-stdin 984406419997.dkr.ecr.eu-central-1.amazonaws.com
shell.exec(`docker build --build-arg redis_host=${redis_host} --build-arg redis_port=${redis_port} -t ${registry}/${name}:${tag} -t ${registry}/${name}:${branch_name} -t ${registry}/${name}:latest .`);
shell.exec(`docker push ${registry}/${name}:latest && docker push ${registry}/${name}:${tag} && docker push ${registry}/${name}:${branch_name}`);
