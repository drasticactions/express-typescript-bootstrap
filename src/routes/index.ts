'use strict';

import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/',(req,res,next) => {
  res.render('index', {title: 'Drastic Actions is Drastic Actions'});
});

export default router;