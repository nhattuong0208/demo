/*
 Author: Tran Nhat Tuong
 Date: 29/03/2019
 mô tả : bài tập quản lý sinh viên
	1. lấy danh sách điểm từ thư viện
	1.1 tính điểm trung bình sinh viên toàn khoa
	2. tìm ra sinh viên cao điểm nhất
	3. tìm ra sinh viên thấp điểm nhất
	4. kiểm tra xem có bao nhiêu sinh viên yếu
	5. kiểm tra có sinh viên đạt loại giỏi hay không
	6. sắp xếp danh sách điểm tăng dần giảm dần
*/

var danhSachDiem = [];
var danhSachTen = [];

function layDanhSachDiem(){
	var danhSachTd = document.getElementsByClassName("td-diem"); // lụm ô td
	for(var i = 0; i< danhSachTd.length; i++){
		danhSachDiem.push(danhSachTd[i].innerHTML *1);//.value chỉ có input textaria mới có
	}
	console.log(danhSachDiem);
}
layDanhSachDiem();

function tinhDiemTB(){
	var sl=0;
	var tong=0;
	for(var i = 0; i< danhSachDiem.length; i++){
		tong += danhSachDiem[i];
		sl++;
	}
	var diemTB= Math.round(tong/sl);
	// var diemTB= (tong/sl).toFixed(2);
	console.log(diemTB);
}

function layDanhSachSinhVien(){	
	var danhSachTd = document.getElementsByClassName("td-ten");
	for(var i = 0; i< danhSachTd.length; i++){
		danhSachTen.push(danhSachTd[i].innerHTML);//.value chỉ có input textaria mới có
	}
	console.log(danhSachTen);
}
layDanhSachSinhVien();

function sinhVienDiemCaoNhat(){
	var max =danhSachDiem[0];
	var second = 0;
	var ten1;
	var ten2;
	for(var i = 0; i< danhSachDiem.length; i++){
		if(danhSachDiem[i]>max){
			max=danhSachDiem[i];
			ten1=danhSachTen[i];
		}else if(danhSachDiem[i]>second){
			second=danhSachDiem[i];
			ten2=danhSachTen[i];
		}
	}
	console.log("sinh viên có điểm cao nhất :",ten1,max);
	console.log("sinh viên có điểm cao nhì :",ten2,second);
}

sinhVienDiemCaoNhat();

function baoNhieuSinhVienYeu(){
	var count=0;
	var count2=0;
	for(var i = 0; i< danhSachDiem.length; i++){
		if(danhSachDiem[i]<5){
			count++;
		}else if(danhSachDiem[i]>8){
			count2++;
		}
	}
	if(count2=0){
		console.log("không có sinh viên giỏi");
	}else{
		console.log("có sinh viên giỏi");
	}
	console.log("số sinh viên yếu :",count);
	
}
baoNhieuSinhVienYeu();

function sapXep(){
	for(var i = 0 ; i< danhSachDiem.length; i++){
		for (var j = 0 ; j<danhSachDiem.length-i-1; j++){
			if(danhSachDiem[j]>danhSachDiem[j+1]){
				var temp = danhSachDiem[j];
				danhSachDiem[j]=danhSachDiem[j+1];
				danhSachDiem[j+1]= temp;
			}
		}
	}
	console.log(danhSachDiem);
}
sapXep();

