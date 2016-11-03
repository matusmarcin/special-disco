/* eslint-disable strict */
'use strict';

const express = require('express');
const router = new express.Router();
const Mysql = require('./../mysql');
const db = new Mysql();

/**
 * GET '/products/:slug'
 * Products route.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/products/:slug', (req, res) => {
  db.query('SELECT id, name, slug FROM categories', (catErr, categories) => {
    if (catErr) {
      // respond with error
      res.json({
        status: 'ERROR',
        message: catErr,
      });
      return;
    }

    let reqCat;

    categories.some((e) => {
      if (e.slug === req.params.slug) {
        reqCat = e.id;
        return true;
      }
      return false;
    });

    if (!reqCat) {
      // respond with error
      res.json({
        status: 'ERROR',
        message: 'Cannot find provided category',
      });
      return;
    }

    db.query('SELECT name, slug, categories, images, price FROM products', (prodErr, rows) => {
      if (prodErr) {
        // respond with error
        res.json({
          status: 'ERROR',
          message: prodErr,
        });
        return;
      }

      const datas = [];

      Object.keys(rows).forEach((i) => {
        const row = rows[i];
        let rowCat = row.categories;

        if (rowCat.indexOf(reqCat)) {
          let data = [];

          rowCat = JSON.parse(rowCat);

          rowCat.forEach((id) => {
            categories.some((category) => {
              if (category.id === id) {
                data.push(category.name);
                return true;
              }
              return false;
            });
          });

          data = {
            name: row.name,
            slug: row.slug,
            categories: JSON.stringify(data),
            img: JSON.parse(row.images)[0],
            price: row.price,
          };

          datas.push(data);
        }
      });

      // respond with data
      res.json({
        status: 'OK',
        data: datas,
      });
    });
  });
});

/**
 * GET '/product/:slug'
 * Products route.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/product/:slug', (req, res) => {
  db.query('SELECT id, name FROM categories', (catErr, categories) => {
    if (catErr) {
      // respond with error
      res.json({
        status: 'ERROR',
        message: catErr,
      });
      return;
    }

    db.query('SELECT name, description, categories, images, price, sizes FROM products WHERE slug = ?', [req.params.slug], (prodErr, rows) => {
      if (prodErr) {
        // respond with error
        res.json({
          status: 'ERROR',
          message: prodErr,
        });
        return;
      }

      if (rows.length !== 1) {
        // respond with error
        res.json({
          status: 'ERROR',
          message: 'Cannot find provided product',
        });
        return;
      }

      const row = rows[0];
      const cats = [];

      JSON.parse(row.categories).forEach((id) => {
        categories.some((category) => {
          if (category.id === id) {
            cats.push(category.name);
            return true;
          }
          return false;
        });
      });

      // respond with data
      res.json({
        name: row.name,
        desc: row.description,
        categories: JSON.stringify(cats),
        images: row.images,
        price: row.price,
        sizes: row.sizes,
      });
    });
  });
});

module.exports = router;
