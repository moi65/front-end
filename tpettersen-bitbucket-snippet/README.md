# Bitbucket Snippet

CLI tool for publishing a local file as a [Bitbucket Snippet]. 

You may enjoy [this article on how this tool was built].

## Usage

     snippet [options] <file>

     Options:

        -h, --help                 output usage information
        -u, --username <username>  the user to authenticate as
        -p, --password <password>  the user's password
        -b, --browser              open the snippet in the system browser

## Installation

- Install [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/)
- Run `npm install -g bitbucket-snippet`
- Run `snippet --help` or `snippet some_file` to upload it to Bitbucket.

## Credential management

The first time you upload a file you will be prompted for your Bitbucket username and password. These
will be used to retrieve an OAuth refresh token which is stored in `~/.bitbucket-snippet` and used for
subsequent requests. Treat this token carefully as it can be used to read and write snippets on your
behalf.

[Bitbucket Snippet]: https://confluence.atlassian.com/bitbucket/snippets-719095082.html
[this article on how this tool was built]: https://developer.atlassian.com/blog/2015/11/scripting-with-node/