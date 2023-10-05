-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 31, 2022 at 09:26 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bovip`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `u_id` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT '0',
  `win` decimal(20,4) DEFAULT '0.0000',
  `lose` decimal(20,4) DEFAULT '0.0000',
  `balance` decimal(20,4) DEFAULT '0.0000',
  `deposit` int(11) DEFAULT '0',
  `withdrawal` int(11) DEFAULT '0',
  `order_amount` decimal(20,4) DEFAULT '0.0000',
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  `deleted_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `email`, `u_id`, `type`, `win`, `lose`, `balance`, `deposit`, `withdrawal`, `order_amount`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'vnvippro02@gmail.com', 'VC9EJROHUX', 0, '0.0000', '0.0000', '1000.0000', 0, 0, '0.0000', '2022-12-30 19:15:06', NULL, NULL),
(2, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, '161.5000', '400.0000', '19761.5000', 0, 0, '570.0000', '2022-12-30 19:15:06', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `add_money_history`
--

CREATE TABLE `add_money_history` (
  `id` int(11) NOT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT '0',
  `price_USDT` decimal(20,4) DEFAULT '0.0000',
  `price_ETH` decimal(20,4) DEFAULT '0.0000',
  `price_BTC` decimal(20,4) DEFAULT '0.0000',
  `price_VN` decimal(20,4) DEFAULT '0.0000',
  `price_PAYPAL` decimal(20,4) DEFAULT '0.0000',
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  `deleted_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `add_money_history`
--

INSERT INTO `add_money_history` (`id`, `nick_name`, `email`, `type`, `price_USDT`, `price_ETH`, `price_BTC`, `price_VN`, `price_PAYPAL`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'thinhvlxx2', 'vnvippro02@gmail.com', 1, '0.0000', '0.0000', '0.0000', '100000.0000', '0.0000', '2022-12-30 20:48:11', NULL, NULL),
(2, 'thinhvlxx2', 'vnvippro02@gmail.com', 1, '100000.0000', '0.0000', '0.0000', '0.0000', '0.0000', '2022-12-30 20:49:57', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bet_history`
--

CREATE TABLE `bet_history` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_account` varchar(255) DEFAULT NULL,
  `type_account` int(11) DEFAULT '0',
  `buy_sell` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `amount_win` decimal(20,4) DEFAULT '0.0000',
  `amount_lose` decimal(20,4) DEFAULT '0.0000',
  `amount_bet` decimal(20,4) DEFAULT '0.0000',
  `open` decimal(20,4) DEFAULT '0.0000',
  `close` decimal(20,4) DEFAULT '0.0000',
  `session` int(11) NOT NULL DEFAULT '0',
  `marketing` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '1',
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `bet_history`
--

INSERT INTO `bet_history` (`id`, `email`, `id_account`, `type_account`, `buy_sell`, `currency`, `amount_win`, `amount_lose`, `amount_bet`, `open`, `close`, `session`, `marketing`, `status`, `created_at`) VALUES
(1, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, 'buy', 'BTC/USDT', '19.0000', '0.0000', '20.0000', '16463.1000', '16466.1900', 1000080, 1, 1, '2022-12-30 20:51:15'),
(2, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, 'sell', 'BTC/USDT', '19.0000', '0.0000', '20.0000', '16469.0300', '16465.4500', 1000082, 1, 1, '2022-12-30 20:53:19'),
(3, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, 'sell', 'BTC/USDT', '19.0000', '0.0000', '20.0000', '16464.1000', '16462.6700', 1000083, 1, 1, '2022-12-30 20:54:22'),
(4, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, 'sell', 'BTC/USDT', '0.0000', '110.0000', '110.0000', '16464.6900', '16465.3000', 1000084, 1, 1, '2022-12-30 20:55:24'),
(5, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, 'sell', 'BTC/USDT', '0.0000', '80.0000', '80.0000', '16462.3600', '16464.8200', 1000085, 1, 1, '2022-12-30 20:56:27'),
(6, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, 'sell', 'BTC/USDT', '104.5000', '0.0000', '110.0000', '16462.5600', '16461.3600', 1000086, 1, 1, '2022-12-30 20:57:29'),
(7, 'vnvippro02@gmail.com', 'ZKYGUW9W4T', 1, 'sell', 'BTC/USDT', '0.0000', '210.0000', '210.0000', '16461.8500', '16462.7500', 1000087, 0, 1, '2022-12-30 20:58:32');

-- --------------------------------------------------------

--
-- Table structure for table `champions`
--

CREATE TABLE `champions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dateStart` varchar(255) NOT NULL,
  `dateEnd` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `delete_status` int(11) DEFAULT '-1',
  `totalRewards` text,
  `background` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `champions`
--

INSERT INTO `champions` (`id`, `name`, `dateStart`, `dateEnd`, `type`, `content`, `delete_status`, `totalRewards`, `background`) VALUES
(22, 'EZ_TRADE champions ', '2022-04-25T17:02:00.000Z', '2022-04-05T17:02:00.000Z', 'klgd', '<p>Chúng tôi sẽ chọn ra người có khối lượng giao dịch cao nhất để nhận tiền thưởng top 1</p>', 1, '20.000', '6c82ac001c9e12cc8f64b5d8469b1b34.png');

-- --------------------------------------------------------

--
-- Table structure for table `commission_history`
--

CREATE TABLE `commission_history` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `from_upid` varchar(255) DEFAULT NULL,
  `ref_id` varchar(255) DEFAULT NULL,
  `upline_id` varchar(255) DEFAULT NULL,
  `pending_commission` decimal(20,4) DEFAULT '0.0000',
  `personal_trading_volume` decimal(20,4) DEFAULT '0.0000',
  `vip_commission` varchar(20) DEFAULT '0',
  `type` varchar(255) DEFAULT NULL,
  `marketing` int(11) DEFAULT '0',
  `session` int(11) DEFAULT '0',
  `created_at` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `exchange_history`
--

CREATE TABLE `exchange_history` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `from_e` varchar(255) DEFAULT NULL,
  `to_e` varchar(255) DEFAULT NULL,
  `send` varchar(255) DEFAULT NULL,
  `receive` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `delete_status` int(11) DEFAULT '0',
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `lucky_draw`
--

CREATE TABLE `lucky_draw` (
  `id` int(11) NOT NULL,
  `email` text,
  `nickname` text,
  `type` varchar(255) DEFAULT NULL,
  `day` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `notifi`
--

CREATE TABLE `notifi` (
  `id` int(11) NOT NULL,
  `cu_email` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  `created_at` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `notifi`
--

INSERT INTO `notifi` (`id`, `cu_email`, `email`, `content`, `title`, `views`, `created_at`, `type`) VALUES
(160, 'huycucxuc@gmail.com', 'huycucxuc@gmail.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-22 22:57:00', 'kyc'),
(161, 'hanle012354@gmail.com', 'hanle012354@gmail.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-22 23:42:51', 'kyc'),
(162, 'hanle012354@gmail.com', 'hanle012354@gmail.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-23 00:13:06', 'kyc'),
(163, 'hanle012354@gmail.com', 'hanle012354@gmail.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-23 00:41:29', 'kyc'),
(164, 'huycucxuc@gmail.com', 'huycucxuc@gmail.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-23 02:45:11', 'kyc'),
(165, 'luongthuylam97@gmail.com', 'luongthuylam97@gmail.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-23 03:03:14', 'kyc'),
(166, 'huycucxuc@gmail.com', 'huycucxuc@gmail.com', '-Số lượng: <b>100.00 USDT</b>', 'Rút tiền VNĐ', 0, '2022-04-23 10:01:27', 'rut'),
(167, 'hanle012354@gmail.com', 'hanle012354@gmail.com', '-Số lượng: <b>50.00 USDT</b>', 'Rút tiền VNĐ', 0, '2022-04-23 22:13:29', 'rut'),
(168, 'huycucxuc@gmail.com', 'huycucxuc@gmail.com', '-Số lượng: <b>133.994 USDT</b>', 'Rút tiền VNĐ', 0, '2022-04-24 14:00:24', 'rut'),
(169, 'huycucxuc@gmail.com', 'huycucxuc@gmail.com', '-Số lượng: <b>100.00 USDT</b>', 'Rút tiền VNĐ', 0, '2022-04-24 14:01:42', 'rut'),
(170, 'hanle012354@gmail.com', 'hanle012354@gmail.com', '-Số lượng: <b>75.00 USDT</b>', 'Rút tiền VNĐ', 0, '2022-04-24 21:19:13', 'rut'),
(171, 'mpazpqagnegf@candassociates.com', 'mpazpqagnegf@candassociates.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-24 21:27:01', 'kyc'),
(172, 'mpazpqagnegf@candassociates.com', 'mpazpqagnegf@candassociates.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-24 21:37:23', 'kyc'),
(173, 'mpazpqagnegf@candassociates.com', 'mpazpqagnegf@candassociates.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-24 21:37:26', 'kyc'),
(174, 'mpazpqagnegf@candassociates.com', 'mpazpqagnegf@candassociates.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-24 21:37:27', 'kyc'),
(175, 'fbkjuu@candassociates.com', 'fbkjuu@candassociates.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-24 21:41:48', 'kyc'),
(176, 'nguyentrinhtuanvip1985@gmail.com', 'nguyentrinhtuanvip1985@gmail.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-25 22:48:52', 'kyc'),
(177, 'luongthuylam97@gmail.com', 'luongthuylam97@gmail.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-25 22:55:03', 'kyc'),
(178, 'luongthuylam97@gmail.com', 'luongthuylam97@gmail.com', '-Số lượng: <b>100.00 USDT</b>', 'Rút tiền VNĐ', 0, '2022-04-25 23:02:51', 'rut'),
(179, 'duanvan50@gmail.com', 'duanvan50@gmail.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-25 23:11:21', 'kyc'),
(180, 'luongthuylam97@gmail.com', 'luongthuylam97@gmail.com', '-Số lượng: <b>10,000.00 USDT</b>', 'Rút tiền VNĐ', 0, '2022-04-25 23:17:50', 'rut'),
(181, 'thuylam.forex@gmail.com', 'thuylam.forex@gmail.com', 'Xác minh danh tính của bạn đã được phê duyệt. Vui lòng đợi ít nhất 7 ngày làm việc.', 'Xác minh danh tính đang chờ xử lý', 0, '2022-04-25 23:23:48', 'kyc'),
(182, 'nguyentrinhtuanvip1985@gmail.com', 'nguyentrinhtuanvip1985@gmail.com', 'Danh tính của bạn đã được admin phê duyệt.', 'Xác minh danh tính thành công', 0, '2022-04-26 12:57:03', 'kyc');

-- --------------------------------------------------------

--
-- Table structure for table `telegram`
--

CREATE TABLE `telegram` (
  `id` int(11) NOT NULL,
  `form` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `trade_history`
--

CREATE TABLE `trade_history` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `from_u` varchar(255) DEFAULT NULL,
  `to_u` varchar(255) DEFAULT NULL,
  `type_key` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `network` varchar(255) DEFAULT NULL,
  `paypal` decimal(20,4) DEFAULT '0.0000',
  `paypal_order_id` decimal(20,4) DEFAULT '0.0000',
  `pay_fee` decimal(20,4) DEFAULT '0.0000',
  `fee_withdraw` decimal(20,4) DEFAULT '0.0000',
  `currency` varchar(255) DEFAULT NULL,
  `amount` decimal(20,4) DEFAULT '0.0000',
  `real_amount` decimal(20,4) DEFAULT '0.0000',
  `note` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `delete_status` int(11) DEFAULT '0',
  `created_at` varchar(255) DEFAULT NULL,
  `bank` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `trade_history`
--

INSERT INTO `trade_history` (`id`, `email`, `from_u`, `to_u`, `type_key`, `type`, `network`, `paypal`, `paypal_order_id`, `pay_fee`, `fee_withdraw`, `currency`, `amount`, `real_amount`, `note`, `status`, `delete_status`, `created_at`, `bank`) VALUES
(1, 'vnvippro02@gmail.com', 'thinhvlxx2', 'ZKYGUW9W4T', 'nn', 'Nạp nhanh USDT -> Live Account', NULL, '0.0000', '0.0000', '0.0000', '0.0000', 'usdt', '100000.0000', '0.0000', NULL, 1, 0, '2022-12-30 20:50:17', NULL),
(2, 'vnvippro02@gmail.com', 'Live Account', 'thinhvlxx2', 'ctas', 'Chuyển tiền từ Live Account -> (Nội bộ)', NULL, '0.0000', '0.0000', '0.0000', '0.0000', 'usdt', '10000.0000', '0.0000', NULL, 1, 0, '2022-12-31 18:43:23', NULL),
(3, 'vnvippro02@gmail.com', 'Live Account', 'thinhvlxx2', 'ctas', 'Chuyển tiền từ Live Account -> (Nội bộ)', NULL, '0.0000', '0.0000', '0.0000', '0.0000', 'usdt', '70000.0000', '0.0000', NULL, 1, 0, '2022-12-31 19:07:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permissions` varchar(255) DEFAULT NULL,
  `last_login` varchar(255) DEFAULT NULL,
  `ref_code` varchar(255) DEFAULT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `upline_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `secondary_address` varchar(255) DEFAULT NULL,
  `job_position` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `secondary_phone` varchar(255) DEFAULT NULL,
  `secondary_email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `skype` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `google_plus` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `interest` varchar(255) DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `personal_quota` varchar(255) DEFAULT NULL,
  `active` int(11) DEFAULT '0',
  `verified` int(11) DEFAULT '0',
  `super_user` int(11) DEFAULT '0',
  `manage_supers` int(11) DEFAULT '0',
  `offer_account` int(11) DEFAULT '0',
  `money_eth` decimal(20,4) DEFAULT '0.0000',
  `money_btc` decimal(20,4) DEFAULT '0.0000',
  `money_usdt` decimal(20,4) DEFAULT '0.0000',
  `money_vn` decimal(20,4) DEFAULT '0.0000',
  `money_paypal` decimal(20,4) DEFAULT '0.0000',
  `money_deposit` decimal(20,4) DEFAULT '0.0000',
  `money_withdrawal` decimal(20,4) DEFAULT '0.0000',
  `super_account` int(11) DEFAULT '0',
  `wallet_his` varchar(255) DEFAULT NULL,
  `wallet_order_offer` decimal(20,2) DEFAULT NULL,
  `sponsor` varchar(255) DEFAULT NULL,
  `money_wallet_his` decimal(20,4) DEFAULT '0.0000',
  `vip_user` int(11) DEFAULT '0',
  `level_vip` int(11) DEFAULT '0',
  `id_front` varchar(255) DEFAULT NULL,
  `id_back` varchar(255) DEFAULT NULL,
  `pending_commission` int(11) DEFAULT '0',
  `commission_vip` int(11) DEFAULT '0',
  `commission_update` varchar(255) DEFAULT NULL,
  `address_BTC` varchar(255) DEFAULT NULL,
  `address_ETH` varchar(255) DEFAULT NULL,
  `address_USDT` varchar(255) DEFAULT NULL,
  `privateKey_BTC` varchar(255) DEFAULT NULL,
  `privateKey_ETH` varchar(255) DEFAULT NULL,
  `privateKey_USDT` varchar(255) DEFAULT NULL,
  `wif_BTC` varchar(255) DEFAULT NULL,
  `completed_profile` int(11) DEFAULT '0',
  `active_2fa` int(11) DEFAULT '0',
  `secret_2fa` varchar(255) DEFAULT NULL,
  `code_secure` varchar(255) DEFAULT NULL,
  `pricePlay` decimal(20,4) DEFAULT '0.0000',
  `priceWin` decimal(20,4) DEFAULT '0.0000',
  `priceLose` decimal(20,4) DEFAULT '0.0000',
  `marketing` int(11) DEFAULT '0',
  `so_cmnd` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  `deleted_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `permissions`, `last_login`, `ref_code`, `nick_name`, `upline_id`, `first_name`, `last_name`, `username`, `address`, `secondary_address`, `job_position`, `phone`, `secondary_phone`, `secondary_email`, `gender`, `website`, `skype`, `facebook`, `twitter`, `google_plus`, `youtube`, `github`, `interest`, `about`, `profile_image`, `personal_quota`, `active`, `verified`, `super_user`, `manage_supers`, `offer_account`, `money_eth`, `money_btc`, `money_usdt`, `money_vn`, `money_paypal`, `money_deposit`, `money_withdrawal`, `super_account`, `wallet_his`, `wallet_order_offer`, `sponsor`, `money_wallet_his`, `vip_user`, `level_vip`, `id_front`, `id_back`, `pending_commission`, `commission_vip`, `commission_update`, `address_BTC`, `address_ETH`, `address_USDT`, `privateKey_BTC`, `privateKey_ETH`, `privateKey_USDT`, `wif_BTC`, `completed_profile`, `active_2fa`, `secret_2fa`, `code_secure`, `pricePlay`, `priceWin`, `priceLose`, `marketing`, `so_cmnd`, `language`, `country`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'arres@gmail.com', '$2b$10$/bIJck.dUnbimPsu.h7o6e1EZhUMWEuAVSzhwf8KtJivs4nm2HHKe', NULL, NULL, NULL, 'SkyPlaza', NULL, 'BO', 'Ares', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '104857600', 1, 1, 1, 1, 0, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', NULL, NULL, '0.00', NULL, '0.0000', 0, 0, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, '0.0000', '0.0000', '0.0000', 0, NULL, NULL, NULL, '13/4/2021 18:16:38', '14/4/2021 20:08:36', NULL),
(2, 'vthinhdzz@gmail.com', '$2b$10$/bIJck.dUnbimPsu.h7o6e1EZhUMWEuAVSzhwf8KtJivs4nm2HHKe', NULL, NULL, '72NAWUL', 'thinhvlxx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 0, 0, 0, '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', '0.0000', 0, NULL, NULL, NULL, '0.0000', 0, 0, NULL, NULL, 0, 0, NULL, '17kxK6srxKeLMSqi3U22dyjtTMD8tHHMPX', '0xCc8d7D280FF0Ae2ecE632bCE5CAA418917800DC1', '0xCc8d7D280FF0Ae2ecE632bCE5CAA418917800DC1', 'c2d4289080a964f3c3ee021e510266d8c8f3aa5135823838cb256339574ec0fb', '0xe2793f6f771561bd3673efd779d06cc68db251889e2b58f50dea31c2b090d419', '0xe2793f6f771561bd3673efd779d06cc68db251889e2b58f50dea31c2b090d419', 'L3kS3BgTXK5dAets7GTV9zZKjJ4Wfo1DuSg39vxajrAjnAhsDF5Y', 0, 0, NULL, NULL, '0.0000', '0.0000', '0.0000', 0, NULL, NULL, NULL, '2022-12-30 18:57:13', NULL, NULL),
(3, 'vnvippro02@gmail.com', '$2b$10$JHn8GHJn08vJQQ/pW2JEte/7UBHqg.vquxGrjEB5fwLbDs.sKBEMG', NULL, NULL, '3DDLYF3', 'thinhvlxx2', NULL, 'thinhvip', 'abccc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 0, '0.0000', '0.0000', '180000.0000', '0.0000', '0.0000', '0.0000', '0.0000', 0, NULL, NULL, NULL, '0.0000', 0, 0, NULL, NULL, 0, 0, NULL, '16jHLX1wawauDgiDPSUf5MxEHDnpBaBzAv', '0x7d78b38cc18a9f1ccc1B962E0A51905316B76740', '0x7d78b38cc18a9f1ccc1B962E0A51905316B76740', '2737a0437d074bade0df8a0d10fd79a85708f3366980d4b8bcf7c0ec8be29f05', '0xc0dba8d77f605e21f0b53db1d5d373cf7cbb241d33e07debcec377ec6a8de517', '0xc0dba8d77f605e21f0b53db1d5d373cf7cbb241d33e07debcec377ec6a8de517', 'KxXwiRvFpbbLVcKJN9pFBnsJ1xbvHyT1DLhvknrGJPR21YiBGdGt', 0, 0, 'adgafadfdaf', NULL, '570.0000', '161.5000', '400.0000', 0, NULL, NULL, NULL, '2022-12-30 19:15:06', '2022-12-30 20:57:15', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `add_money_history`
--
ALTER TABLE `add_money_history`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `bet_history`
--
ALTER TABLE `bet_history`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `champions`
--
ALTER TABLE `champions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commission_history`
--
ALTER TABLE `commission_history`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `exchange_history`
--
ALTER TABLE `exchange_history`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `lucky_draw`
--
ALTER TABLE `lucky_draw`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifi`
--
ALTER TABLE `notifi`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `telegram`
--
ALTER TABLE `telegram`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `trade_history`
--
ALTER TABLE `trade_history`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `add_money_history`
--
ALTER TABLE `add_money_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bet_history`
--
ALTER TABLE `bet_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `champions`
--
ALTER TABLE `champions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `commission_history`
--
ALTER TABLE `commission_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exchange_history`
--
ALTER TABLE `exchange_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lucky_draw`
--
ALTER TABLE `lucky_draw`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifi`
--
ALTER TABLE `notifi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT for table `telegram`
--
ALTER TABLE `telegram`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trade_history`
--
ALTER TABLE `trade_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
