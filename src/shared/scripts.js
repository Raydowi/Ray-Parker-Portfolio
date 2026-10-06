const topbutton = document.getElementById("top-button");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-content");
const modalVideoWrapper = document.getElementById("modal-video-wrapper");
const modalVideo = document.getElementById("modal-video");
const caption = document.getElementById("caption");

document.addEventListener("DOMContentLoaded", function() {

    let modals = document.querySelectorAll(".modal");
    modals.forEach(media => {
        media.addEventListener("click", openModal)
    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function getYouTubeId(url) {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : null;
}

function openModal(event) {
    const media = event.currentTarget;
    const link = media.querySelector("a");
    const img = media.querySelector("img");

if (link) {
    event.preventDefault();
    const videoId = getYouTubeId(link.href);
    if (videoId) {
    modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modalVideoWrapper.style.display = "block";
    modalImg.style.display = "none";
    caption.innerText = img ? img.alt || "" : "";
    } else {
        console.warn("Couldn't parse YouTube ID from", link.href);
    }
} else if (img) {
    modalImg.src = img.src;
    modalImg.style.display = "block";
    modalVideoWrapper.style.display = "none";
    caption.innerText = img.alt || "";
}
    modal.style.display = "flex";
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
    modal.style.display = "none";
    modalVideo.src = "";
    caption.innerText = "";
}