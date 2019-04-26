/*
    name: tran nhat tuong
    date: 25/3/2019
    description: chương trình tính tiền taxi
*/

// Bảng giá tiền điện


var tiendien_1 = 500;
var tiendien_2 = 650;
var tiendien_3 = 850;
var tiendien_4 = 1100;
var tiendien_5 = 1300;



function tinhTienTaxi() {
    // b1:lấy giá trị input đầu vào
    var sokw = document.getElementById("txtsoKm").value;
    var nguoitra = document.getElementById("nguoitra").value;
    sokw = parseInt(sokw);



    var tongtien;
    tongtien = tinhTien(sokw);

    console.log(tongtien);
    var theDiv = document.getElementById("divThanhTien");
    theDiv.style.display = "block";
    theDiv.style.backgroundColor = "pink";
    document.getElementById("xuatTien").innerHTML = tongtien;
    document.getElementById("textnguoitra").innerHTML = nguoitra;
}

function tinhTien(sokw) {
    if (sokw>=0 && sokw <= 50) {
        return sokw * tiendien_1;
    } else if (sokw > 50 && sokw <= 100) {
        return 50*tiendien_1 + (sokw - 50)*tiendien_2;
    } else if (sokw > 100 && sokw <= 200) {
        return 50*tiendien_1 + 50*tiendien_2 + (sokw-100)*tiendien_3;
    }else if (sokw > 200 && sokw <= 350) {
        return 50*tiendien_1 + 50*tiendien_2 + 100*tiendien_3 + (sokw-200)*tiendien_4;
    }
    else{
        return 50*tiendien_1 + 50*tiendien_2 + 100*tiendien_3 + 200*tiendien_4 + (sokw - 350)*tiendien_5;
    }
}