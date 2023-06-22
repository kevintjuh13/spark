-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 22, 2023 at 11:19 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spark`
--

-- --------------------------------------------------------

--
-- Table structure for table `dates`
--

CREATE TABLE `dates` (
  `id` int(11) NOT NULL,
  `naamDate` varchar(255) NOT NULL,
  `datumDate` varchar(255) NOT NULL,
  `tijdDate` varchar(255) NOT NULL,
  `locatieDate` varchar(255) NOT NULL,
  `beschrijvingDate` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dates`
--

INSERT INTO `dates` (`id`, `naamDate`, `datumDate`, `tijdDate`, `locatieDate`, `beschrijvingDate`, `userId`) VALUES
(25, 'Zwemmen', 'Ma 12 jun', '14:00', 'Tilburg', '', 121),
(26, 'Wandelen', 'Woe 14 jun', '15:00', 'Gilze-Rijen', '', 122),
(27, 'Uiteten', 'Do 15 jun', '19:00', 'Dongen', '', 123),
(28, 'Voetbal wedstrijd', 'Woe 14 jun', '15:00', 'Den Haag', '', 124);

-- --------------------------------------------------------

--
-- Table structure for table `intresses`
--

CREATE TABLE `intresses` (
  `id` int(11) NOT NULL,
  `optie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `intresses`
--

INSERT INTO `intresses` (`id`, `optie`) VALUES
(1, 'Reizen'),
(2, 'Koken'),
(3, 'Uitgaan'),
(4, 'Sporten'),
(5, 'Wandelen'),
(6, 'Eten'),
(7, 'Tennis'),
(8, 'Varen'),
(9, 'Gamen'),
(10, 'Yoga'),
(11, 'Museum'),
(12, 'Zwemmen'),
(13, 'Netlix'),
(14, 'Shoppen'),
(15, 'Bakken'),
(16, 'Brunch'),
(17, 'Dansen');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `interest` varchar(255) DEFAULT NULL,
  `show` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `age`, `gender`, `interest`, `show`, `picture`) VALUES
(121, 'kev2000in@hotmail.com', 'account1', 'Kevin', '22', 'Man', 'Uitgaan, Reizen, Sporten, Shoppen, Gamen', 'Vrouw', 'fa6e39f26dd5e5ff09c3bc6076c0c280'),
(122, 'anne2002@hotmail.com', 'account2', 'Anne', '21', 'Vrouw', 'Koken, Varen, Netlix, Museum, Eten', 'Man', '05ea586fa1aa28eb6035793f7bf85d2d'),
(123, 'thijs013@hotmail.com', 'account3', 'Thijs', '19', 'Man', 'Gamen, Uitgaan, Sporten, Tennis, Wandelen', 'Vrouw', 'e91c98d2b3ae36031797592b4dca0557'),
(124, 'merel037@hotmail.com', 'account4', 'Merel', '18', 'Vrouw', 'Uitgaan, Tennis, Zwemmen, Netlix, Varen', 'Man', '9c0f6f99ae4d9b5392befab814a7bdcd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dates`
--
ALTER TABLE `dates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_dates` (`userId`);

--
-- Indexes for table `intresses`
--
ALTER TABLE `intresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dates`
--
ALTER TABLE `dates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `intresses`
--
ALTER TABLE `intresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dates`
--
ALTER TABLE `dates`
  ADD CONSTRAINT `dates_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_user_dates` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
