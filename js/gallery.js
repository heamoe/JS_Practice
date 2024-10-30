const featuredImage = document.getElementById('featured-image');
const imageCaption = document.getElementById('image-caption');
const thumbnails = document.querySelectorAll('#thumbnail-list img');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        if (index === 0) {
            featuredImage.src = 'images/flowers-pink-large.jpg';
            imageCaption.textContent = 'Flowers - Pink';
        } else if (index === 1) {
            featuredImage.src = 'images/flowers-purple-large.jpg';
            imageCaption.textContent = 'Flowers - Purple';
        } else if (index === 2) {
            featuredImage.src = 'images/flowers-red-large.jpg';
            imageCaption.textContent = 'Flowers - Red';
        } else if (index === 3) {
            featuredImage.src = 'images/flowers-yellow-large.jpg';
            imageCaption.textContent = 'Flowers - Yellow';
        } else if (index === 4) {
            featuredImage.src = 'images/flowers-white-large.jpg';
            imageCaption.textContent = 'Flowers - White';
        }
    });
});

featuredImage.src = 'images/flowers-pink-large.jpg';
imageCaption.textContent = 'Flowers - Pink';
