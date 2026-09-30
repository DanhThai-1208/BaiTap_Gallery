
function upDate(previewPic) {
    
    console.log("Sự kiện upDate đã hoạt động!");

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}


function unDo() {
    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}