function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const cors = require("cors");
const express = require('express');
const app = express();
app.use(requireHTTPS);

app.use(express.static(`./dist/lab5`));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get(`/*`, function(req, res) {
  res.sendFile(`index.html`, {root: 'dist/lab5/'});
});

app.listen(process.env.PORT || 8080);