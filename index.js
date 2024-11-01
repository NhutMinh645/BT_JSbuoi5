// console.log('abc')

// BT1
//  DOM tới button gắn sự kiện onclick
document.getElementById('btnKiemTra').onclick = ()=> {

    // Lấy giá trị từ input và select
    const diemChuan = parseFloat(document.getElementById("diemChuan").value) || 0;
    const diemMon1 = parseFloat(document.getElementById("diemMon1").value) || 0;
    const diemMon2 = parseFloat(document.getElementById("diemMon2").value) || 0;
    const diemMon3 = parseFloat(document.getElementById("diemMon3").value) || 0;
    const khuVuc = document.getElementById("khuVuc").value;
    const doiTuong = parseInt(document.getElementById("doiTuong").value);

    // Kiểm tra nếu có môn nào có điểm là 0
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById("ketQua").innerText = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
        return;
    }

     // Tính điểm ưu tiên theo khu vực
     let diemUuTienKhuVuc = 0;
     if (khuVuc === "A") {
         diemUuTienKhuVuc = 2;
     } else if (khuVuc === "B") {
         diemUuTienKhuVuc = 1;
     } else if (khuVuc === "C") {
         diemUuTienKhuVuc = 0.5;
     } else {
         diemUuTienKhuVuc = 0;
     }

     // Tính điểm ưu tiên theo đối tượng
     let diemUuTienDoiTuong = 0;
     if (doiTuong === 1) {
         diemUuTienDoiTuong = 2.5;
     } else if (doiTuong === 2) {
         diemUuTienDoiTuong = 1.5;
     } else if (doiTuong === 3) {
         diemUuTienDoiTuong = 1;
     } else {
         diemUuTienDoiTuong = 0;
     }

     // Tính tổng điểm
     const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    // Kiểm tra 
     let ketQua;
     if (tongDiem >= diemChuan) {
    ketQua = "Đậu";
     } else {
    ketQua = "Rớt";
     }

     // Hiển thị kết quả
     document.getElementById("ketQua").innerText = `Kết quả: ${ketQua}. Tổng điểm: ${tongDiem}`;

    
}

// BT2
document.getElementById('btnTinhTien').onclick = () =>{
    const name = document.getElementById('name').value || 0;
    const kw = parseFloat(document.getElementById('kw').value) || 0;
    if(name === 0 || kw === 0){
        alert("Số kw không hợp lệ! Vui lòng nhập lại")
    }
    let total = 0;

    if (kw <= 50) {
        total = kw * 500;
    } else if (kw <= 100) {
        total = (50 * 500) + ((kw - 50) * 650);
    } else if (kw <= 200) {
        total = (50 * 500) + (50 * 650) + ((kw - 100) * 850);
    } else if (kw <= 350) {
        total = (50 * 500) + (50 * 650) + (100 * 850) + ((kw - 200) * 1100);
    } else {
        total = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((kw - 350) * 1300);
    }

    document.getElementById('result').textContent = `Tên: ${name}, Tiền điện: ${total.toLocaleString()}`;
}

// BT3
document.getElementById('btnTinhThue').onclick = ()=>{
    const tenHo = document.getElementById('hoTen').value || 0;
    const tongThuNhap = parseFloat(document.getElementById('tongThu').value) || 0; 
    const soNguoiPhuThuoc = parseInt(document.getElementById('soNguoi').value) || 0; 

    const tinhTienThue = tongThuNhap - 4000000 - (soNguoiPhuThuoc * 1600000);
    let tien = 0;

    if (tongThuNhap < 4000000 || tinhTienThue < 0 ) {
       alert ('Số tiền thu nhập không hợp lệ')
       return;
    }

    if (tinhTienThue <= 60000000) {
        tien = tinhTienThue * 0.05;
    } else if (tinhTienThue <= 120000000) {
        tien = tinhTienThue * 0.1;
    } else if (tinhTienThue <= 210000000) {
        tien = tinhTienThue * 0.15;
    } else if (tinhTienThue <= 384000000) {
        tien = tinhTienThue * 0.2;
    } else if (tinhTienThue <= 624000000) {
        tien = tinhTienThue * 0.25;
    } else if (tinhTienThue <= 960000000) {
        tien = tinhTienThue * 0.3;
    } else {
        tien = tinhTienThue * 0.35;
    }

    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById('resultThue').innerText = `Họ tên: ${tenHo}; Tiền thuế thu nhập cá nhân: ${formatter.format(tien)}`;
}

// BT4
// Hiển thị ô nhập Số kết nối nếu chọn loại khách hàng là Doanh Nghiệp
function hienThiOsoKetNoi() {
    const loaiKhach = document.getElementById('loaiKhach').value;
    const oSoKetNoi = document.getElementById('oSoKetNois');
    
    if (loaiKhach === 'doanhNghiep') {
        oSoKetNoi.classList.remove('hidden');
    } else {
        oSoKetNoi.classList.add('hidden');
    }
}


function tinhTienCap() {
    // Lấy giá trị từ các ô nhập liệu
    const maKH = document.getElementById('maKH').value;
    const loaiKhach = document.getElementById('loaiKhach').value;
    const soKenh = parseInt(document.getElementById('soKenh').value) || 0;
    const soKetNoi = parseInt(document.getElementById('soKetNoi').value) || 0;
   
    let tienCap = 0;

    // Tính tiền cáp dựa trên loại khách hàng
    if (loaiKhach === 'nhaDan') {
        // Nhà dân
        tienCap = 4.5 + 20.5 + (7.5 * soKenh);
    } else if (loaiKhach === 'doanhNghiep') {
        // Doanh nghiệp
        tienCap = 15 + 75;
        if (soKetNoi > 10) {
            tienCap += (soKetNoi - 10) * 5;
        }
        tienCap += 50 * soKenh;
    }

    tienCap = tienCap.toFixed(2);   
  
    document.getElementById('resultCap').textContent = `Mã khách hàng: ${maKH}; Tiền cáp: $${tienCap}`;
}

    document.getElementById('btnTinhCap').onclick = tinhTienCap;
















