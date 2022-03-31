/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.20 : Database - wj
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wj` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `wj`;

/*Table structure for table `course` */

DROP TABLE IF EXISTS `course`;

CREATE TABLE `course` (
  `id` int NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `course` */

insert  into `course`(`id`,`name`) values (1,'数分'),(2,'高代'),(3,'解析几何'),(4,'大学英语'),(5,'大学物理'),(6,'计算机基础'),(7,'大学体育'),(8,'数据库实训');

/*Table structure for table `grade` */

DROP TABLE IF EXISTS `grade`;

CREATE TABLE `grade` (
  `sid` int DEFAULT NULL,
  `cid` int DEFAULT NULL,
  `pingshi` int DEFAULT NULL,
  `qizhong` int DEFAULT NULL,
  `shixi` int DEFAULT NULL,
  `qimo` int DEFAULT NULL,
  `zongping` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `grade` */

insert  into `grade`(`sid`,`cid`,`pingshi`,`qizhong`,`shixi`,`qimo`,`zongping`) values (1,1,85,80,89,90,88),(1,2,85,80,88,89,90),(1,3,85,88,89,90,89),(1,4,85,89,80,88,90),(1,5,85,88,80,89,88),(1,6,85,88,88,80,88),(1,7,85,90,89,88,80),(2,1,85,90,88,89,80),(2,2,90,85,80,88,89),(2,3,89,90,85,89,88),(2,4,88,80,90,85,89),(2,5,80,90,88,89,85),(2,6,90,89,88,85,80),(2,7,90,90,85,90,90),(3,1,88,100,75,80,88),(3,2,80,88,100,75,88),(3,3,80,88,88,75,100),(3,4,80,75,100,88,88),(3,5,75,100,80,88,88),(3,6,75,100,80,88,88),(3,7,100,75,88,88,80);

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `address` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `student` */

insert  into `student`(`id`,`name`,`age`,`address`) values (1,'刘德华',18,'河南省商丘市'),(2,'周星驰',19,'河南省安阳市'),(3,'周润发',20,'上海市浦东新区'),(4,'郭富城',18,'上海市浦东新区');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
