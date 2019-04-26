function hienThiThongTinNV() {
    var maSV = document.getElementById('txtMaNV').value;
    var tenSV = document.getElementById('txtTenNV').value;
    var chucVu = document.getElementById('chucVu').value;
    var luongCoBan = document.getElementById('txtLuongCB').value;
    luongCoBan = parseFloat(luongCoBan);
    var gioLam = document.getElementById('txtGioLam').value;
    gioLam = parseFloat(gioLam);

    var NhanVien = {
        TenNhanVien: maSV,
        MaNhanVien: tenSV,
        ChucVu: chucVu,
        LuongCB: luongCoBan,
        GioLamTrongThang: gioLam,

        tinhLuong: function () {
            if (this.ChucVu === 'Giám Đốc') {
                return  this.LuongCB * 3;
            }
            else if (this.ChucVu === 'Trưởng Phòng') {
                return  this.LuongCB * 2;
            }
            else
                return this.LuongCB;

        },
        xeploai: function () {
            var giolamviec = this.GioLamTrongThang;
            if (giolamviec > 120)
                return 'Nhân viên Xuất Sắc ';
            else if (giolamviec <= 120 && giolamviec > 100)
                return ' Nhân viên Giỏi ';
            else if (giolamviec <= 100 && giolamviec > 80)
                return ' Nhân viên Khá ';
            else if (giolamviec <= 80 && giolamviec > 50)
                return ' Nhân viên Khá ';
            else
                return 'Đuổi việc'
        }
    }

    document.getElementById('spanTenNV').innerHTML = NhanVien.TenNhanVien;
    document.getElementById('spanMaNV').innerHTML = NhanVien.MaNhanVien;
    document.getElementById('spanChucVu').innerHTML = NhanVien.ChucVu;
    document.getElementById('spanTongLuong').innerHTML = NhanVien.tinhLuong().toLocaleString();
    document.getElementById('spanXepLoai').innerHTML = NhanVien.xeploai();


}