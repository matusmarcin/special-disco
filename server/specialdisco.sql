-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: Št 17.Nov 2016, 16:43
-- Verzia serveru: 5.7.11
-- Verzia PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `specialdisco`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `categories`
--

CREATE TABLE `categories` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`) VALUES
(1, 'Summer collection', 'summer-collection'),
(2, 'Winter collection', 'winter-collection'),
(3, 'T-shirts', 't-shirts'),
(4, 'Hoodies & Sweatshirts', 'hoodies-and-sweatshirts'),
(5, 'Shorts', 'shorts'),
(6, 'Shoes', 'shoes'),
(7, 'Polos', 'polos'),
(8, 'Sweaters', 'sweaters'),
(9, 'Jeans', 'jeans'),
(10, 'Pants', 'pants');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `categories` text NOT NULL,
  `images` text NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `sizes` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Sťahujem dáta pre tabuľku `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `categories`, `images`, `price`, `sizes`) VALUES
(1, 'Textured Jersey Henley', 'textured-jersey-henley', 'Our basic long sleeve henley updated with textured fabric and colorblocking, an icon at left chest and interior neck taping, Slim Fit, Imported', '[1, 4]', '["img1.jpg","img11.jpg","img12.jpg"]', '12.50', '[{"name":"S","count":1},{"name":"L","count":4},{"name":"XL","count":17}]'),
(2, 'Must-Have V Neck T-Shirt', 'must-have-v-neck-t-shirt', 'There''s no such thing as too many tees. This V neck basic tee in jersey fabric has an icon embroidered at left chest and contrast interior neck taping, Slim Fit, Imported', '[1, 3]', '["img2.jpg","img21.jpg","img22.jpg"]', '14.00', '[{"name":"S","count":5},{"name":"M","count":4},{"name":"XL","count":12}]'),
(3, 'Must-Have Contrast T-Shirt', 'must-have-contrast-t-shirt', 'A great piece to add to your tee collection, featuring textured fabric, a contrast icon and pocket at left chest, a crew neckline and contrast interior neck taping, Slim Fit, Imported', '[1, 3]', '["img3.jpg","img31.jpg","img32.jpg","img33.jpg"]', '14.00', '[{"name":"XS","count":10},{"name":"S","count":9},{"name":"M","count":10},{"name":"L","count":12}]'),
(4, 'Textured Logo Graphic Tee', 'textured-logo-graphic-tee', 'A supersoft tee with a textured look, featuring logo graphic applique and a crew neckline, Imported', '[1, 3]', '["img4.jpg","img41.jpg","img42.jpg"]', '25.00', '[{"name":"XS","count":15},{"name":"S","count":15},{"name":"M","count":10},{"name":"L","count":12},{"name":"XL","count":12}]'),
(5, 'Colorblock Hooded Graphic Tee', 'colorblock-hooded-graphic-tee', 'A soft raglan tee featuring a hood with drawstrings, long sleeves, textured fabric, colorblocking and a printed front logo graphic, Imported', '[1, 4]', '["img5.jpg","img51.jpg","img52.jpg","img53.jpg"]', '29.00', '[{"name":"XS","count":5},{"name":"M","count":10},{"name":"L","count":12},{"name":"XL","count":2}]'),
(6, 'Plaid Poplin Shirt', 'plaid-poplin-shirt', 'A soft raglan tee featuring a hood with drawstrings, long sleeves, textured fabric, colorblocking and a printed front logo graphic, Imported', '[1, 4]', '["img6.jpg","img61.jpg","img62.jpg","img63.jpg"]', '19.50', '[{"name":"XS","count":3},{"name":"S","count":25},{"name":"M","count":15},{"name":"L","count":12},{"name":"XL","count":2}]'),
(7, 'Textured Logo Jogger Shorts', 'textured-logo-jogger-shorts', 'Comfortable go-to fleece gets updated with applique logo detailing, allover textural appeal, two side pockets, one back pocket, elasticized drawstring waist, Imported', '[1, 5]', '["img7.jpg","img71.jpg","img72.jpg","img73.jpg","img74.jpg"]', '25.00', '[{"name":"XS","count":13},{"name":"S","count":5},{"name":"M","count":15},{"name":"L","count":2},{"name":"XL","count":2}]'),
(8, 'Beach Prep Fit Board Shorts', 'beach-prep-fit-board-shorts', 'Comfortable swim shorts made with four-way stretch, quick dry fabric, featuring a lace-up closure at waist, an icon at left leg, side pockets and a flapover back pocket, Imported', '[1, 5]', '["img8.jpg","img81.jpg"]', '46.00', '[{"name":"28W","count":13},{"name":"30W","count":5},{"name":"32W","count":15},{"name":"34W","count":2},{"name":"36W","count":2}]'),
(9, 'Textured V-Neck Icon Sweater', 'textured-v-neck-icon-sweater', 'A classic V neck sweater featuring a textured pattern, ribbed trims and an icon at left chest, Slim Fit, Imported', '[1, 8]', '["img9.jpg","img91.jpg","img92.jpg","img93.jpg","img94.jpg"]', '39.00', '[{"name":"S","count":13},{"name":"M","count":5},{"name":"XL","count":15}]'),
(10, 'Textured Logo Graphic Hoodie', 'textured-logo-graphic-hoodie', 'A cool sweatshirt in textured fleece, featuring embroidered and twill applique logo graphic detailing, a full metal zipper, a hood with drawstrings, ribbed hem and cuffs, and front pockets, Slim Fit, Imported', '[1, 4]', '["img10.jpg","img101.jpg","img102.jpg","img103.jpg","img104.jpg"]', '49.00', '[{"name":"XS","count":13},{"name":"M","count":50},{"name":"L","count":15}]'),
(11, 'Hollister Skinny Zipper Fly Chinos', 'hollister-skinny-zipper-fly-chinos', 'Made with stretch twill fabric, featuring side pockets, back welt pockets, contrast interior waistband and folded hems, Imported', '[1, 10]', '["img11_1.jpg","img11_2.jpg","img11_3.jpg"]', '49.00', '[{"name":"28W","count":13},{"name":"30W","count":5},{"name":"32W","count":15},{"name":"34W","count":2},{"name":"36W","count":2}]'),
(12, 'Hollister Super Skinny Zipper Fly Chinos', 'hollister-super-skinny-zipper-fly-chinos', 'Our chino pants with just the right amount of stretch, featuring a contrast waist interior, black twill, folded hems and side pockets, Imported', '[1, 10]', '["img12_1.jpg","img12_2.jpg","img12_3.jpg"]', '49.00', '[{"name":"28W","count":13},{"name":"30W","count":5},{"name":"32W","count":15},{"name":"34W","count":2},{"name":"36W","count":2}]'),
(13, 'Hollister Classic Taper Chinos', 'hollister-classic-taper-chinos', 'Tapered chino pants made with stretch twill fabric, featuring side pockets, a zipper fly and contrast waist interior, Imported', '[1, 10]', '["img13_1.jpg","img13_2.jpg","img13_3.jpg"]', '50.00', '[{"name":"28W","count":15},{"name":"30W","count":5},{"name":"32W","count":15},{"name":"34W","count":22},{"name":"36W","count":20}]'),
(14, 'Hollister Slim Straight Jeans', 'hollister-slim-straight-jeans', 'Made with dark wash, rigid denim featuring fading and whiskering, light destruction, a zipper fly, five-pocket styling and iconic back pocket stitching, Imported', '[1, 9]', '["img14_1.jpg","img14_2.jpg","img14_3.jpg"]', '59.00', '[{"name":"28W","count":13},{"name":"30W","count":5},{"name":"32W","count":15},{"name":"34W","count":2},{"name":"36W","count":2}]'),
(15, 'Hollister Skinny Jeans', 'hollister-skinny-jeans', 'Skinny jeans with a super light wash and Advanced Stretch, featuring a zipper fly, five-pocket styling and iconic back pocket stitching, Imported', '[1, 9]', '["img15_1.jpg","img15_2.jpg","img15_3.jpg"]', '48.00', '[{"name":"28W","count":15},{"name":"30W","count":5},{"name":"32W","count":15},{"name":"34W","count":22},{"name":"36W","count":20}]'),
(16, 'Hollister Classic Straight Jeans', 'hollister-classic-straight-jeans', 'A stylish pair for everyday wear, featuring medium wash denim, rigid fabric, fading and whiskering, destruction with patch repair, five-pocket styling, iconic back pocket stitching and a zipper fly, Imported', '[1, 9]', '["img16_1.jpg","img16_2.jpg","img16_3.jpg","img16_4.jpg"]', '60.00', '[{"name":"28W","count":13},{"name":"30W","count":5},{"name":"32W","count":15},{"name":"34W","count":2},{"name":"36W","count":2}]'),
(17, 'Beach Prep Fit Board Shorts', 'beach-prep-fit-board-shorts', 'Comfortable shorts made with four-way stretch fabric, featuring an elasticated waistband, side pockets, a secondary pocket in the right pocket and a back pocket, Imported', '[1, 5]', '["img17_1.jpg","img17_2.jpg","img17_3.jpg","img17_4.jpg"]', '45.00', '[{"name":"XS","count":10},{"name":"S","count":9},{"name":"M","count":10},{"name":"L","count":12}]'),
(18, 'Iconic Guard Fit Swim Shorts', 'iconic-guard-fit-swim-shorts', 'Comfortable shorts made with quick dry, four-way stretch fabric, featuring a mesh basket, a drawstring waist, heat sealed side zip pockets and icon at left leg, Imported', '[1, 5]', '["img18_1.jpg","img18_2.jpg","img18_3.jpg","img18_4.jpg"]', '46.00', '[{"name":"XS","count":10},{"name":"S","count":19},{"name":"M","count":22},{"name":"L","count":12}]'),
(19, 'Textured Logo Jogger Shorts', 'textured-logo-jogger-shorts', 'Comfortable go-to fleece gets updated with applique logo detailing, allover textural appeal, two side pockets, one back pocket, elasticized drawstring waist, Imported', '[1, 5]', '["img19_1.jpg","img19_2.jpg","img19_3.jpg","img19_4.jpg"]', '25.00', '[{"name":"S","count":1},{"name":"L","count":4},{"name":"XL","count":17}]'),
(20, 'Patterned Crew Sweater', 'patterned-crew-sweater', 'A cool crewneck sweater with a textured pattern and ribbed trim, Slim Fit, Imported', '[1, 8]', '["img20_1.jpg","img20_2.jpg","img20_3.jpg","img20_4.jpg"]', '60.00', '[{"name":"XS","count":13},{"name":"M","count":50},{"name":"L","count":15}]'),
(21, 'Patterned Crew Sweater', 'patterned-crew-sweater', 'Sweater weather is here, so stock up on the coolest styles. This one features a crew neckline, allover pattern and ribbed trim, Slim Fit, Imported', '[1, 8]', '["img21_1.jpg","img21_2.jpg","img21_3.jpg","img21_4.jpg","img21_5.jpg"]', '65.00', '[{"name":"XS","count":13},{"name":"M","count":50},{"name":"L","count":15}]'),
(22, 'Button-Front Icon Cardigan', 'button-front-icon-cardigan', 'Supersoft with a button-front closure, featuring front pockets, an icon at left chest and ribbed trim, Slim Fit, Imported', '[1, 8]', '["img22_1.jpg","img22_2.jpg","img22_3.jpg"]', '49.00', '[{"name":"XS","count":13},{"name":"M","count":50},{"name":"L","count":15}]'),
(23, 'Mock Neck Sweater', 'mock-neck-sweater', 'A stylish and supersoft sweater with a mockneck, ribbed trim and logo patch at left hip, Slim Fit, Imported', '[1, 8]', '["img23_1.jpg","img23_2.jpg","img23_3.jpg"]', '29.00', '[{"name":"XS","count":13},{"name":"M","count":50},{"name":"L","count":15}]'),
(24, 'Boucle Shawl Cardigan', 'boucle-shawl-cardigan', 'A textured shawl cardigan made with cozy boucle fabric, featuring a button front closure, front pockets, a logo patch at left hip and ribbed trim, Imported', '[1, 8]', '["img24_1.jpg","img24_2.jpg","img24_3.jpg","img24_4.jpg"]', '55.00', '[{"name":"XS","count":13},{"name":"M","count":50},{"name":"L","count":15}]'),
(25, 'V-Neck Icon Sweater', 'v-neck-icon-sweater', 'A classic V-neck sweater featuring ribbed trim and an icon at left chest, Slim Fit, Imported', '[1, 8]', '["img25_1.jpg","img25_2.jpg","img25_3.jpg"]', '39.00', '[{"name":"XS","count":13},{"name":"M","count":50},{"name":"L","count":15}]'),
(26, 'Stripe Jersey Polo', 'stripe-jersey-polo', 'A classic polo updated with wide, textured stripes, an icon at left chest and side hem slits, Slim Fit, Imported\r\n\r\n', '[1, 7]', '["img26_1.jpg","img26_2.jpg","img26_3.jpg"]', '28.00', '[{"name":"XS","count":1},{"name":"M","count":50},{"name":"L","count":25}]'),
(27, 'Stretch Pique Polo', 'stretch-pique-polo', 'An iconic polo in stretch pique fabric, featuring contrast interior and neck taping, a contrast icon embroidered at left chest, and side hem slits, Classic Fit, Imported', '[1, 7]', '["img27_1.jpg","img27_2.jpg","img27_3.jpg"]', '29.00', '[{"name":"XS","count":1},{"name":"M","count":22},{"name":"L","count":2}]'),
(28, 'Stretch Pique Polo', 'stretch-pique-polo', 'An iconic polo in stretch pique fabric with a Slim Fit, featuring contrast interior and neck taping, a contrast icon embroidered at left chest, and side hem slits, Imported', '[1, 7]', '["img28_1.jpg","img28_2.jpg","img28_3.jpg"]', '29.00', '[{"name":"XS","count":1},{"name":"M","count":22},{"name":"L","count":2}]'),
(29, 'Sherpa Lined Textured Hoodie', 'sherpa-lined-textured-hoodie', 'A super cozy full-zip sweatshirt with sherpa lining at the body and hood, soft jersey lined sleeves, a drawstring hood, an allover textured pattern, an icon embroidered at left chest, two front pockets and ribbed trim, Imported', '[1, 4]', '["img29_1.jpg","img29_2.jpg","img29_3.jpg"]', '85.00', '[{"name":"XS","count":12},{"name":"M","count":22},{"name":"L","count":20}]'),
(30, 'Neoprene Bomber Jacket', 'neoprene-bomber-jacket', 'A sporty neoprene bomber featuring waffle paneling, a zip front closure and zip pockets, Imported', '[1, 4]', '["img30_1.jpg","img30_2.jpg","img30_3.jpg"]', '49.00', '[{"name":"XS","count":1},{"name":"M","count":22},{"name":"L","count":2}]');

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pre tabuľku `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `categories`
--
ALTER TABLE `categories`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pre tabuľku `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
