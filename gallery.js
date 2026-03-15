/* Hàm cập nhật hình ảnh khi Hover hoặc Focus */
function upDate(previewPic) {
    console.log("Event triggered for: " + previewPic.alt);
    
    let displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

/* Hàm khôi phục trạng thái ban đầu khi rời chuột hoặc Blur */
function unDo() {
    let displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

/* Hàm tự động thêm tabindex bằng vòng lặp For khi trang Load xong */
function addTabindex() {
    console.log("Page loaded. Adding tabindex to images...");
    
    let images = document.querySelectorAll('.preview');
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to image " + (i + 1));
    }
}