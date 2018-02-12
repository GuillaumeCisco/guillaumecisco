# Guillaume Cisco's interactive website

### Installation

This project use yarn and the experimental yarn workspaces for package.json splitting and convenience.

Please install the last version of yarn and run 
`yarn config set workspaces-experimental true`

Then run:
`yarn install`


For testing and developping on the projet with true hot module replacement, run
`yarn start`

For testing with prod config:
`yarn start:prod`

For testing in electron, run:
`yarn dev`

For packaging for electron:
```
yarn build:electron
yarn build-electron
yarn package-all
```

For building the production website and deploy it, run:
```
yarn build:main
yarn deploy
```

### Test and Cover

For running the test suite:
`yarn test`

For displaying covering:
`yarn cover`


### Eslint

For displaying lint errors:
`yarn eslint`


### Encryption files creation

For creating your own self signed certificates

https://blog.didierstevens.com/2008/12/30/howto-make-your-own-cert-with-openssl/
```shell
cd encryption
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 1826 -key ca.key -out ca.crt
openssl genrsa -out ia.key 4096
openssl req -new -key ia.key -out ia.csr
openssl x509 -req -days 730 -in ia.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out ia.crt
```


With let's encrypt

```shell
sudo certbot certonly --manual -d guillaumecisco.com -d www.guillaumecisco.com
```

Places the files in the folder `./well-known/acme-challenge` and build and deploy your website, then continue the process for validating the ownership of the website.
Then places the generated files to the `encryption` folder.

The certificates will only last for 90 days, so be sure to create a cronjob with the command
```shell
sudo certbot renew
```
for issuing new certificates and rebuild and deploy your docker app.

You should run these commands on the server running the docker app i.e the EC2 instance
https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates
