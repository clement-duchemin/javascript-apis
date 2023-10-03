/* 
// Fetch data from the API
fetch('https://dummyjson.com/products/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        // Extract necessary data from the response
        const images = data.images;
        const thumbnail = data.thumbnail;

        // Fill up the HTML with the fetched data for the main image
        const imgElement = document.querySelector('#big-product-pic img');
        imgElement.src = thumbnail; // Setting the thumbnail for the image
        imgElement.parentElement.href = thumbnail; // Setting the href for the anchor element

        const smallPicsContainer = document.querySelector('#small-pics-container'); // Define smallPicsContainer

        // Clearing the container if there are any images before
        smallPicsContainer.innerHTML = '';

        images.forEach(imgSrc => {
            const anchor = document.createElement('a');
            const img = document.createElement('img');

            anchor.href = imgSrc;
            anchor.classList.add('border', 'mx-1', 'rounded-2');
            anchor.setAttribute('data-fslightbox', 'mygalley');
            anchor.setAttribute('data-type', 'image');
            anchor.setAttribute('target', '_blank');

            img.src = imgSrc;
            img.width = 60;
            img.height = 60;
            img.classList.add('rounded-2');

            anchor.appendChild(img);
            smallPicsContainer.appendChild(anchor);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

 */



// Function to create and populate small image elements
function populateSmallPics(images) {
    const smallPicsContainer = document.querySelector('#small-pics-container');
    smallPicsContainer.innerHTML = ''; // Clear any existing images

    images.forEach(imgSrc => {
        const anchor = document.createElement('a');
        const img = document.createElement('img');

        anchor.href = imgSrc;
        anchor.classList.add('border', 'mx-1', 'rounded-2');
        anchor.setAttribute('data-fslightbox', 'mygalley');
        anchor.setAttribute('data-type', 'image');
        anchor.setAttribute('target', '_blank');

        img.src = imgSrc;
        img.width = 60;
        img.height = 60;
        img.classList.add('rounded-2');

        anchor.appendChild(img);
        smallPicsContainer.appendChild(anchor);
    });
}

// Fetch data from the API
fetch('https://dummyjson.com/products/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Extract necessary data from the response
        const images = data.images;
        const thumbnail = data.thumbnail;

        // Fill up the HTML with the fetched data for the main image
        const imgElement = document.querySelector('#big-product-pic img');
        imgElement.src = thumbnail; 
        imgElement.parentElement.href = thumbnail;

        // Call function to populate small images
        populateSmallPics(images);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

