/**
 * Author Ares DN
 * 
 * Website: https://www.iskydn.online
 *
 */

let USE_SSL = false;

module.exports = {
	USE_SSL,
	CF_SSL: {
		key: './certs/panazic.key',
		cert: './certs/panazic.crt'
	},

	DOMAIN: 'https://donaldtrade.com',
	TITLE_SITE: 'DonaldTrade',
	CONTACT: '',
	MAIL_LOGO: 'https://donaldtrade.com/logo.png',
	MAIL_IMG_FOOTER: 'https://donaldtrade.com/line.png',

	IS_PLAY_SPOT: true, // mặc địng false -> FUTURES, Sử dụng BINANCE SPOT ( check được sàn ) hoặc FUTURE ( không bào giờ bảo trì, không check được sàn )

	SO_GIAY_DEM_NGUOC: 30,
	RATE_NHA_THUONG: 95,
	BET_MAX: 1,

	BINANCE_APIKEY: 'srBGjy1ATl33Lzb5ZmeXneanYnygQw3QRCGNq0zKV9vvPM5O95CjV8aNX9C9HCUZ',
	BINANCE_APISECRET: 'AVoHbbQcrOuUhdvkhdxyGuTk9FJlTJBgH02LPwA9TcUxxMCTnF8p1WL3ZPWw4C1T',

	// THANH TOÁN PAYPAL
	//PAYPAL_MODE: 'live', //sandbox or live
	//PAYPAL_CLIENT_ID: 'AbubWI5Cc-21tFJnqK7B6cFuSa2es3nqJYY0McPI9EBLiCyDQjJEJ7_vUcZTBNdiHVhfOEWUsTPL0mcf',//'AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p',
	//PAYPAL_CLIENT_SECRET: 'EFX50IOpCcqREF8npYA9iavGBvqeW8W7zZ1wfM_dn147xyelQyGwSa9U-WJrl44BrSmnj7JFNqMcY8fk',//'EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_',

	PAYPAL_MODE: 'sandbox', //sandbox or live
	PAYPAL_CLIENT_ID: 'Adnu49cqEdA2_Gge6xk4wXkcnL3Z-U4W0YWvPaj4n8i1VWyhRFdvMECWg-y1EIurY3LgbxFLV4HJ0Jkl',//'',
	PAYPAL_CLIENT_SECRET: 'EHJhCrH6Yx-RULc3mTyzRPteTm-0FJnGADCODTp1Y3zgxE9up0vRsA35f7z74eYTHlRFFfhOz-2XUTyT',//'',
	// KẾT THÚC THANH TOÁN PAYPAL

	DATA_HOST: 'localhost',
	DATA_USER: 'root',
	DATA_PASS: 'canh7antt8a',
	DATA_DB: 'bovip',
	DATA_PORT: 3306,

	PORT_TRADE: 2096, // default 443 ssl
	PORT_SYS: 2087,
	PORT_NAP: 2083,
	PORT_NOTIFY: 2053,

	TELEGRAM_TOKEN: '5889097799:AAHn43NFZqjXqq5VSu1_gri1hJxy6V0Hp2w', // sử dụng BOT
	TELEGRAM_BET_ID: 'dntrade', // là kênh để gửi thông báo
	TELEGRAM_RUT_ID: 'dntrade', // là kênh để gửi thông báo
	TELEGRAM_NAP_ID: 'dntrade',
	TELEGRAM_BET_AMOUNT: 'dntrade',
	TELEGRAM_BET_THONG_BAO: 'dntrade',
	TELEGRAM_BET_PHIM_LENH: 'donaldtrade_noti', // kênh bot kéo

	TOKEN_KEY: 'thinhvipprono1',

	PATH_SYS_CONFIG: 'stSys',
	PATH_SYS_COMMISSION: 'stCommission',
	PATH_SYS_COMMISSION_VIP: 'stCommissionVip',

	ABI_USDT_MAINNET: 'USDT_BEP20_mainnet',
	ABI_USDT_TESTNNET: 'USDT_BEP20_testnet',
	BANK_URL: 'http://202.182.118.37:6688',
	BANK_UNAME: 'GO88S',
	BANK_PASS: 'Imdb683910107899'
}