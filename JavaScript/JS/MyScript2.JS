let CurrentImageIndex = 0;

function showimage(index) {
    const mainImage = document.getElementById("main");
    mainImage.src = document.querySelectorAll(".slide_view img") [index].src;
    currentImageIndex = index;
}

function nextImage() {
    CurrentImageIndex = (currentImageIndex + 1) % 5; // Assuming 5 images
    showimage(currentImageIndex);
}

function prevImage() {
    CurrentImageIndex = (CurrentImageIndex - 1 + 5) % 5; // Assuming 5 images
    showimage(CurrentImageIndex);
}

// Adding event listeners for arrow keys
document.addEventListener("keydown", (event) => {
    if (event.key === "Arrowleft") {
        prevImage();
    } else if (event.key === "ArrowRight") {
        nextImage();
    }
});s