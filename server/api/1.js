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
      categories: '[1, 4]',
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
      slug: 'textured-v-neck-icon-sweater-1',
      desc: 'A classic V neck sweater featuring a textured pattern, ribbed trims and an icon at left chest, Slim Fit, Imported',
      categories: '[1, 8]',
      images: ['img9.jpg', 'img91.jpg', 'img92.jpg', 'img93.jpg', 'img94.jpg'],
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
    {
      name: 'Hollister Skinny Zipper Fly Chinos',
      slug: 'hollister-skinny-zipper-fly-chinos-black',
      desc: 'Made with stretch twill fabric, featuring side pockets, back welt pockets, contrast interior waistband and folded hems, Imported',
      categories: '[1, 10]',
      images: ['img11_1.jpg', 'img11_2.jpg', 'img11_3.jpg'],
      price: 49,
      sizes: [
        {
          name: '28W',
          count: 13,
        },
        {
          name: '30W',
          count: 50,
        },
        {
          name: '32W',
          count: 15,
        },
        {
          name: '34W',
          count: 15,
        },
        {
          name: '36W',
          count: 15,
        },
      ],
    },
    {
      name: 'Hollister Skinny Zipper Fly Chinos',
      slug: 'hollister-skinny-zipper-fly-chinos',
      desc: 'Our chino pants with just the right amount of stretch, featuring a contrast waist interior, black twill, folded hems and side pockets, Imported',
      categories: '[1, 10]',
      images: ['img12_1.jpg', 'img12_2.jpg', 'img12_3.jpg'],
      price: 49,
      sizes: [
        {
          name: '28W',
          count: 13,
        },
        {
          name: '30W',
          count: 10,
        },
        {
          name: '32W',
          count: 5,
        },
        {
          name: '34W',
          count: 5,
        },
        {
          name: '36W',
          count: 10,
        },
      ],
    },
    {
      name: 'Hollister Classic Taper Chinos',
      slug: 'hollister-classic-taper-chinos',
      desc: 'Tapered chino pants made with stretch twill fabric, featuring side pockets, a zipper fly and contrast waist interior, Imported',
      categories: '[1, 10]',
      images: ['img13_1.jpg', 'img13_2.jpg', 'img13_3.jpg'],
      price: 59,
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
          count: 5,
        },
        {
          name: '34W',
          count: 5,
        },
        {
          name: '36W',
          count: 20,
        },
      ],
    },
    {
      name: 'Hollister Slim Straight Jeans',
      slug: 'hollister-slim-straight-jeans',
      desc: 'Made with dark wash, rigid denim featuring fading and whiskering, light destruction, a zipper fly, five-pocket styling and iconic back pocket stitching, Imported',
      categories: '[1, 9]',
      images: ['img14_1.jpg', 'img14_2.jpg', 'img14_3.jpg'],
      price: 59,
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
          count: 5,
        },
        {
          name: '34W',
          count: 5,
        },
        {
          name: '36W',
          count: 1,
        },
      ],
    },
    {
      name: 'Hollister Skinny Jeans',
      slug: 'hollister-skinny-jeans',
      desc: 'Skinny jeans with a super light wash and Advanced Stretch, featuring a zipper fly, five-pocket styling and iconic back pocket stitching, Imported',
      categories: '[1, 9]',
      images: ['img15_1.jpg', 'img15_2.jpg', 'img15_3.jpg'],
      price: 48,
      sizes: [
        {
          name: '28W',
          count: 15,
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
          count: 5,
        },
        {
          name: '36W',
          count: 12,
        },
      ],
    },
    {
      name: 'Hollister Classic Straight Jeans',
      slug: 'hollister-classic-straight-jeans',
      desc: 'A stylish pair for everyday wear, featuring medium wash denim, rigid fabric, fading and whiskering, destruction with patch repair, five-pocket styling, iconic back pocket stitching and a zipper fly, Imported',
      categories: '[1, 9]',
      images: ['img16_1.jpg', 'img16_2.jpg', 'img16_3.jpg', 'img16_4.jpg'],
      price: 48,
      sizes: [
        {
          name: '28W',
          count: 15,
        },
        {
          name: '30W',
          count: 5,
        },
        {
          name: '32W',
          count: 1,
        },
        {
          name: '34W',
          count: 5,
        },
        {
          name: '36W',
          count: 1,
        },
      ],
    },
    {
      name: 'Beach Prep Fit Board Shorts',
      slug: 'beach-prep-fit-board-shorts',
      desc: 'Comfortable shorts made with four-way stretch fabric, featuring an elasticated waistband, side pockets, a secondary pocket in the right pocket and a back pocket, Imported',
      categories: '[1, 5]',
      images: ['img17_1.jpg', 'img17_2.jpg', 'img17_3.jpg', 'img17_4.jpg'],
      price: 45,
      sizes: [
        {
          name: 'XS',
          count: 15,
        },
        {
          name: 'S',
          count: 5,
        },
        {
          name: 'M',
          count: 1,
        },
        {
          name: 'L',
          count: 5,
        },
        {
          name: 'XL',
          count: 1,
        },
      ],
    },
    {
      name: 'Iconic Guard Fit Swim Shorts',
      slug: 'iconic-guard-fit-swim-shorts',
      desc: 'Comfortable shorts made with quick dry, four-way stretch fabric, featuring a mesh basket, a drawstring waist, heat sealed side zip pockets and icon at left leg, Imported',
      categories: '[1, 5]',
      images: ['img18_1.jpg', 'img18_2.jpg', 'img18_3.jpg', 'img18_4.jpg'],
      price: 45,
      sizes: [
        {
          name: 'XS',
          count: 5,
        },
        {
          name: 'S',
          count: 15,
        },
        {
          name: 'M',
          count: 12,
        },
        {
          name: 'L',
          count: 5,
        },
        {
          name: 'XL',
          count: 13,
        },
      ],
    },
    {
      name: 'Textured Logo Jogger Shorts',
      slug: 'textured-logo-jogger-shorts',
      desc: 'Comfortable go-to fleece gets updated with applique logo detailing, allover textural appeal, two side pockets, one back pocket, elasticized drawstring waist, Imported',
      categories: '[1, 5]',
      images: ['img19_1.jpg', 'img19_2.jpg', 'img19_3.jpg', 'img19_4.jpg'],
      price: 25,
      sizes: [
        {
          name: 'XS',
          count: 1,
        },
        {
          name: 'S',
          count: 12,
        },
        {
          name: 'M',
          count: 2,
        },
        {
          name: 'L',
          count: 5,
        },
        {
          name: 'XL',
          count: 3,
        },
      ],
    },
    {
      name: 'Patterned Crew Sweater',
      slug: 'patterned-crew-sweater-brown',
      desc: 'A cool crewneck sweater with a textured pattern and ribbed trim, Slim Fit, Imported',
      categories: '[1, 8]',
      images: ['img20_1.jpg', 'img20_2.jpg', 'img20_3.jpg', 'img20_4.jpg'],
      price: 60,
      sizes: [
        {
          name: 'XS',
          count: 15,
        },
        {
          name: 'S',
          count: 12,
        },
        {
          name: 'M',
          count: 12,
        },
        {
          name: 'L',
          count: 5,
        },
        {
          name: 'XL',
          count: 31,
        },
      ],
    },
    {
      name: 'Patterned Crew Sweater',
      slug: 'patterned-crew-sweater',
      desc: 'Sweater weather is here, so stock up on the coolest styles. This one features a crew neckline, allover pattern and ribbed trim, Slim Fit, Imported',
      categories: '[1, 8]',
      images: ['img21_1.jpg', 'img21_2.jpg', 'img21_3.jpg', 'img21_4.jpg'],
      price: 65,
      sizes: [
        {
          name: 'XS',
          count: 15,
        },
        {
          name: 'S',
          count: 2,
        },
        {
          name: 'M',
          count: 2,
        },
        {
          name: 'L',
          count: 15,
        },
        {
          name: 'XL',
          count: 13,
        },
      ],
    },
    {
      name: 'Button-Front Icon Cardigan',
      slug: 'button-front-icon-cardigan',
      desc: 'Supersoft with a button-front closure, featuring front pockets, an icon at left chest and ribbed trim, Slim Fit, Imported',
      categories: '[1, 8]',
      images: ['img22_1.jpg', 'img22_2.jpg', 'img22_3.jpg'],
      price: 49,
      sizes: [
        {
          name: 'XS',
          count: 15,
        },
        {
          name: 'S',
          count: 12,
        },
        {
          name: 'M',
          count: 12,
        },
        {
          name: 'L',
          count: 1,
        },
        {
          name: 'XL',
          count: 5,
        },
      ],
    },
    {
      name: 'Mock Neck Sweater',
      slug: 'mock-neck-sweater',
      desc: 'A stylish and supersoft sweater with a mockneck, ribbed trim and logo patch at left hip, Slim Fit, Imported',
      categories: '[1, 8]',
      images: ['img23_1.jpg', 'img23_2.jpg', 'img23_3.jpg'],
      price: 29,
      sizes: [
        {
          name: 'XS',
          count: 5,
        },
        {
          name: 'S',
          count: 2,
        },
        {
          name: 'M',
          count: 2,
        },
        {
          name: 'L',
          count: 15,
        },
        {
          name: 'XL',
          count: 15,
        },
      ],
    },
    {
      name: 'Boucle Shawl Cardigan',
      slug: 'boucle-shawl-cardigan',
      desc: 'A textured shawl cardigan made with cozy boucle fabric, featuring a button front closure, front pockets, a logo patch at left hip and ribbed trim, Imported',
      categories: '[1, 8]',
      images: ['img24_1.jpg', 'img24_2.jpg', 'img24_3.jpg', 'img24_4.jpg'],
      price: 55,
      sizes: [
        {
          name: 'XS',
          count: 15,
        },
        {
          name: 'S',
          count: 12,
        },
        {
          name: 'M',
          count: 12,
        },
        {
          name: 'L',
          count: 1,
        },
        {
          name: 'XL',
          count: 1,
        },
      ],
    },
    {
      name: 'V-Neck Icon Sweater',
      slug: 'v-neck-icon-sweater',
      desc: 'A classic V-neck sweater featuring ribbed trim and an icon at left chest, Slim Fit, Imported',
      categories: '[1, 8]',
      images: ['img25_1.jpg', 'img25_2.jpg', 'img25_3.jpg'],
      price: 39,
      sizes: [
        {
          name: 'XS',
          count: 15,
        },
        {
          name: 'S',
          count: 2,
        },
        {
          name: 'M',
          count: 12,
        },
        {
          name: 'L',
          count: 12,
        },
        {
          name: 'XL',
          count: 11,
        },
      ],
    },
    {
      name: 'Stripe Jersey Polo',
      slug: 'stripe-jersey-polo',
      desc: 'A classic polo updated with wide, textured stripes, an icon at left chest and side hem slits, Slim Fit, Imported',
      categories: '[1, 7]',
      images: ['img26_1.jpg', 'img26_2.jpg', 'img26_3.jpg'],
      price: 28,
      sizes: [
        {
          name: 'XS',
          count: 1,
        },
        {
          name: 'S',
          count: 21,
        },
        {
          name: 'M',
          count: 2,
        },
        {
          name: 'L',
          count: 2,
        },
        {
          name: 'XL',
          count: 11,
        },
      ],
    },
    {
      name: 'Stretch Pique Polo',
      slug: 'stretch-pique-polo-1',
      desc: 'An iconic polo in stretch pique fabric, featuring contrast interior and neck taping, a contrast icon embroidered at left chest, and side hem slits, Classic Fit, Imported',
      categories: '[1, 7]',
      images: ['img27_1.jpg', 'img27_2.jpg', 'img27_3.jpg'],
      price: 29,
      sizes: [
        {
          name: 'XS',
          count: 1,
        },
        {
          name: 'S',
          count: 21,
        },
        {
          name: 'M',
          count: 2,
        },
        {
          name: 'L',
          count: 2,
        },
        {
          name: 'XL',
          count: 11,
        },
      ],
    },
    {
      name: 'Stretch Pique Polo',
      slug: 'stretch-pique-polo',
      desc: 'An iconic polo in stretch pique fabric with a Slim Fit, featuring contrast interior and neck taping, a contrast icon embroidered at left chest, and side hem slits, Imported',
      categories: '[1, 7]',
      images: ['img28_1.jpg', 'img28_2.jpg', 'img28_3.jpg'],
      price: 29,
      sizes: [
        {
          name: 'XS',
          count: 1,
        },
        {
          name: 'S',
          count: 2,
        },
        {
          name: 'M',
          count: 21,
        },
        {
          name: 'L',
          count: 12,
        },
        {
          name: 'XL',
          count: 1,
        },
      ],
    },
    {
      name: 'Sherpa Lined Textured Hoodie',
      slug: 'sherpa-lined-textured-hoodie',
      desc: 'A super cozy full-zip sweatshirt with sherpa lining at the body and hood, soft jersey lined sleeves, a drawstring hood, an allover textured pattern, an icon embroidered at left chest, two front pockets and ribbed trim, Imported',
      categories: '[1, 4]',
      images: ['img29_1.jpg', 'img29_2.jpg', 'img29_3.jpg'],
      price: 29,
      sizes: [
        {
          name: 'XS',
          count: 12,
        },
        {
          name: 'S',
          count: 21,
        },
        {
          name: 'M',
          count: 21,
        },
        {
          name: 'L',
          count: 2,
        },
        {
          name: 'XL',
          count: 12,
        },
      ],
    },
    {
      name: 'Neoprene Bomber Jacket',
      slug: 'neoprene-bomber-jacket',
      desc: 'A sporty neoprene bomber featuring waffle paneling, a zip front closure and zip pockets, Imported',
      categories: '[1, 4]',
      images: ['img30_1.jpg', 'img30_2.jpg', 'img30_3.jpg'],
      price: 29,
      sizes: [
        {
          name: 'XS',
          count: 2,
        },
        {
          name: 'S',
          count: 1,
        },
        {
          name: 'M',
          count: 21,
        },
        {
          name: 'L',
          count: 2,
        },
        {
          name: 'XL',
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
