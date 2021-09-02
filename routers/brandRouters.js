'use strict';

const express = require('express');
const brandControll = require('../controllers/brandController');
const router = express.Router();

const {getAllBrands, getBrand, addBrand, updateBrand, deleteBrand} = brandControll;

router.get('/brands', brandControll.getAllBrands);
router.get('/brand/:id', brandControll.getBrand);
router.post('/brand', brandControll.addBrand);
router.put('/brand/:id', brandControll.updateBrand);
router.delete('/brand/:id', brandControll.deleteBrand);


module.exports = {
    routes: router
}
