let title = document.querySelector(".text-box h1");
let content = document.querySelector(".text-box p");
let gPlay = document.querySelector("#gplay");
let artitle = document.querySelectorAll(".slider .content");
let bigImg = document.querySelector("#big-img-app");
let arcontent = [
  "Đây là công cụ tối ưu nhất dành cho những người làm công tác trắc địa, xây dựng, giao thông, quy hoạch... Nó hỗ trợ việc lập bản đồ, khảo sát thực địa, thu thập thông tin địa lý ở bất kỳ khu vực nào trên thế giới.",
  "Ứng dụng này cho phép bạn biết độ cao của một ngọn núi, một địa điểm hoặc vị trí của bạn. Ứng dụng cho phép bạn lưu từng giá trị tọa độ và độ cao sau đó export ra các file txt, dxf tương ứng",
  "Hiển thị các thông số về GPS gồm: các vệ tinh, mức sóng của vệ tinh, hướng và góc của vệ tinh so với đường chân trời, la bàn địa lý, độ cao của điểm đo, tọa độ của điểm đo",
  "Công cụ đo đạc, tính toán diện tích/chu vi/độ dài đất đai thông minh, trực quan, sử dụng đơn giản",
  "Phần mềm dành riêng cho kỹ sư trắc địa, đo đạc, giao thông, viễn thông. Người dùng sử dụng ứng dụng này để chụp một cột mốc hoặc vật thể sau đó gán tọa độ lên ảnh. Hỗ trợ các hệ tọa độ VN2000, HN72 với tất cả kinh tuyến trục trong cả nước.",
];
let hrefApp = [
  "https://play.google.com/store/apps/details?id=com.truonghau.compass&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.thsoft.altitude&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.thsoft.gps.viewer&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.thsoft.geopro&hl=en_US",
  "https://play.google.com/store/apps/details?id=com.thsoft.cameracompass&hl=en_US",
];
window.scrollTo({
  behavior: "smooth",
});
function slideChange(num) {
  if (window.matchMedia("(max-width: 426px)").matches) {
    document.querySelector(".logo-apw").style.display = "block";
    document.querySelector(".logo").style.display = "none";
    document.querySelector("section").style.paddingTop = "85px";
    title.innerHTML = artitle[num - 1].innerHTML;
    content.innerHTML = arcontent[num - 1];
    gPlay.href = hrefApp[num - 1];
    bigImg.src = `./img/${num}.svg`;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } else {
    title.innerHTML = artitle[num - 1].innerHTML;
    content.innerHTML = arcontent[num - 1];
    gPlay.href = hrefApp[num - 1];
    bigImg.src = `./img/${num}.svg`;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
