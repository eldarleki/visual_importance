// script.js

let selectedFile = null;

document.getElementById("dropZone").addEventListener("dragover", function(e) {
    e.preventDefault();
    this.classList.add("highlight");
});

document.getElementById("dropZone").addEventListener("dragleave", function(e) {
    e.preventDefault();
    this.classList.remove("highlight");
});

document.getElementById("dropZone").addEventListener("drop", function(e) {
    e.preventDefault();
    this.classList.remove("highlight");
    handleFile(e.dataTransfer.files[0]);
});

document.getElementById("dropZone").addEventListener("click", function() {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function(e) {
    handleFile(e.target.files[0]);
});

function handleFile(file) {
    if (file) {
        selectedFile = file;
        document.getElementById("dropZone").innerHTML = `<span class="drop-zone-text">${file.name}</span>`;
    }
}

function selectImage() {
    if (selectedFile) {
        // Simulating processing time
        showLoader();
        setTimeout(processImage, 10000);
    }
}

function processImage() {
    // Simulating receiving the processed image URL
    const processedImageUrl = "скрины/res.png";
    document.getElementById("attentionImage").src = processedImageUrl;
    openModal();
}

function openModal() {
    document.getElementById("overlay").style.display = "flex";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("attentionImage").src = "";
    document.getElementById("dropZone").innerHTML = `<span class="drop-zone-text">Drag and drop a file here or click to select from your computer</span>`;
    document.getElementById("fileInput").value = "";
}

function showLoader() {
    document.getElementById("dropZone").innerHTML = `<div class="loader"></div>`;
}
