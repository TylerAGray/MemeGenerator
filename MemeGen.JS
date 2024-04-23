document.addEventListener('DOMContentLoaded', function() {
    // Get the meme form and meme container elements
    const memeForm = document.getElementById('memeForm');
    const memeContainer = document.getElementById('memeContainer');

    // Event listener for form submission
    memeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get values from form inputs
        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        const imageUrl = document.getElementById('imageUrl').value;

        // Validate input fields
        if (!topText || !bottomText || !imageUrl) {
            alert('Please fill in all fields');
            return;
        }

        // Create a meme element
        const meme = createMemeElement(topText, bottomText, imageUrl);
        memeContainer.appendChild(meme); // Append meme to container

        // Clear input fields after submission
        memeForm.reset();
    });

    // Event delegation to handle meme deletion
    memeContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('meme')) {
            event.target.remove(); // Remove clicked meme
        }
    });

    // Function to create a meme element
    function createMemeElement(topText, bottomText, imageUrl) {
        const meme = document.createElement('div'); // Create div for meme
        meme.classList.add('meme'); // Add 'meme' class to div

        // Create img element for meme image and set its source
        const img = document.createElement('img');
        img.src = imageUrl;
        meme.appendChild(img); // Append image to meme div

        // Create div for top text and set its content
        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add('topText'); // Add 'topText' class to div
        topTextDiv.innerText = topText; // Set text content
        meme.appendChild(topTextDiv); // Append top text div to meme div

        // Create div for bottom text and set its content
        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('bottomText'); // Add 'bottomText' class to div
        bottomTextDiv.innerText = bottomText; // Set text content
        meme.appendChild(bottomTextDiv); // Append bottom text div to meme div

        return meme; // Return the created meme element
    }
});

