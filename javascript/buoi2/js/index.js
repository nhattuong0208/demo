function kiemTraSoNguyenTo() {
    // input: số người dùng nhập vào
    // giải thuật:
    // 1. lấy input:
    var num = document.getElementById('txtNum').value;
    // 2. dùng vòng lặp for để duyệt
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            console.log(num, 'không phải số nguyên tố');
            return; // trả về kết quả luôn k chạy code bên dưới nữa
        }
    }
    console.log(num, 'là số nguyên tố');
    // output: kết quả số này có phải là số nguyên tố hay k?
}

function timSoChan() {
    // input: chuổi số người dùng nhập
    // giải thuật:
    // 1. lấy input:
    var daysonguyen = document.getElementById('txtDaySoNguyen').value;
    var mangSoNguyen = [];
    mangSoNguyen = daysonguyen.split(',');
    console.log(mangSoNguyen);
    var ketqua = 'danh sách các số chẵn : ';

    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] % 2 == 0){
            ketqua += mangSoNguyen[i] + ",";
        }
    }
    console.log(ketqua);

    // output: hiển thị danh sách số chẵn ra màng hình

}