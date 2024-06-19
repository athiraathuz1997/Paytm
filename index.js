const imageContainer = document.getElementById("image-container");
const imageInfo = document.getElementById("image-info");

const testimonialContainer = document.getElementById("testimonial");
const images = [
    { src: "image1.png", info: "<div class='first-info'>Highly recommended!! These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them.</div><div class='first-line'>Selvedin Durak</div><div class='second-line'>Description</div>" },
    { src: "image2.png", info: "<div class='first-info'>These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them</div><div class='first-line'>Image 2</div><div class='second-line'>Selvedin Durak</div>" },
    { src: "image3.png", info: "<div class='first-info'>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.</div><div class='first-line'>Selvedin Durak</div><div class='second-line'>Description</div>" },
    { src: "image4.png", info: "<div class='first-info'>Highly recommended!! These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them</div><div class='first-line'>Image 4 Selvedin</div><div class='second-line'>Durak</div>" },
    { src: "image5.png", info: "<div class='first-info'>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.</div><div class='first-line'>Selvedin Durak</div><div class='second-line'>Description</div>" }
];

let currentIndex = 0;

function rotateImages() {
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    // Update the content below the images based on the currently displayed image
    const currentImage = images[currentIndex];
    const matchResult = currentImage.info.match(/<div class='first-line'>(.*?)<\/div><div class='second-line'>(.*?)<\/div>/);

    if (matchResult) {
        const firstLineContent = matchResult[1];
        const secondLineContent = matchResult[2];

        const styledFirstLine = `<strong style="display: block; text-align: center;">${firstLineContent}</strong>`;
        const styledSecondLine = `<div style="text-align: center;">${secondLineContent}</div>`;
        // Now you can use firstLineContent and secondLineContent as needed
        console.log("First Line:", firstLineContent);
        console.log("Second Line:", secondLineContent);

        // Set the inner HTML of the imageInfo element
        imageInfo.innerHTML = `${styledFirstLine}<br>${styledSecondLine}`;
    } else {
        // Handle the case where the regular expression didn't match
        console.error("Regular expression did not match.");
    }

    // Update the testimonial content with the first-info text
    const testContainer = currentImage.info.match(/<div class='first-info'>(.*?)<\/div>/)[1];
    const styledTestimonial = `<em style=" font-weight:600">${testContainer}</em>`;
    testimonialContainer.innerHTML = `${styledTestimonial}`;

    for (let i = 0; i < 5; i++) {
        const image = document.createElement("img");
        image.src = images[(currentIndex + i) % images.length].src;
        image.className = "image";
        if (i === 2) {
            image.className = "image border-image";
        }
        imageContainer.appendChild(image);
    }

    currentIndex = (currentIndex + 1) % images.length;
}

// Initial rotation
rotateImages();

// Set an interval to rotate the images every 3 seconds (adjust as needed)
setInterval(rotateImages, 3000);