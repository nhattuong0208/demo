var danhSachSV = [];
// thêm sinh viên vào danh sách
function themSinhVien() {
    var maSV = document.getElementById('txtMaSV').value;
    var tenSV = document.getElementById('txtTenSV').value;
    var loaiSV = document.getElementById('loaiSV').value;
    var diemToan = document.getElementById('txtDiemToan').value;
    var diemLy = document.getElementById('txtDiemLy').value;
    var diemHoa = document.getElementById('txtDiemHoa').value;
    var diemRenLuyen = document.getElementById('txtDiemRenLuyen').value;

    diemToan = parseFloat(diemToan);
    diemLy = parseFloat(diemLy);
    diemHoa = parseFloat(diemHoa);
    diemRenLuyen = parseFloat(diemRenLuyen);

    var sinhVien = {
        //key: value,
        MaSV: maSV,
        TenSinhVien: tenSV,
        LoaiSinhVien: loaiSV,
        DiemToan: diemToan,
        DiemLy: diemLy,
        DiemHoa: diemHoa,
        DiemRenLuyen: diemRenLuyen,
        TinhDiemTB: function () {
            var diemTB = (this.DiemToan + this.DiemLy + this.DiemHoa) / 3;
            return diemTB.toFixed(2);
        }
    }
    danhSachSV.push(sinhVien);
    // tao bang
    taoBang();

}

// Tạo <tr> theo danh sách sinh vien trong mang Danh Sach Sinh Vien
function taoBang() {
    
    var tbody = document.getElementById('tbodySinhVien');
    tbody.innerHTML='';
    for (var i = 0; i < danhSachSV.length; i++) {

        var trTag = document.createElement('tr');

        var tdMaSV   = document.createElement('td');
        var tdTenSV  = document.createElement('td');
        var tdLoaiSV = document.createElement('td');
        var tdDiemTB = document.createElement('td');
        var tdDiemRL = document.createElement('td');

        // gán dữ liệu vào từng ô td;
        tdMaSV.innerHTML   = danhSachSV[i].MaSV;
        tdTenSV.innerHTML  = danhSachSV[i].TenSinhVien;
        tdLoaiSV.innerHTML = danhSachSV[i].LoaiSinhVien;
        tdDiemTB.innerHTML = danhSachSV[i].TinhDiemTB();
        tdDiemRL.innerHTML = danhSachSV[i].DiemRenLuyen;

        // Bỏ 5 thẻ <td> vào trong <tr>
        trTag.appendChild(tdMaSV);
        trTag.appendChild(tdTenSV);
        trTag.appendChild(tdLoaiSV);
        trTag.appendChild(tdDiemTB);
        trTag.appendChild(tdDiemRL);

        // nhét tr vào <tbody>
        tbody.appendChild(trTag);


    }
}
