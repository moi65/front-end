#!/usr/bin/env node --harmony

var program = require('commander');
var co = require('co');
var prompt = require('co-prompt');
var request = require('superagent');
var chalk = require('chalk');
var ProgressBar = require('progress');
var fs = require('fs');
var bitbucketAuthToken = require('bitbucket-auth-token');
var RSVP = require('rsvp');
var jsonfile = require('jsonfile');
var path = require('path');

var consumerInfo = jsonfile.readFileSync(path.join(__dirname, './consumer.json'));
console.log( consumerInfo);

program
  .arguments('<file>')
  .option('-u, --username <username>', 'The user to authenticate as')
  .option('-p, --password <password>', 'The user\'s password')
  .option('-b, --browser', 'Open the snippet in the system browser')
  .action(function(file) {
      console.log('file', program.username);
/*
      bitbucketAuthToken.getAccessToken({
        appName: 'bitbucket-snippet',
        consumerKey: consumerInfo.key,
        consumerSecret: consumerInfo.secret,
        forceCredentials: program.username || program.password,
        logger: console.log,
        credentialsProvider: function() {
          return new RSVP.Promise(function(resolve, reject) {
            co(function *() {
              resolve({
                username: program.username || (yield prompt('username: ')),
                password: program.password || (yield prompt.password('password: '))
              });
            });
          });
        }
      }).then(function(accessToken) {

        var lastSlash = file.lastIndexOf('/');
        var filename = lastSlash === -1 ? file : file.substring(lastSlash);

        var fileSize = fs.statSync(file).size;
        var fileStream = fs.createReadStream(file);

        var barOpts = {
          width: 20,
          total: fileSize,
          clear: true
        };
        var bar = new ProgressBar(' uploading [:bar] :percent :etas', barOpts);
        fileStream.on('data', function (chunk) {
          bar.tick(chunk.length);
        });

        request
          .post('https://api.bitbucket.org/2.0/snippets/')
          .set('Authorization', 'Bearer ' + accessToken)
          .attach('file', fileStream, filename)
          .set('Accept', 'application/json')
          .end(function (err, res) {
            if (res && res.ok) {
              var link = res.body.links.html.href;
              console.log(chalk.bold.cyan('Snippet created: ') + link);
              if (program.browser) {
                require('child_process').spawn('open', [link]);
              }
              process.exit(0);
            }

            var errorMessage;
            if (res && res.status === 401) {
              errorMessage = "Authentication failed! Bad access token?";
            } else if (err) {
              errorMessage = err;
            } else {
              errorMessage = res.text;
            }
            console.error(chalk.red(errorMessage));
            process.exit(1);
          });

      }).catch(function(err) {
        console.error(err);
        process.exit(1);
      });*/

  })
  .parse(process.argv);





