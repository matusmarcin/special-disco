-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.7.11


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema specialdisco
--

CREATE DATABASE IF NOT EXISTS specialdisco;
USE specialdisco;

--
-- Definition of table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`,`name`,`slug`) VALUES 
 (1,'Summer collection','summer-collection');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;


--
-- Definition of table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `categories` text NOT NULL,
  `images` text NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `sizes` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`,`name`,`slug`,`description`,`categories`,`images`,`price`,`sizes`) VALUES 
 (1,'Textured Jersey Henley','textured-jersey-henley','Our basic long sleeve henley updated with textured fabric and colorblocking, an icon at left chest and interior neck taping, Slim Fit, Imported','[1]','[\"img1.jpg\",\"img11.jpg\",\"img12.jpg\"]','12.50','[{name:\"S\",count:1},{name:\"L\",count:4},{name:\"XL\",count:17}]'),
 (2,'Must-Have V Neck T-Shirt','must-have-v-neck-t-shirt','There\'s no such thing as too many tees. This V neck basic tee in jersey fabric has an icon embroidered at left chest and contrast interior neck taping, Slim Fit, Imported','[1]','[\"img2.jpg\",\"img21.jpg\",\"img22.jpg\"]','14.00','[{name:\"S\",count:5},{name:\"M\",count:4},{name:\"XL\",count:12}]'),
 (3,'Must-Have Contrast T-Shirt','must-have-contrast-t-shirt','A great piece to add to your tee collection, featuring textured fabric, a contrast icon and pocket at left chest, a crew neckline and contrast interior neck taping, Slim Fit, Imported','[1]','[\"img3.jpg\",\"img31.jpg\",\"img32.jpg\",\"img33.jpg\"]','14.00','[{name:\"XS\",count:10},{name:\"S\",count:9},{name:\"M\",count:10},{name:\"L\",count:12}]'),
 (4,'Textured Logo Graphic Tee','textured-logo-graphic-tee','A supersoft tee with a textured look, featuring logo graphic applique and a crew neckline, Imported','[1]','[\"img4.jpg\",\"img41.jpg\",\"img42.jpg\"]','25.00','[{name:\"XS\",count:15},{name:\"S\",count:15},{name:\"M\",count:10},{name:\"L\",count:12},{name:\"XL\",count:12}]'),
 (5,'Colorblock Hooded Graphic Tee','colorblock-hooded-graphic-tee','A soft raglan tee featuring a hood with drawstrings, long sleeves, textured fabric, colorblocking and a printed front logo graphic, Imported','[1]','[\"img5.jpg\",\"img51.jpg\",\"img52.jpg\",\"img53.jpg\"]','29.00','[{name:\"XS\",count:5},{name:\"M\",count:10},{name:\"L\",count:12},{name:\"XL\",count:2}]'),
 (6,'Plaid Poplin Shirt','plaid-poplin-shirt','A soft raglan tee featuring a hood with drawstrings, long sleeves, textured fabric, colorblocking and a printed front logo graphic, Imported','[1]','[\"img6.jpg\",\"img61.jpg\",\"img62.jpg\",\"img63.jpg\"]','19.50','[{name:\"XS\",count:3},{name:\"S\",count:25},{name:\"M\",count:15},{name:\"L\",count:12},{name:\"XL\",count:2}]'),
 (7,'Textured Logo Jogger Shorts','textured-logo-jogger-shorts','Comfortable go-to fleece gets updated with applique logo detailing, allover textural appeal, two side pockets, one back pocket, elasticized drawstring waist, Imported','[1]','[\"img7.jpg\",\"img71.jpg\",\"img72.jpg\",\"img73.jpg\",\"img74.jpg\"]','25.00','[{name:\"XS\",count:13},{name:\"S\",count:5},{name:\"M\",count:15},{name:\"L\",count:2},{name:\"XL\",count:2}]'),
 (8,'Beach Prep Fit Board Shorts','beach-prep-fit-board-shorts','Comfortable swim shorts made with four-way stretch, quick dry fabric, featuring a lace-up closure at waist, an icon at left leg, side pockets and a flapover back pocket, Imported','[1]','[\"img8.jpg\",\"img81.jpg\"]','46.00','[{name:\"28W\",count:13},{name:\"30W\",count:5},{name:\"32W\",count:15},{name:\"34W\",count:2},{name:\"36W\",count:2}]'),
 (9,'Textured V-Neck Icon Sweater','textured-v-neck-icon-sweater','A classic V neck sweater featuring a textured pattern, ribbed trims and an icon at left chest, Slim Fit, Imported','[1]','[\"img9.jpg\",\"img91.jpg\",\"img92.jpg\",\"img93.jpg\",\"img94.jpg\"]','39.00','[{name:\"S\",count:13},{name:\"M\",count:5},{name:\"XL\",count:15}]'),
 (10,'Textured Logo Graphic Hoodie','textured-logo-graphic-hoodie','A cool sweatshirt in textured fleece, featuring embroidered and twill applique logo graphic detailing, a full metal zipper, a hood with drawstrings, ribbed hem and cuffs, and front pockets, Slim Fit, Imported','[1]','[\"img10.jpg\",\"img101.jpg\",\"img102.jpg\",\"img103.jpg\",\"img104.jpg\"]','49.00','[{name:\"XS\",count:13},{name:\"M\",count:50},{name:\"L\",count:15}]');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
