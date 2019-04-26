/*
	Người tạo: Đặng Trung Hiếu
	Ngày Tạo: 05/04/2019
	Mô Tả: dự án quản lý nhân viên (CRUD)
	Chức Năng:
		1. Thêm nhân viên mới vào danh sách
		2. Hiển thị danh sách nhân viên ra bảng
		3. Xóa nhân viên trong danh sách
		4. Cập nhật thông tin nhân viên
		5. Tìm kiếm nhân viên
		6. Validation form thêm nhân viên
*/
var nhanVienService = new NhanVienService();
var danhSachNhanVien = [];

// CHỨC NĂNG 1 : THÊM NHÂN VIÊN
function themNhanVien() {
	var isValid = true;
	isValid &= kiemTraNhap('ho', 'thongBaoHo', '*vui lòng nhập họ') && kiemTraDoDai('ho', 'thongBaoHo', '* họ phải có từ ', 5, 10);
	isValid &= kiemTraNhap('ten', 'thongBaoTen', '*vui lòng nhập tên') && kiemTraText('ten', 'thongBaoTen', '*tên phải là chữ')

	if (isValid) {
		//b1: lấy dữ liệu từ form
		var ho = document.getElementById('ho').value;
		var ten = document.getElementById('ten').value;
		var msnv = document.getElementById('msnv').value;
		var ngayBatDau = document.getElementById('datepicker').value;
		var chucVu = document.getElementById('chucvu').value;
		//khởi tạo 1 instance (thể hiện) của lớp đối tượng NhanVien
		// => tạo một đối tượng mới từ lớp NhanVien, và đối tượng mới
		// này sẽ có toàn bộ thuộc tính mà lớp NhanVien có
		var nhanVienMoi = new NhanVien(ho, ten, msnv, ngayBatDau, chucVu);

		/* 
			vì lưu xuống local, thì phương thức ko sử dụng dc nữa
			gọi hàm TinhLuong() chạy để có được tổng lương
			rồi sau đó mới push vào mảng và lưu xuống local
			=> lần sau khi f5, lấy lên chúng ta có thể sử dụng TongLuong
		*/
		nhanVienMoi.TinhLuong();

		axios({
			url:"https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien",
			method:'POST',
			//chỉ dùng khi nào cần gửi đối tượng lên server
			data: nhanVienMoi
		})
		.then(function(res){
			layDuLieuTuDB();
		})
		.catch(function(err){
			console.log(err);
		})
		//push đối tượng nhân viên mới tạo vào danh sách
		// danhSachNhanVien.push(nhanVienMoi);

		//lưu danh sách xuống local storage
		// => để lần sau khi f5 lại , chúng tao có thể lấy danh sách lần trước lên
		// hàm setItem nhận vào 2 tham số :
		/*
			1. Tên đại diện danh sách muốn lưu(tự đặt)
			2. Dữ liệu muốn lưu xuống (là chuỗi)
		*/

		// var DSNVString = JSON.stringify(danhSachNhanVien)
		// localStorage.setItem(
		// 	'danhSachNhanVien',
		// 	DSNVString
		// )

		//tao bảng
		taoBang(danhSachNhanVien);
	} else {
		alert('vui lòng kiểm tra lại thông tin');
	}
}

//CHỨC NĂNG 2: HIỂN THỊ DANH SÁCH NHÂN VIÊN VÀO BẢNG.

function taoBang(danhsach) {
	var content = '';
	for (var i = 0; i < danhsach.length; i++) {
		var nhanVien = danhsach[i];
		content +=
			//template string
			`<tr>
			<td>${i + 1}</td>
			<td>${nhanVien.Ho}</td>
			<td>${nhanVien.Ten}</td>
			<td>${nhanVien.MaNV}</td>
			<td>${nhanVien.ChucVu}</td>
			<td>${nhanVien.TongLuong}</td>

			<td>
				<button onclick="xoaNhanVien('${nhanVien.MaNV}')" class="btn btn-success">Xóa</button>
				<button onclick="layThongTinNV('${nhanVien.MaNV}')" class="btn btn-info">Cập Nhật</button>
			</td>
		</tr>`;
	}
	document.getElementById('tbodyNhanVien').innerHTML = content;
}

// lấy danh sách nhân viên được lưu dưới local lên để sử dụng
//get lên bằng cái tên lúc lưu xuống
function layDuLieuTuDB() {
	// check thử dưới local có dữ liệu hay k
	// có thì lấy lên dùng , không thì thôi
	// if (localStorage.getItem('danhSachNhanVien')/* !== null */) {
	// 	// parse dữ liệu từ chuỗi sang lại thành mảng để sử dụng
	// 	danhSachNhanVien = JSON.parse(localStorage.getItem('danhSachNhanVien'));
	// 	taoBang(danhSachNhanVien);
	// }

	nhanVienService.axiosLayDSNV()
		.then(function (res) {
			console.log(res.data)
			danhSachNhanVien = res.data;
			taoBang(danhSachNhanVien);
		})
		.catch(function (err) {
			console.log(err)
		})
	

}

// CHỨC NĂNG 3: XÓA NHÂN VIÊN
function xoaNhanVien(maNV) {
	//input: vị trí phần tử muốn xóa -> cần có được mã nhân viên

	//giải thuật:
	// 1. lấy được mã nhân viên
	var maNhanVien = maNV;

	axios({
		url:`https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien/${maNhanVien}`,
		method:'DELETE'
	})
	.then(function (res) {
		console.log(res.data);
		layDuLieuTuDB();
	})
	.catch(function (err) {
		console.log(err);
	})
	// 2. Tìm vị trí nhân viên nằm ở đâu trong mảng dựa vào mã nhân viên
	// var index = timViTriTheoMa(maNhanVien, danhSachNhanVien);
	// console.log(index);
	// if (index !== -1) {
	// 	danhSachNhanVien.splice(index, 1);
	// 	taoBang(danhSachNhanVien);
	// 	//lưu mảng danhSachNhanVien mới xóa xuống lại local
	// 	var DSNVString = JSON.stringify(danhSachNhanVien);
	// 	localStorage.setItem(
	// 		'danhSachNhanVien',
	// 		DSNVString
	// 	)
	// }
	//output: danhSachNhanVien mới sau khi xóa

}

// CHỨC NĂNG 4: CẬP NHẬT THÔNG TIN CỦA NHÂN VIÊN
//*****************bước 1: hiển thị thông tin củ lên form khi nhấn nút cập nhật
//input: mã nhân viên => tìm kiếm nhân viên muốn sửa
// Xử lý:
//1. lấy mã nhan vien và tìm ra vị trí nhân viên muốn cập nhật trong mảng (truyền tham số)
//2. hiển thị thông tin củ của nhân viên len form
//3. tạo nút cập nhật, khi sửa thì hien nút cập nhật ra , sửa xong thì ẩn đi
//output: danhSachNhanVien mới
//*****************bước 2: cập nhật
//1. lấy xuống thông tin mới đã sửa từ input
//2. Tìm nha vien đó nằm ở đâu trong danh sách 
//3. Thay đổi từng thuộc tính của đối tượng nhân viên củ bằng những thông tin mới
//4. render lại giao diện
function layThongTinNV(MANV) {
	//b1
	var index = timViTriTheoMa(MANV, danhSachNhanVien);
	danhSachNhanVien[index];
	//b2
	document.getElementById('ho').value = danhSachNhanVien[index].Ho;
	document.getElementById('ten').value = danhSachNhanVien[index].Ten;
	document.getElementById('msnv').value = danhSachNhanVien[index].MaNV;
	document.getElementById('datepicker').value = danhSachNhanVien[index].NgayBatDau;
	document.getElementById('chucvu').value = danhSachNhanVien[index].ChucVu;
	//b3
	document.getElementById('btnCapNhatNV').style.display = 'block';
	document.getElementById('btnThemNV').style.display = 'none';
	document.getElementById('msnv').setAttribute('disabled', 'true');
}
function capNhatNV() {
	//b1
	var ho = document.getElementById('ho').value;
	var ten = document.getElementById('ten').value;
	var msnv = document.getElementById('msnv').value;
	var ngayBatDau = document.getElementById('datepicker').value;
	var chucVu = document.getElementById('chucvu').value;
	//b2
	// var index = timViTriTheoMa(msnv, danhSachNhanVien);
	// var nhanVienCapNhat = danhSachNhanVien[index];
	//b3
	var nhanVienMoi = new NhanVien(ho, ten, msnv, ngayBatDau, chucVu);
	nhanVienMoi.TinhLuong();

	nhanVienService.axiosCapNhatNV(msnv,nhanVienMoi)
	.then(function (res) {
		console.log(res.data);
		layDuLieuTuDB();
	})
	.catch(function (err) {
		console.log(err);
	})
	// nhanVienCapNhat.Ho = ho;
	// nhanVienCapNhat.Ten = ten;
	// nhanVienCapNhat.NgayBatDau = ngayBatDau;
	// nhanVienCapNhat.ChucVu = chucVu;
	// nhanVienCapNhat.TongLuong = nhanVienMoi.TongLuong;
	//b4
	// taoBang(danhSachNhanVien);
	//b5
	document.getElementById('btnCapNhatNV').style.display = 'none';
	document.getElementById('btnThemNV').style.display = 'block';
	document.getElementById('msnv').removeAttribute('disabled');
	//b6: clear input
	var ho = document.getElementById('ho').value = '';
	var ten = document.getElementById('ten').value = '';
	var msnv = document.getElementById('msnv').value = '';
	var ngayBatDau = document.getElementById('datepicker').value = '';
	var chucVu = document.getElementById('chucvu').value = '';

}

//CHỨC NĂNG 5: TÌM KIẾM NHÂN VIÊN (TÌM THEO MÃ NV VÀ TÊN)
function timKiemNhanVien() {
	//input: keyword người dùng nhập
	var danhSachTimKiem = [];
	// xử lý:
	// 1. lấy input(keyword)
	var keyWord = document.getElementById('txtseach').value;
	// 2. dùng for duyệt mảng, kiểm tra nhân viên nào có mã giống với keyword
	// push náo vào danh sách tìm kiếm
	for (var i = 0; i < danhSachNhanVien.length; i++) {
		if (danhSachNhanVien[i].MaNV == keyWord || danhSachNhanVien[i].Ten.toLowerCase().indexOf(keyWord.toLowerCase().trim()) !== -1) {
			danhSachTimKiem.push(danhSachNhanVien[i]);
		}
	}
	console.log(danhSachTimKiem);
	//3. hiển thị danh sách tìm kiếm ra màng hình
	taoBang(danhSachTimKiem);
	//output : danh sach nhân viên mã hoặc tên giống vs người dùng tìm
}

//hàm kiếm nhân viên theo mã nhân viên
function timViTriTheoMa(maNV, danhSach) {
	for (var i = 0; i < danhSach.length; i++) {
		if (danhSach[i].MaNV === maNV) {
			return i;
		}
	}
	return -1;
}

// gọi chạy ngay
layDuLieuTuDB();


//------------------------------VALIDATION-------------------------------//
function kiemTraNhap(idInput, idSpan, message) {
	var text = document.getElementById(idInput).value;

	if (text.length > 0) {
		document.getElementById(idSpan).innerHTML = '';
		return true;
	}
	document.getElementById(idSpan).innerHTML = message;
	return false;
}

function kiemTraDoDai(idInput, idSpan, message, min, max) {
	var text = document.getElementById(idInput).value;
	if (text.length >= min && text.length <= max) {
		document.getElementById(idSpan).innerHTML = '';
		return true;
	}
	document.getElementById(idSpan).innerHTML = `${message} ${min} tới ${max} kí tự`;
	return false;
}
function kiemTraText(idInput, idSpan, message) {
	var text = document.getElementById(idInput).value;
	var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
		"ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
		"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
	if (pattern.test(text)) {
		document.getElementById(idSpan).innerHTML = '';
		return true;
	}
	document.getElementById(idSpan).innerHTML = message;
	return false;
}

function layDSNV() {
	axios({
		url: 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien',
		method: 'GET'
	})
		.then(function (res) {
			console.log(res.data)
		})
		.catch(function (err) {
			console.log(err)
		})

	console.log('1');
}

