document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('quality');
    const imageElement = document.getElementById('earth-img');

    selectElement.addEventListener('change', (event) => {
        const selectedQuality = event.target.value;
        let imageUrl = '';

        switch (selectedQuality) {
            case 'earth-144':
                imageUrl = 'https://github.com/vtrnguyen/hosting-image-file/blob/main/gift-project/144_earth.jpg?raw=true';
                break;
            case 'earth-240':
                imageUrl = 'https://github.com/vtrnguyen/hosting-image-file/blob/main/gift-project/240_earth.jpg?raw=true';
                break;
            case 'earth-480':
                imageUrl = 'https://github.com/vtrnguyen/hosting-image-file/blob/main/gift-project/480_earth.jpg?raw=true';
                break;
            case 'earth-1080':
                imageElement.remove();
                window.location.href = "http://127.0.0.1:5500/flowerforher/index.html";
                break;
        }

        imageElement.src = imageUrl;
    });
});