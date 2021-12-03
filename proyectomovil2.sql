CREATE DATABASE  IF NOT EXISTS `proyectomovil2` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyectomovil2`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectomovil2
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `idcategorias` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`idcategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Camisas'),(2,'Joggers'),(3,'Sneakers'),(4,'Accesorios');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_factura`
--

DROP TABLE IF EXISTS `detalles_factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_factura` (
  `iddetalles_Factura` int NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `subtotal` double NOT NULL,
  `impuesto` double NOT NULL,
  `total` double NOT NULL,
  `idfacturas` int NOT NULL,
  `idproductos` int NOT NULL,
  PRIMARY KEY (`iddetalles_Factura`),
  KEY `fk_Detalles_Factura_Facturas1_idx` (`idfacturas`),
  KEY `fk_Detalles_Factura_Productos1_idx` (`idproductos`),
  CONSTRAINT `fk_Detalles_Factura_Facturas1` FOREIGN KEY (`idfacturas`) REFERENCES `facturas` (`idfacturas`),
  CONSTRAINT `fk_Detalles_Factura_Productos1` FOREIGN KEY (`idproductos`) REFERENCES `productos` (`idproductos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_factura`
--

LOCK TABLES `detalles_factura` WRITE;
/*!40000 ALTER TABLE `detalles_factura` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `nombre_completo` varchar(255) DEFAULT NULL,
  `nombre_usuario` varchar(45) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `contrasena_encriptada` varchar(255) DEFAULT NULL,
  `direccion_usuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idempleado`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'Bryan Samuel Martinez Zelaya','BryanRoot123','bryanmartz972@gmail.com','87321951','$2b$10$x7BGDU86DiWTKZZXQ19kyuhBkqxX.7OViS8d2PB0zgLkpTFJ8IQJ6','Residencial Centro America Este');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas` (
  `idfacturas` int NOT NULL AUTO_INCREMENT,
  `fecha_factura` varchar(45) NOT NULL,
  `idusuario` int NOT NULL,
  PRIMARY KEY (`idfacturas`),
  KEY `fk_Facturas_Usuario1_idx` (`idusuario`),
  CONSTRAINT `fk_Facturas_Usuario1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproductos` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(45) NOT NULL,
  `cantidad_producto` int NOT NULL,
  `precio_producto` double NOT NULL,
  `marca_producto` varchar(45) NOT NULL,
  `idcategorias` int NOT NULL,
  `costo` double NOT NULL,
  `imagen_producto` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idproductos`),
  KEY `fk_Productos_Categorias_idx` (`idcategorias`),
  CONSTRAINT `fk_Productos_Categorias` FOREIGN KEY (`idcategorias`) REFERENCES `categorias` (`idcategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (17,'Prueba6',205,200,'Adidas',1,300,NULL),(18,'Prueba7',200,200,'Adidas',2,300,NULL),(21,'Camisa Amarilla',120,100,'Adidas',2,200,'hola.png'),(23,'Camisa roja',60,100,'Adidas',2,200,'hola.png'),(24,'Prueba1',100,100,'Adidas',2,100,'prueba1.png'),(26,'Tenis1',200,250,'Nike',3,300,'tenis1.png'),(27,'Tenis2',200,255,'Gucci',3,350,'tenis2.png'),(28,'Accesorios1',300,300,'Polo',4,400,'accesorios1.png'),(29,'Accesorios2',100,120,'Nike',4,500,'accesorios2.png'),(30,'Camisa2',150,300,'Polo',1,250,'camisa2.png');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjetas` (
  `idtarjetas` int NOT NULL AUTO_INCREMENT,
  `num_tarjeta` varchar(45) NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `VIN` varchar(4) NOT NULL,
  `tipo_tarjeta` varchar(45) NOT NULL,
  `idusuario` int NOT NULL,
  PRIMARY KEY (`idtarjetas`),
  KEY `fk_tarjetas_Usuario1_idx` (`idusuario`),
  CONSTRAINT `fk_tarjetas_Usuario1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
INSERT INTO `tarjetas` VALUES (1,'1234567891234567','2021-01-01','256','BAC',3),(2,'1234123412341234','2023-11-30','972','BAC',3),(3,'1231231231231234','2022-02-16','218','Ficohsa',18);
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombre_completo` varchar(255) NOT NULL,
  `nombre_usuario` varchar(45) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `contrasena_encriptada` varchar(255) NOT NULL,
  `direccion_usuario` varchar(255) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'Bryan Samuel Martinez Zelaya','Bryan972','bryanmartz972@gmail.com','87321951','$2b$10$HpPUdLROqjsNpb2u1OBuQ.RWMveG5rvyV62heWUGsOn0zoiDSIWx.','Residencial Centro America Este'),(18,'Samuel Zelaya','Samuel123','bryanmartz972@gmail.com','87321951','$2b$10$WTsm1wiC5180qdlpu/tKTeQ8sgZBXv8XgZEGr4VOs1h0RPreq.Gry','Cerca de mi casa');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-03  1:04:19
