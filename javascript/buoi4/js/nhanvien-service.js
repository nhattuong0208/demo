function NhanVienService(){
    this.axiosLayDSNV = function(){
        return axios({
            url: 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien',
            method: 'GET'
        })
    }
    this.axiosCapNhatNV = function(msnv,nhanVienMoi){
        return axios({
            url:`https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien/${msnv}`,
            method:'PUT',
            data: nhanVienMoi
        })
    }
}