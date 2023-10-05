const db = require("../../database");
const { genSaltSync, hashSync, compareSync } = require("bcrypt")
const config = require('../../config');
module.exports = function(bot, id, mess) {
	let getDL = mess.split(" ");
    let email  = getDL[1];
	let pass = getDL[2];
	
	let opts = {
			parse_mode: 'HTML',
			reply_markup: {
				remove_keyboard: true,
			}
		};
		
	if(!!email || !!pass){
		// kiểm tra email
		const salt = genSaltSync(10);
		pass = hashSync(pass, salt);
		db.query(
			`SELECT id FROM users WHERE email = ?, password = ?`, 
			[
				email,
				pass
			],(error, result, fields) => {

				if(void 0 !== result && result.length > 0){ // tồn tại email
					// kiểm tra trong telegram có email chưa
					db.query(
						`SELECT id FROM telegram WHERE form = ?`, 
						[
							id
						],(error, result, fields) => {
							if(void 0 !== result && result.length > 0){ // tồn tại 
								bot.sendMessage(id, `Chỉ cho phép sử dụng 1 tài khoản.`, opts);
								bot = null;
								id = null;
							}else{ // chưa có thì insert
								// insert vào telegram
								db.query(`INSERT INTO telegram (form, email) VALUES (?,?)`,
								[
									id,
									email
								])

								bot.sendMessage(id, `*${config.TITLE_SITE}* \n\nBạn đã thêm thành công email: <b>${email}</b>`, opts);
								let opts2 = {
									parse_mode: 'HTML',
									reply_markup: {
										// trong bảng chat
										keyboard: [
											[
												{"text": "ACTIVE"}, 
												{"text": "CODE2FA"}
											]
										],
										resize_keyboard: true,
									}
								};
								bot.sendMessage(id, `✍️*HƯỚNG DẪN*✍️\n\n-ACTIVE: Để kích hoạt tài khoản.\n-CODE2FA: Nhận ngay mã xác thực 2FA.\n-CHANGEPASS: Thay đổi mật khẩu cho Email: <b>${email}</b>\n Ví dụ: CHANGEPASS passnew nhaplaipassnew\n\n<i>Mọi thông tin của bạn sẽ được bảo mật!</i>`, opts2);
								bot = null;
								id = null;

								// kiểm tra tồn tại email trong telegram
								// db.query(
								// 	`SELECT id FROM telegram WHERE email = ?`, 
								// 	[
								// 		email
								// 	],(error, result, fields) => {
								// 		if(result.length){ // tồn tại 
								// 			bot.sendMessage(id, `Email này đã được đăng ký, chỉ cho phép sử dụng 1 tài khoản.`, opts);
								// 			bot = null;
								// 			id = null;
								// 		}else{
								// 			// insert vào telegram
								// 			db.query(`INSERT INTO telegram (form, email) VALUES (?,?)`,
								// 			[
								// 				id,
								// 				email
								// 			])

								// 			bot.sendMessage(id, `*DONALDTRADE* \n\nBạn đã thêm thành công email: <b>${email}</b>`, opts);
								// 			bot.sendMessage(id, `✍️*HƯỚNG DẪN*✍️\n\nNhập:\n- kichhoat: Để kích hoạt tài khoản.\n- code2fa:  Nhận ngay mã xác thực 2FA.\n- thaydoimatkhau: Thay đổi mật khẩu cho Email: <b>${email}</b>\n Ví dụ: thaydoimatkhau passmoi nhaplaipassmoi\n\n<i>Mọi thông tin của bạn sẽ được bảo mật!</i>`, opts);
								// 			bot = null;
								// 			id = null;
								// 		}
								// })
							}
						})
					
				}else{
					
					bot.sendMessage(id, `*${config.TITLE_SITE}* \n\nBạn chưa đăng ký với email <b>${email}</b> này! Hoặc sai email và mật khẩu`, opts);
					bot = null;
					id = null;
				}
			})
	}else{

		bot.sendMessage(id, `*${config.TITLE_SITE}* \n\nVui lòng nhâp đúng như hướng dẫn\nVí dụ: dangky abc123@gmail.com password`, opts);
		bot = null;
		id = null;
	}

}
