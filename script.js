// Function to open file dialog when the avatar placeholder is clicked
function openFile(event) {
  document.getElementById('avatar-input').click();
}

// Function to handle selection of default image
function selectDefaultImage(imageName) {
  const selectedImageContainer = document.getElementById('selected-image-container');
  selectedImageContainer.innerHTML = `<img src="./styles/images/${imageName}" alt="Selected Image" class="selected-image">`;
  document.getElementById('next-btn').disabled = false;
}

// Function to handle file input change (when user selects an image from their device)
document.getElementById('avatar-input').addEventListener('change', function(event) {
  const selectedImage = event.target.files[0];
  const selectedImageContainer = document.getElementById('selected-image-container');

  // Validate file type (allow only images)
  const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (!validImageTypes.includes(selectedImage.type)) {
    alert('Please select a valid image file (JPEG, PNG, or GIF)');
    return;
  }

  // Create a FileReader instance to read the selected image file
  const reader = new FileReader();

  // Define callback function to execute when FileReader finishes loading the image
  reader.onload = function(event) {
    const avatarPlaceholder = document.querySelector('.avatar-placeholder');
    avatarPlaceholder.style.backgroundImage = `url('${event.target.result}')`;
    avatarPlaceholder.style.backgroundSize = 'cover';
    avatarPlaceholder.style.backgroundPosition = 'center';
    document.getElementById('next-btn').disabled = false;
  };

  // Read the selected image file as a data URL
  reader.readAsDataURL(selectedImage);
});

// Function to handle showing default images when the button is clicked
document.getElementById('default-images-btn').addEventListener('click', function() {
  const defaultImagesContainer = document.querySelector('.default-images');
  defaultImagesContainer.style.display = 'block';
});
// Function to handle displaying selected image from default images in the avatar placeholder
function displaySelectedDefaultImage(imageUrl) {
  const selectedImageContainer = document.getElementById('selected-image-container');
  selectedImageContainer.innerHTML = `<img src="${imageUrl}" alt="Selected Image" class="selected-image">`;
  document.getElementById('next-btn').disabled = false;
  
  const avatarPlaceholder = document.querySelector('.avatar-placeholder');
  avatarPlaceholder.style.backgroundImage = `url('${imageUrl}')`;
  avatarPlaceholder.style.backgroundSize = 'cover';
  avatarPlaceholder.style.backgroundPosition = 'center';
}

// Function to handle Next button click
document.getElementById('next-btn').addEventListener('click', function() {
  // Route to bringsto.html
  window.location.href = 'bringsto.html';
});
