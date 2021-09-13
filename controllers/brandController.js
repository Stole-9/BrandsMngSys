'use strict';

const brandData = require('../data/brands');

const getAllBrands = async (req, res, next) => {
    try {

        const brandlist = await brandData.getAllBrands();
        res.send(brandlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBrand = async (req, res, next) => {
    try {
        const brandId = req.params.id;
        const brand = await brandData.getById(brandId);
        res.send(brand);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addBrand = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await brandData.createBrand(data);
        res.send(insert[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateBrand = async (req, res, next) => {
    try {
        const brandId =  req.params.id;
        const data = req.body;
        const updated = await brandData.updateBrand(brandId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBrand = async (req, res, next) => {
    try {
        const brandId = req.params.id;
        const deletedBrand = await brandData.deleteBrand(brandId);
        res.send(deletedBrand);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllBrands,
    getBrand,
    addBrand,
    updateBrand,
    deleteBrand
}