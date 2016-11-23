/* eslint-disable strict */
'use strict';

const express = require('express');
const router = new express.Router();

/**
 * GET '/products/'
 * Products route.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/categories/', (req, res) => {
  const data = [
    {
      name: 'Summer collection',
      slug: 'summer-collection',
    },
    {
      name: 'Winter collection',
      slug: 'winter-collection',
    },
    {
      name: 'T-shirts',
      slug: 't-shirts',
    },
    {
      name: 'Hoodies & Sweatshirts',
      slug: 'hoodies-and-sweatshirts',
    },
    {
      name: 'Shorts',
      slug: 'shorts',
    },
    {
      name: 'Shoes',
      slug: 'shoes',
    },
    {
      name: 'Polos',
      slug: 'polos',
    },
    {
      name: 'Sweaters',
      slug: 'sweaters',
    },
    {
      name: 'Jeans',
      slug: 'jeans',
    },
    {
      name: 'Pants',
      slug: 'pants',
    },
  ];

  const jsonData = {
    status: 'OK',
    data,
  };

  // respond with json data
  res.json(jsonData);
});

/**
 * GET '/products/'
 * Products route.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/products/', (req, res) => {
  const data = [
    {
      name: 'Textured Jersey Henley',
      slug: 'textured-jersey-henley',
      description: 'Our basic long sleeve henley updated with textured fabric and colorblocking, an icon at left chest and interior neck taping, Slim Fit, Imported',
      categories: '[1, 4]',
      images: ['img1.jpg', 'img11.jpg', 'img12.jpg'],
      price: 12.5,
      sizes: [
        {
          name: 'S',
          count: 1,
        },
        {
          name: 'L',
          count: 4,
        },
        {
          name: 'XL',
          count: 17,
        },
      ],
    },
    {
      name: 'Must-Have V Neck T-Shirt',
      slug: 'must-have-v-neck-t-shirt',
      desc: 'There\'s no such thing as too many tees. This V neck basic tee in jersey fabric has an icon embroidered at left chest and contrast interior neck taping, Slim Fit, Imported',
      categories: '[1, 3]',
      images: ['img2.jpg', 'img21.jpg', 'img22.jpg'],
      price: 14,
      sizes: [
        {
          name: 'S',
          count: 5,
        },
        {
          name: 'M',
          count: 4,
        },
        {
          name: 'XL',
          count: 12,
        },
      ],
    },
    {
      name: 'Must-Have Contrast T-Shirt',
      slug: 'must-have-contrast-t-shirt',
      desc: 'A great piece to add to your tee collection, featuring textured fabric, a contrast icon and pocket at left chest, a crew neckline and contrast interior neck taping, Slim Fit, Imported',
      categories: '[1, 3]',
      images: ['img3.jpg', 'img31.jpg', 'img32.jpg', 'img33.jpg'],
      price: 14,
      sizes: [
        {
          name: 'XS',
          count: 10,
        },
        {
          name: 'S',
          count: 9,
        },
        {
          name: 'M',
          count: 10,
        },
        {
          name: 'L',
          count: 12,
        },
      ],
    },
    {
      name: 'Textured Logo Graphic Tee',
      slug: 'textured-logo-graphic-tee',
      desc: 'A supersoft tee with a textured look, featuring logo graphic applique and a crew neckline, Imported',
      categories: '[1, 3]',
      images: ['img4.jpg', 'img41.jpg', 'img42.jpg'],
      price: 25,
      sizes: [
        {
          name: 'XS',
          count: 15,
        },
        {
          name: 'S',
          count: 15,
        },
        {
          name: 'M',
          count: 10,
        },
        {
          name: 'L',
          count: 12,
        },
        {
          name: 'XL',
          count: 12,
        },
      ],
    },
    {
      name: 'Colorblock Hooded Graphic Tee',
      slug: 'colorblock-hooded-graphic-tee',
      desc: 'A soft raglan tee featuring a hood with drawstrings, long sleeves, textured fabric, colorblocking and a printed front logo graphic, Imported',
      categories: '[1, 3]',
      images: ['img5.jpg', 'img51.jpg', 'img52.jpg', 'img53.jpg'],
      price: 29,
      sizes: [
        {
          name: 'XS',
          count: 5,
        },
        {
          name: 'M',
          count: 10,
        },
        {
          name: 'L',
          count: 12,
        },
        {
          name: 'XL',
          count: 2,
        },
      ],
    },
    {
      name: 'Plaid Poplin Shirt',
      slug: 'plaid-poplin-shirt',
      desc: 'A soft raglan tee featuring a hood with drawstrings, long sleeves, textured fabric, colorblocking and a printed front logo graphic, Imported',
      categories: '[1, 3]',
      images: ['img6.jpg', 'img61.jpg', 'img62.jpg', 'img63.jpg'],
      price: 19.5,
      sizes: [
        {
          name: 'XS',
          count: 3,
        },
        {
          name: 'S',
          count: 25,
        },
        {
          name: 'M',
          count: 15,
        },
        {
          name: 'L',
          count: 12,
        },
        {
          name: 'XL',
          count: 2,
        },
      ],
    },
    {
      name: 'Textured Logo Jogger Shorts',
      slug: 'textured-logo-jogger-shorts',
      desc: 'Comfortable go-to fleece gets updated with applique logo detailing, allover textural appeal, two side pockets, one back pocket, elasticized drawstring waist, Imported',
      categories: '[1, 5]',
      images: ['img7.jpg', 'img71.jpg', 'img72.jpg', 'img73.jpg', 'img74.jpg'],
      price: 25,
      sizes: [
        {
          name: 'XS',
          count: 13,
        },
        {
          name: 'S',
          count: 5,
        },
        {
          name: 'M',
          count: 15,
        },
        {
          name: 'L',
          count: 2,
        },
        {
          name: 'XL',
          count: 2,
        },
      ],
    },
    {
      name: 'Beach Prep Fit Board Shorts',
      slug: 'beach-prep-fit-board-shorts',
      desc: 'Comfortable swim shorts made with four-way stretch, quick dry fabric, featuring a lace-up closure at waist, an icon at left leg, side pockets and a flapover back pocket, Imported',
      categories: '[1, 5]',
      images: ['img8.jpg', 'img81.jpg'],
      price: 46,
      sizes: [
        {
          name: '28W',
          count: 13,
        },
        {
          name: '30W',
          count: 5,
        },
        {
          name: '32W',
          count: 15,
        },
        {
          name: '34W',
          count: 2,
        },
        {
          name: '36W',
          count: 2,
        },
      ],
    },
    {
      name: 'Textured V-Neck Icon Sweater',
      slug: 'textured-v-neck-icon-sweater',
      desc: 'A classic V neck sweater featuring a textured pattern, ribbed trims and an icon at left chest, Slim Fit, Imported',
      categories: '[1, 8]',
      images: ['img9.jpg','img91.jpg', 'img92.jpg', 'img93.jpg', 'img94.jpg'],
      price: 39,
      sizes: [
        {
          name: 'S',
          count: 13,
        },
        {
          name: 'M',
          count: 5,
        },
        {
          name: 'XL',
          count: 15,
        },
      ],
    },
    {
      name: 'Textured Logo Graphic Hoodie',
      slug: 'textured-logo-graphic-hoodie',
      desc: 'A cool sweatshirt in textured fleece, featuring embroidered and twill applique logo graphic detailing, a full metal zipper, a hood with drawstrings, ribbed hem and cuffs, and front pockets, Slim Fit, Imported',
      categories: '[1, 4]',
      images: ['img10.jpg', 'img101.jpg', 'img102.jpg', 'img103.jpg', 'img104.jpg'],
      price: 49,
      sizes: [
        {
          name: 'XS',
          count: 13,
        },
        {
          name: 'M',
          count: 50,
        },
        {
          name: 'L',
          count: 15,
        },
      ],
    },
  ];

  const jsonData = {
    status: 'OK',
    data,
  };

  // respond with json data
  res.json(jsonData);
});

module.exports = router;
