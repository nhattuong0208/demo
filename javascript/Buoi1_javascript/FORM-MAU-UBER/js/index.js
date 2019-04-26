/*
    name: tran nhat tuong
    date: 25/3/2019
    description: chương trình tính tiền taxi
*/

// Bảng giá taxi
var UBERX_1 = 8000;
var UBERX_2 = 12000;
var UBERX_3 = 10000;
var UBERX_CHO = 2000;

var UBERSUV_1 = 9000;
var UBERSUV_2 = 14000;
var UBERSUV_3 = 12000;
var UBERSUV_CHO = 3000;

var UBERB_1 = 10000;
var UBERB_2 = 16000;
var UBERB_3 = 14000;
var UBERB_CHO = 4000;



function tinhTienTaxi() {
    // b1:lấy giá trị input đầu vào
    var sokm = document.getElementById("txtsoKm").value;
    var tgcho = document.getElementById("txtthoigiancho").value;
    sokm = parseInt(sokm);
    tgcho = parseInt(tgcho);



    var loaixe;
    var tongtien;
    // b2:kiểm tra loại xe người dùng chọn
    loaixe = kiemTraLoaiXe();
    // !uberX.checked


    // console.log(loaixe);
    // console.log(sokm);
    // console.log(tgcho);

    //b3: tính tiền
    switch (loaixe) {
        case "uberX":
            tongtien = tinhTien(sokm, tgcho, UBERX_1, UBERX_2, UBERX_3, UBERX_CHO);
            break;
        case "uberSUV":
            tongtien = tinhTien(sokm, tgcho, UBERSUV_1, UBERSUV_2, UBERSUV_3, UBERSUV_CHO);
            break;
        case "uberBlack":
            tongtien = tinhTien(sokm, tgcho, UBERB_1, UBERB_2, UBERB_3, UBERB_CHO);
            break;
        default: alert("chưa chọn xe kìa má");
    }


    console.log(tongtien);
    var theDiv = document.getElementById("divThanhTien");
    theDiv.style.display = "block";
    theDiv.style.backgroundColor = "pink";
    document.getElementById("xuatTien").innerHTML = tongtien;
}

function kiemTraLoaiXe() {
    var uberX = document.getElementById("uberX");
    var uberSUV = document.getElementById("uberSUV");
    var uberBlack = document.getElementById("uberBlack");

    if (uberX.checked) {
        return "uberX";
    } else if (uberSUV.checked) {
        return "uberSUV";
    } else if (uberBlack.checked) {
        return "uberBlack";
    }
}

function tinhTien(sokm, tgcho, giaCuoc1, giaCuoc2, giaCuoc3, giaCho) {
    if (sokm <= 1) {
        return giaCuoc1 + tgcho * giaCho;
    } else if (1 < sokm && sokm < 21) {
        return giaCuoc1 + (sokm - 1) * giaCuoc2 + tgcho * giaCho;
    } else {
        return giaCuoc1 + 19 * giaCuoc2 + (sokm - 20) * giaCuoc3 + tgcho * giaCho;
    }
}