document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter (e.g., ?image=1)
    const params = new URLSearchParams(window.location.search);
    const imageParam = params.get('image');
  
    // Define details for each image
    const imageDetails = {
      '1': {
        title: 'corner defect LED',
        src: 'imagas/ledB.png',
        description: 'Complete details about Image 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      '2': {
        title: 'Image 2 Title',
        src: 'image2.jpg',
        description: 'Complete details about Image 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      '3': {
        title: 'Image 3 Title',
        src: 'image3.jpg',
        description: 'Complete details about Image 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      '4': {
        title: 'Image 4 Title',
        src: 'image4.jpg',
        description: 'Complete details about Image 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    };
  
    // If a valid image parameter is passed, update the details
    const details = imageDetails[imageParam];
    if (details) {
      document.getElementById('image-title').textContent = details.title;
      document.getElementById('image-full').src = details.src;
      document.getElementById('image-full').alt = details.title;
      document.getElementById('image-description').textContent = details.description;
    } else {
      document.getElementById('image-title').textContent = 'Image Not Found';
      document.getElementById('image-description').textContent = 'No details available for this image.';
    }
  });
  