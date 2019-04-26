/*var hocvien = {
    // thuộc tính: là các đặc điểm thông tin của đối tượng
    // key: value
    name: "Tran Thanh Loc",
    age: 21,
    email: 'loctran0397@gmail.com',
    diemtoan: 9,
    diemly: 8,
    diemhoa: 7,

    //phương thức : hành động của đối tượng
    tinhDiemTB: function () {
        var diemTB = (this.diemtoan + this.diemhoa + this.diemly) / 3;
        return diemTB;
    }
}

var hocvien2 = {
    // thuộc tính: là các đặc điểm thông tin của đối tượng
    // key: value
    name: "Thanh Loc",
    age: 20,
    email: 'loctran@gmail.com',
    diemtoan: 7,
    diemly: 8,
    diemhoa: 8,

    //phương thức : hành động của đối tượng
    tinhDiemTB: function () {
        var diemTB = (this.diemtoan + this.diemhoa + this.diemly) / 3;
        return diemTB;
    }
}
// Lấy dữ liệu từ Object
// hocvien.name;
console.log('Ten : ', hocvien.name);
var diem = hocvien.tinhDiemTB();
console.log('Diem TB : ' + diem);

// Thêm dữ liệu vào Object
hocvien2.diemvan = 10;
console.log(hocvien2);

// Cap nhật dữ liệu
hocvien2.diemvan = 6;
console.log("Cap nhat diem van : " + hocvien2.diemvan);
*/


/* Bai 1: quan lý sinh viên__________________________________________ 
1. Lấy thông tin cảu sinh viên mới do người dùng nhập vào;
2. Lưu trữ thông tin của sinh viên đó với Object;
3. Hiển thị thông tin ra bên ngoài */



function hienThiThongTinSV() {
    var maSV = document.getElementById('txtMaSV').value;
    var tenSV = document.getElementById('txtTenSV').value;
    var loaiSV = document.getElementById('loaiSV').value;
    var diemToan = document.getElementById('txtDiemToan').value;
    diemToan = parseFloat(diemToan);
    var diemVan = document.getElementById('txtDiemVan').value;
    diemVan = parseFloat(diemVan);

    var sinhVien = {
        MaSV: maSV,
        TenSV: tenSV,
        LoaiSV: loaiSV,
        DiemToan: diemToan,
        DiemVan: diemVan,

        tinhDiemTB: function () {
            var diemTB = (this.DiemToan + this.DiemVan) / 2;
            return diemTB.toFixed(2);
        },
        xeploai: function () {
            var diemTB = this.tinhDiemTB();
            if (diemTB < 5)
                return 'Rớt';
            else
                return 'Qua';
        }
    }

    document.getElementById('spanTenSV').innerHTML = sinhVien.TenSV;
    document.getElementById('spanMaSV').innerHTML = sinhVien.MaSV;
    document.getElementById('spanLoaiSinhVien').innerHTML = sinhVien.LoaiSV;
    document.getElementById('spanDiemTB').innerHTML = sinhVien.tinhDiemTB();
    document.getElementById('spanXepLoai').innerHTML = sinhVien.xeploai();
}