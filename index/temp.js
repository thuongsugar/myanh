var count = 128;
var dangDienRa = document.createElement('p'); //tạo 1 thẻ html mới
dangDienRa.innerHTML = `Tổng số <b> ${count} </b>lễ hội đang diễn ra trong tháng`; // den day co the h1: gắn nội dung bên trong 1 thẻ html

var khoiDangDienRa = document.getElementById('dangDienRa'); //LẤY phần tử theo ID

//gắn nội dung vào 
khoiDangDienRa.appendChild(dangDienRa);

var mangLHdang = [
    {
        id: 1,
        image : "./imgt/1_1.png",
        title: "Lễ hội Chùa Bái Đính",
        ndung: "Bắt đầu khai mạc vào ngày mùng 6 tháng Giêng và kéo dài đến hết tháng 3 Âm lịch tại chùa Bái Đính xã Gia Sinh, huyện Gia Viễn, tỉnh Ninh Bình"
    }, 
    {
        id: 2,
        image : "./imgt/1_2.png",
        title: "Lễ hội chùa Hương-Mỹ Đức, Hà Nội",
        ndung: "Trong 3 tháng, từ mùng 6 tháng 1 đến tháng 3 âm lịch, đỉnh cao lễ hội là từ rằm tháng Giêng đến 18 tháng 2 AL"
    }, 
    {
        id: 3,
        image : "./imgt/1_3.png",
        title: "Lễ hội Yên Tử - Uông Bí, Quảng Ninh",
        ndung: "Từ ngày 10 tháng Giêng đến hết tháng 3 âm lịch"
    },
    {
        id: 4,
        image : "./imgt/1_4.png",
        title: "Lễ hội chùa Côn Sơn - Chí Linh, Hải Phòng",
        ndung: "Thường được tổ chức vào tháng Giêng hàng năm, từ ngày 15 đến ngày 22"
    },  
    {
        id: 5,
        image : "./imgt/1_5.png",
        title: "Lễ hội Đào Xá - Thanh Thủy, Phú Thọ",
        ndung: "Diễn ra trong 3 ngày, từ ngày 27 đến ngày 29 tháng Giêng"
    }, 
];
// for (var i = 1; i < mangLHdang.length; i++) {
//     var nd1khoi = 
//                 `<div class="card bb" id="khoi-${mangLHdang[i].id}">
//                     <img class="card-img-top main12" src="${mangLHdang[i].image}" alt="">
//                     <div class="card-body">
//                         <h6 class="card-title">${mangLHdang[i].title}</h6>
//                         <p class="card-text">${mangLHdang[i].ndung}</p>
//                     </div>
//                 </div>`;
//     var phantumoi = document.createElement('div');
//     phantumoi.innerHTML = nd1khoi;
//     var cackhoi = document.getElementById('mangLHdang');
//     cackhoi.appendChild(phantumoi);
// }

var mangLHnuocNgoai = [
    {
        id: 1,
        image : "./imgt/2_1.png",
        title: "Các chòi hát quan họ ở hội Lim",
        ndung: "Hội Lim và dân ca Quan họ trở thành tài sản văn hóa chung của dân tộc Viêt, tiêu biểu cho loại hình dân ca trữ tình Bắc Bộ."
    }, 
    {
        id: 2,
        image : "./imgt/2_2.png",
        title: "Nét đẹp văn hóa Việt Nam thông qua các lễ hội truyền thống",
        ndung: "Hội Lim và dân ca Quan họ trở thành tài sản văn hóa chung của dân tộc Viêt, tiêu biểu cho loại hình dân ca trữ tình Bắc Bộ."
    }, 
    {
        id: 3,
        image : "./imgt/2_3.png",
        title: "Những lễ hội đầu xuân nổi Tiếng ở Việt Nam",
        ndung: "Dưới đây là danh sách lịch khai hội của những lễ hội lớn để tham khảo cho những ai yêu thích du xuân lễ Phật đầu năm."
    },
    {
        id: 4,
        image : "./imgt/2_4.png",
        title: "Lễ hội Festival Huế, diễm ra 2 năm 1 lần ở Thừa THiên Huế",
        ndung: "Các màn trình diễn ca nhạc dân tộc và ẩm thực truyền thống, đang diễn ra tại các Tiểu vương quốc Arab thống nhât (UAE)"
    },  
];

// for (var i = 0; i < mangLHnuocNgoai.length; i++) {
//     var nd1khoi = 
//                 `<div class="col-sm-3">
//                     <div class="main-content">
//                         <div class="card" id="khoi-${mangLHnuocNgoai[i].id}">
//                             <img class="card-img-top main2" src="${mangLHnuocNgoai[i].image}" alt="">
//                             <div class="card-body">
//                                 <h5 class="card-title">${mangLHnuocNgoai[i].title}</h5>
//                                 <p class="card-text">${mangLHnuocNgoai[i].ndung}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//     var phantumoi = document.createElement('a');
//     phantumoi.innerHTML = nd1khoi;
//     var cackhoi = document.getElementById('mangLHnuocNgoai');
//     cackhoi.appendChild(phantumoi);
// }

// var truyenThongC = 7039;
// var LHTruyenThong = document.createElement('p'); 
// LHTruyenThong.innerHTML = `<b> ${truyenThongC} </b>`; 
// var khoi1 = document.getElementById('lehoitruyenthong'); 
// khoi1.appendChild(LHTruyenThong); 

// var vanhoa = 7039;
// var LHvanhoa = document.createElement('p'); 
// LHvanhoa.innerHTML = `<b> ${vanhoa} </b>`; 
// var khoi2 = document.getElementById('lehoivanhoa'); 
// khoi1.appendChild(LHvanhoa); 

// var nganhnghe = 7039;
// var LHnganhnghe = document.createElement('p'); 
// LHnganhnghe.innerHTML = `<b> ${nganhnghe} </b>`; 
// var khoi3 = document.getElementById('lehoinganhnghe'); 
// khoi1.appendChild(LHnganhnghe); 

// var nuocngoai = 7039;
// var LHnuocngoai = document.createElement('p'); 
// LHnuocngoai.innerHTML = `<b> ${nuocngoai} </b>`; 
// var khoi4 = document.getElementById('lehoinuocngoai'); 
// khoi1.appendChild(LHnuocngoai); 