const express = require('express');
const path = require('path');
const http = require('http');
const _ = require('lodash');
const requestify = require('requestify');

const app = express();

app.get('/api/stocks', (req,res) => {
  http.get('http://finance.google.com/finance/info?client=ig&q=CYRE3', (resp) => {
    let body = '';
    resp.on('data', function (chunk) {
      body += chunk;
    });
    resp.on('end', function () {
      body = _.replace(body,'//', '');
      console.log(body);
      res.write(body);
      res.end();
    });
  })
});


app.get('/api/stocks2', (req,res) => {
  let stocks = [];
  console.log('nois2');
  requestify.get('http://finance.yahoo.com/d/quotes.csv?s=CYRE3.sa,PETR4.sa&f=l1',{redirect: true}).then((resp) => {
    let body = resp.body;
    stocks = _.split(body, "\n");
    console.log(stocks);
    res.write(JSON.stringify(stocks));
    res.end();
    });
  });


if(process.env.NODE_ENV !== 'production'){
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })
}


app.listen(process.env.PORT || 3050, () => console.log('Listening'))
