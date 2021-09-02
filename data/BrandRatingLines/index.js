'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllBrandRatingLines = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BrandRatingLines');
        const BrandRatingLines = await pool.request()
                                .query(sqlQueries.BrandRatingLinesAll);
        return BrandRatingLines.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(BrandRatingID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BrandRatingLines');
        const BrandRatingLine = await pool.request()
                            .input('BrandRatingID', sql.Int, BrandRatingID)
                            .query(sqlQueries.BrandRatingLinesbyId);
        return BrandRatingLine.recordset;
    } catch (error) {
        return error.message;
    }
}

const createBrandRatingLine = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BrandRatingLines');
        const insertBrandRatingLine = await pool.request()
                            .input('BrandID', sql.Int, data.BrandID)
                            .input('BrandName', sql.VarChar(64), data.BrandName)
                            .input('BrandRating', sql.TinyInt, data.BrandRating)
                            .input('CountryCode', sql.VarChar(2), data.CountryCode)
                            .query(sqlQueries.createBrandRatingLine);                            
        return insertBrandRatingLine.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateBrandRatingLine = async (BrandRatingID, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BrandRatingLines');
        const update = await pool.request()
                        .input('BrandRatingID', sql.Int, BrandRatingID)
                        .input('BrandID', sql.Int, data.BrandID)
                        .input('BrandName', sql.VarChar(64), data.BrandName)
                        .input('BrandRating', sql.TinyInt, data.BrandRating)
                        .input('CountryCode', sql.VarChar(2), data.CountryCode)
                        .query(sqlQueries.updateBrandRatingLine);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteBrandRatingLine = async (BrandRatingID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('BrandRatingLines');
        const deleteBrandRatingLine = await pool.request()
                            .input('BrandRatingID', sql.Int, BrandRatingID)
                            .query(sqlQueries.delateBrandRatingLine);
        return deleteBrandRatingLine.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getAllBrandRatingLines,
    getById,
    createBrandRatingLine,
    updateBrandRatingLine,
    deleteBrandRatingLine
}