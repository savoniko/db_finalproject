-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: db_design
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `replies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reply` varchar(256) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `replies_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `replies_2_users_idx` (`user_id`),
  KEY `replies_2_posts_idx` (`post_id`),
  KEY `replies_2_replies_idx` (`replies_id`),
  CONSTRAINT `replies_2_posts` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `replies_2_replies` FOREIGN KEY (`replies_id`) REFERENCES `replies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `replies_2_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replies`
--

LOCK TABLES `replies` WRITE;
/*!40000 ALTER TABLE `replies` DISABLE KEYS */;
INSERT INTO `replies` VALUES (1,'That’s actually our restaurant, but SpaceX is building a futuristic bar at the top of the high bay with 360 degree windows & a glass floor looking down on the rocket factory\n',4,1,NULL,'2021-01-11 17:23:28','2021-01-11 17:23:28'),(2,'Really, how does one get to this bar when complete?\n',3,1,1,'2021-01-11 17:25:07','2021-01-11 17:25:07'),(3,'Catapult high into the air & land on the roof with a base jumping parachute (the only way to travel)\n',4,1,2,'2021-01-11 17:25:22','2021-01-11 17:25:54'),(4,'Elevator?\n',3,1,3,'2021-01-11 17:25:54','2021-01-11 17:25:54'),(5,'That too\n',4,1,4,'2021-01-11 17:26:16','2021-01-11 17:27:11'),(6,'SpaceX lowered cost of space from $10K/Kg to $1K/Kg. Starship will lower it to $100/Kg',3,2,NULL,'2021-01-11 18:09:08','2021-01-11 18:09:08'),(7,'Traveling to Mars is as rare today as it was rare to cross the Atlantic in the 1400s',3,2,6,'2021-01-11 18:11:10','2021-01-11 18:11:10');
/*!40000 ALTER TABLE `replies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-13 22:42:23
