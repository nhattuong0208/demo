// Lớp đối tượng NhanVien
function NhanVien(ho,ten,manv,ngaybd,chucvu){
    this.Ho = ho;
    this.Ten = ten;
    this.MaNV = manv;
    this.NgayBatDau = ngaybd;
    this.ChucVu = chucvu;
    this.LuongCoBan = 1000;
    this.TongLuong = 0;
    this.TinhLuong = function(){
        if(this.ChucVu ==="Sếp"){
            this.TongLuong = this.LuongCoBan * 3;
        }
        else if (this.ChucVu === "Trưởng phòng"){
            this.TongLuong = this.LuongCoBan * 2;
        }
        else if(this.ChucVu ==="Nhân viên"){
            this.TongLuong = this.LuongCoBan;
        }
    }
}