const uploadInput = document.getElementById('uploadInput');
const uploadButton = document.getElementById('uploadButton');
const imageContainer = document.getElementById('imageContainer');

uploadButton.addEventListener('click', () => {
    const file = uploadInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            const imageUrl = reader.result;
            const imageTitle = prompt('Enter image title:');
            if (imageTitle) {
                createImageElement(imageUrl, imageTitle);
            } else {
                alert('Image title cannot be empty!');
            }
        }
    } else {
        alert('Please select an image to upload!');
    }
});

function createImageElement(imageUrl, imageTitle) {
    const imageItem = document.createElement('div');
    imageItem.classList.add('imageItem');

    const img = document.createElement('img');
    img.src = imageUrl;

    const title = document.createElement('p');
    title.textContent = imageTitle;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        imageContainer.removeChild(imageItem);
    });

    imageItem.appendChild(img);
    imageItem.appendChild(title);
    imageItem.appendChild(deleteButton);

    imageContainer.appendChild(imageItem);
}
