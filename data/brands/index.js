'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllBrands = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brands');
        const BrandList = await pool.request()
                                .query(sqlQueries.Brandlist);
        return BrandList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(brandId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brands');
        const brand = await pool.request()
                            .input('brandId', sql.Int, brandId)
                            .query(sqlQueries.brandbyId);
        return brand.recordset;
    } catch (error) {
        return error.message;
    }
}

const createBrand = async (branddata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brands');
        const insertBrand = await pool.request()
                            .input('BrandName', sql.VarChar(64), branddata.BrandName)
                            .input('BrandDescription', sql.VarChar(256), branddata.BrandDescription)
                            .query(sqlQueries.createBrand);                            
        return insertBrand.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateBrand = async (brandId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brands');
        const update = await pool.request()
                        .input('brandId', sql.Int, brandId)
                        .input('BrandName', sql.VarChar(64), data.BrandName)
                        .input('BrandDescription', sql.VarChar(256), data.BrandDescription)
                        .query(sqlQueries.updateBrand);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteBrand = async (brandId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('brands');
        const deleteBrand = await pool.request()
                            .input('brandId', sql.Int, brandId)
                            .query(sqlQueries.deleteBrand);
        return deleteBrand.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getAllBrands,
    getById,
    createBrand,
    updateBrand,
    deleteBrand
}