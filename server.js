//Install express server
const express = require('express');
const path = require('path');

const app = express();

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

// Don't redirect if using localhost
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/devport'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/devport/index.html'))});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);