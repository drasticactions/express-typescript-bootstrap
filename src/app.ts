'use strict';
var DEBUG_MODE = process.env.NODE_ENV === 'development';
import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import index from './routes/index';
// Used for POSTing multi-section forms
import * as multer from 'multer';

let base_url = DEBUG_MODE ? "localhost:3000" : "production-host";

const app: express.Express = express();

let options = {};

//view engine setup

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/',index);

//catch 404 and forward to error handler
app.use((req,res,next) => {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

//error handlers

//development error handler
//will print stacktrace
if(process.env.NODE_ENV === 'development') {
  app.use((err: Error,req,res,next) => {
    res.status(err['status'] || 500);
    res.render('error',{
      title: 'error',
      message: err.message,
      error: err
    });
  });    
}

//production error handler
// no stacktrace leaked to user
app.use((err: Error,req,res,next) => {
  res.status(err['status'] || 500);
  res.render('error',{
    title: 'error',
    message: err.message,
    error: {}
  });
});

export default app;