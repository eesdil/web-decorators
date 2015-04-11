import * as express from 'express';
import * as bodyParser from 'body-parser';
import cookieParser = require('cookie-parser');
import {DecoratedAppBootstraper} from '../src/core';
import ExpressAdapter from '../src/adapters/ExpressAdapter';
import BarController from './BarController';

var app = express();
app.use(cookieParser());
app.use(bodyParser.json());

new DecoratedAppBootstraper(new ExpressAdapter(app))
    .controller(BarController)
    .start();

app.listen(3000);
