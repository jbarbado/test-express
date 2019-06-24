// BASE SETUP
// ==============================================
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

// ROUTES
// ==============================================
app.get('/', function(req, res) {
  res.send('Viva Madrid!!!');
});

// START THE SERVER
// ==============================================
app.listen(port, () => console.log('Server running'));