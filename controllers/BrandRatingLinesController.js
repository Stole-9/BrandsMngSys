'use strict';

const BrandRatingLineData = require('../data/BrandRatingLines');

const getAllBrandRatingLines = async (req, res, next) => {
    try {

        const BrandRatingLines = await BrandRatingLineData.getAllBrandRatingLines();
        res.send(BrandRatingLines);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBrandRatingLine = async (req, res, next) => {
    try {
        const BrandRatingID = req.params.id;
        const BrandRating = await BrandRatingLineData.getById(BrandRatingID);
        res.send(BrandRating);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addBrandRatingLine = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await BrandRatingLineData.createBrandRatingLine(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateBrandRatingLine = async (req, res, next) => {
    try {
        const BrandRatingID =  req.params.id;
        const data = req.body;
        const updated = await BrandRatingLineData.updateBrandRatingLine(BrandRatingID, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBrandRatingLine  = async (req, res, next) => {
    try {
        const BrandRatingID = req.params.id;
        const deletedBrandRatingLine = await BrandRatingLineData.deleteBrandRatingLine(BrandRatingID);
        res.send(deletedBrandRatingLine);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getAllBrandRatingLines,
    getBrandRatingLine,
    addBrandRatingLine,
    updateBrandRatingLine,
    deleteBrandRatingLine
}