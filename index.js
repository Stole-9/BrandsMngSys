'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const brandRoutes = require('./routers/brandRouters');
const BrandRatingLinesRouters = require('./routers/BrandRatingLinesRouters');
const bodyParser = require('body-parser');


const app = express();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use('/api', brandRoutes.routes);
app.use('/api', BrandRatingLinesRouters.routes);


app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});