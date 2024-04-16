const options = document.querySelectorAll('.option');
const finishButton = document.querySelector('.finish');

// Disable finish button initially
finishButton.disabled = true;

options.forEach(option => {
  option.addEventListener('click', () => {
    const checkbox = option.querySelector('input[type="checkbox"]');
    // Toggle the checkbox state
    checkbox.checked = !checkbox.checked;

    // Toggle visibility of the text for the clicked option
    const optionText = option.querySelector('.option-text');
    optionText.style.display = checkbox.checked ? 'block' : 'none';

    // Check if any option is selected
    const anyOptionSelected = Array.from(options).some(option => {
      return option.querySelector('input[type="checkbox"]').checked;
    });

    // Enable finish button and change its color if any option is selected
    if (anyOptionSelected) {
      finishButton.disabled = false;
      finishButton.classList.add('selected');
    } else {
      finishButton.disabled = true;
      finishButton.classList.remove('selected');
    }

    // Toggle the selected class based on whether the checkbox is checked
    option.classList.toggle('selected', checkbox.checked);

    // Add text and link if any option is selected
    if (anyOptionSelected) {
      document.getElementById('anything-else').textContent = "Anything else? You can select multiple,";
      document.getElementById('press-return').innerHTML = "or Press <a href='profile.html'><b>Return<b></a>";
    } else {
      document.getElementById('anything-else').textContent = "";
      document.getElementById('press-return').innerHTML = "";
    }
  });
});

finishButton.addEventListener('click', event => {
  // Check if any option is selected
  const anyOptionSelected = Array.from(options).some(option => {
    return option.querySelector('input[type="checkbox"]').checked;
  });

  // If no option is selected, prevent the default click behavior
  if (!anyOptionSelected) {
    event.preventDefault();
    console.log("No option is selected. Please select at least one option before finishing.");
  } else {
    // Route to main.html if at least one option is selected
    window.location.href = 'main.html';
  }
});

