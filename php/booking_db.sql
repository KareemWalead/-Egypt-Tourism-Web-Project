-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 11 يناير 2026 الساعة 15:26
-- إصدار الخادم: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booking_db`
--

-- --------------------------------------------------------

--
-- بنية الجدول `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- إرجاع أو استيراد بيانات الجدول `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'admin', '123');

-- --------------------------------------------------------

--
-- بنية الجدول `saveemail`
--

CREATE TABLE `saveemail` (
  `id` int(11) NOT NULL,
  `Email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- إرجاع أو استيراد بيانات الجدول `saveemail`
--

INSERT INTO `saveemail` (`id`, `Email`) VALUES
(1, 'test@example.com'),
(2, 'test@example.com'),
(3, 'test@example.com'),
(4, 'test@example.com'),
(5, 'test@example.com'),
(6, 'test@example.com'),
(7, 'test@example.com');

-- --------------------------------------------------------

--
-- بنية الجدول `tourbookings`
--

CREATE TABLE `tourbookings` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `travel_date` varchar(50) DEFAULT NULL,
  `destination` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- إرجاع أو استيراد بيانات الجدول `tourbookings`
--

INSERT INTO `tourbookings` (`id`, `name`, `email`, `travel_date`, `destination`, `message`, `created_at`) VALUES
(1, 'faten', 'test@example.com', '2025-12-03', 'شرم الشيخ', 'لاب', '2025-12-27 14:54:31'),
(2, 'faten', 'test@example.com', '2025-12-03', 'شرم الشيخ', 'لاب', '2025-12-27 15:02:06'),
(3, 'faten', 'test@example.com', '2025-12-03', 'شرم الشيخ', 'لاب', '2025-12-27 15:02:33'),
(4, 'gjhj', 'test@example.com', '2025-12-23', 'الأقصر وأسوان', 'aweqwe', '2025-12-27 15:02:51'),
(5, 'gjhj', 'test@example.com', '2025-12-23', 'الأقصر وأسوان', 'aweqwe', '2025-12-27 15:03:14'),
(7, 'سسسس', 'test@example.com', '2025-12-17', 'شرم الشيخ', 'ؤئؤربءبي', '2025-12-29 18:20:50'),
(8, 'gjhj', 'test@example.com', '2025-12-17', 'الأقصر وأسوان', 'بربر', '2025-12-29 18:23:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saveemail`
--
ALTER TABLE `saveemail`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `tourbookings`
--
ALTER TABLE `tourbookings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `saveemail`
--
ALTER TABLE `saveemail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tourbookings`
--
ALTER TABLE `tourbookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
