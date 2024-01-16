-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: overview_database
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Add_Tags`
--

DROP TABLE IF EXISTS `Add_Tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Add_Tags` (
  `video_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`video_id`,`tag_id`),
  KEY `fk_Videos_has_Tags_Tags1_idx` (`tag_id`),
  KEY `fk_Videos_has_Tags_Videos1_idx` (`video_id`),
  CONSTRAINT `fk_Videos_has_Tags_Tags1` FOREIGN KEY (`tag_id`) REFERENCES `Tags` (`tag_id`),
  CONSTRAINT `fk_Videos_has_Tags_Videos1` FOREIGN KEY (`video_id`) REFERENCES `Videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Add_Tags`
--

LOCK TABLES `Add_Tags` WRITE;
/*!40000 ALTER TABLE `Add_Tags` DISABLE KEYS */;
INSERT INTO `Add_Tags` VALUES (7,2),(8,2),(9,2),(10,2),(10,6);
/*!40000 ALTER TABLE `Add_Tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Animal'),(2,'Architechture'),(3,'Art'),(4,'Business'),(5,'Food'),(6,'Nature'),(7,'Technology'),(8,'Other');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) NOT NULL,
  `date_comment` date NOT NULL,
  `user_id` int NOT NULL,
  `video_id` int NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `fk_Comments_Users1_idx` (`user_id`),
  KEY `fk_Comments_Videos1_idx` (`video_id`),
  CONSTRAINT `fk_Comments_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `fk_Comments_Videos1` FOREIGN KEY (`video_id`) REFERENCES `Videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Favorites`
--

DROP TABLE IF EXISTS `Favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Favorites` (
  `user_id` int NOT NULL,
  `video_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`video_id`),
  KEY `fk_Users_has_Videos_Videos3_idx` (`video_id`),
  KEY `fk_Users_has_Videos_Users2_idx` (`user_id`),
  CONSTRAINT `fk_Users_has_Videos_Users2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `fk_Users_has_Videos_Videos3` FOREIGN KEY (`video_id`) REFERENCES `Videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favorites`
--

LOCK TABLES `Favorites` WRITE;
/*!40000 ALTER TABLE `Favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `Favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes`
--

DROP TABLE IF EXISTS `Likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes` (
  `user_id` int NOT NULL,
  `video_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`video_id`),
  KEY `fk_Users_has_Videos_Videos2_idx` (`video_id`),
  KEY `fk_Users_has_Videos_Users1_idx` (`user_id`),
  CONSTRAINT `fk_Users_has_Videos_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `fk_Users_has_Videos_Videos2` FOREIGN KEY (`video_id`) REFERENCES `Videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes`
--

LOCK TABLES `Likes` WRITE;
/*!40000 ALTER TABLE `Likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `Likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subcribe`
--

DROP TABLE IF EXISTS `Subcribe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Subcribe` (
  `follower_id` int NOT NULL,
  `followed_id` int NOT NULL,
  PRIMARY KEY (`follower_id`,`followed_id`),
  KEY `fk_Subcribe_Users2_idx` (`followed_id`),
  CONSTRAINT `fk_Subcribe_Users1` FOREIGN KEY (`follower_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `fk_Subcribe_Users2` FOREIGN KEY (`followed_id`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subcribe`
--

LOCK TABLES `Subcribe` WRITE;
/*!40000 ALTER TABLE `Subcribe` DISABLE KEYS */;
/*!40000 ALTER TABLE `Subcribe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tags`
--

DROP TABLE IF EXISTS `Tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tags` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tags`
--

LOCK TABLES `Tags` WRITE;
/*!40000 ALTER TABLE `Tags` DISABLE KEYS */;
INSERT INTO `Tags` VALUES (1,'Shark'),(2,'Dolphin'),(3,'Whale'),(4,'Octopus'),(5,'Crab'),(6,'Lobster');
/*!40000 ALTER TABLE `Tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Upload`
--

DROP TABLE IF EXISTS `Upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Upload` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `video_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`video_id`),
  KEY `fk_Users_has_Videos_Videos1_idx` (`video_id`),
  KEY `fk_Users_has_Videos_Users_idx` (`user_id`),
  CONSTRAINT `fk_Users_has_Videos_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `fk_Users_has_Videos_Videos1` FOREIGN KEY (`video_id`) REFERENCES `Videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Upload`
--

LOCK TABLES `Upload` WRITE;
/*!40000 ALTER TABLE `Upload` DISABLE KEYS */;
/*!40000 ALTER TABLE `Upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `mail` varchar(80) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint NOT NULL DEFAULT '0',
  `validate` tinyint DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (3,NULL,NULL,'a@a.fr','aaaa','$argon2id$v=19$m=19456,t=2,p=1$CiFrPQQMdr0xPZlgQ9GTag$qaya0lH1O5uM42AK08D+NW4/mFHZXrbyxKUJLbqJOpk',0,0);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Videos`
--

DROP TABLE IF EXISTS `Videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Videos` (
  `video_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `URL_video` text NOT NULL,
  `type_video` tinyint NOT NULL,
  `thumbnail` text NOT NULL,
  `date_publication` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `validate` tinyint NOT NULL DEFAULT '0',
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`video_id`),
  KEY `fk_Videos_Categories1_idx` (`category_id`),
  KEY `fk_Videos_User_idx` (`user_id`),
  CONSTRAINT `fk_Videos_Categories1` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Videos`
--

LOCK TABLES `Videos` WRITE;
/*!40000 ALTER TABLE `Videos` DISABLE KEYS */;
INSERT INTO `Videos` VALUES (3,'','sdqsfd','http://localhost:3310/upload/1705322251908.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705322251914.A-715822-1506248998-3796.jpg','2024-01-15 00:00:00',0,1,3),(4,'','dzsdd','http://localhost:3310/upload/1705394473920.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705394473924.domain-to-ip.jpg','2024-01-16 00:00:00',0,1,3),(5,'sdsdzqD','SDSQDQSD','http://localhost:3310/upload/1705398010537.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705398010540.domain-to-ip.jpg','2024-01-16 00:00:00',0,5,3),(6,'DD','qsd','http://localhost:3310/upload/1705398397490.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705398397493.domain-to-ip.jpg','2024-01-16 00:00:00',0,7,3),(7,'DD','qsd','http://localhost:3310/upload/1705398505007.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705398505012.domain-to-ip.jpg','2024-01-16 00:00:00',0,7,3),(8,'DD','qsd','http://localhost:3310/upload/1705398537360.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705398537363.domain-to-ip.jpg','2024-01-16 00:00:00',0,7,3),(9,'DD','qsd','http://localhost:3310/upload/1705398620146.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705398620150.domain-to-ip.jpg','2024-01-16 00:00:00',0,7,3),(10,'DD','qsd','http://localhost:3310/upload/1705398669198.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705398669203.domain-to-ip.jpg','2024-01-16 00:00:00',0,7,3),(11,'dfsfgs','sdsgdsdg','http://localhost:3310/upload/1705404154867.0.35907116711249487.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705404154870.0.964277929126337.A-715822-1506248998-3796.jpg','2024-01-16 12:22:34',0,1,2),(12,'sdzqD','SQDQSFQF','http://localhost:3310/upload/1705404845353.0.48796971974011183.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',0,'http://localhost:3310/upload/1705404845356.0.2974254921879893.8908.1549907765.png','2024-01-16 12:34:05',0,3,3),(13,'dfsfgs','sdsgdsdg','http://localhost:3310/upload/1705404936034.0.5701751983193282.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705404936038.0.2326258381008015.A-715822-1506248998-3796.jpg','2024-01-16 12:35:36',0,1,2),(14,'dfsfgs','sdsgdsdg','http://localhost:3310/upload/1705404968428.0.5578332440195535.video-foret-magique-coloree-small-memory-hd-fond-ecran.mp4',1,'http://localhost:3310/upload/1705404968433.0.5099511803447139.A-715822-1506248998-3796.jpg','2024-01-16 12:36:08',0,1,2);
/*!40000 ALTER TABLE `Videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Views`
--

DROP TABLE IF EXISTS `Views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Views` (
  `users_id` int NOT NULL,
  `video_id` int NOT NULL,
  PRIMARY KEY (`users_id`,`video_id`),
  KEY `fk_Users_has_Videos_Videos4_idx` (`video_id`),
  KEY `fk_Users_has_Videos_Users3_idx` (`users_id`),
  CONSTRAINT `fk_Users_has_Videos_Users3` FOREIGN KEY (`users_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `fk_Users_has_Videos_Videos4` FOREIGN KEY (`video_id`) REFERENCES `Videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Views`
--

LOCK TABLES `Views` WRITE;
/*!40000 ALTER TABLE `Views` DISABLE KEYS */;
/*!40000 ALTER TABLE `Views` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-16 15:13:02