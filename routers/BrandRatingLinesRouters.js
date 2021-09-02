'use strict';

const express = require('express');
const BrandRatingLinesControll = require('../controllers/BrandRatingLinesController');
const router = express.Router();

const {getAllBrandRatingLines, getBrandRatingLine, addBrandRatingLine, updateBrandRatingLine, deleteBrandRatingLine} = BrandRatingLinesControll;

router.get('/BrandRatingLines', BrandRatingLinesControll.getAllBrandRatingLines);
router.get('/BrandRatingLines/:id', BrandRatingLinesControll.getBrandRatingLine);
router.post('/BrandRatingLines', BrandRatingLinesControll.addBrandRatingLine);
router.put('/BrandRatingLines/:id', BrandRatingLinesControll.updateBrandRatingLine);
router.delete('/BrandRatingLines/:id', BrandRatingLinesControll.deleteBrandRatingLine);


module.exports = {
    routes: router
}
