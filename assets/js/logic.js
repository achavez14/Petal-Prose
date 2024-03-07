document.addEventListener('DOMContentLoaded', function() {
    // Function to display blog posts
    function displayBlogPost() {
        const blogPostsContainer = document.getElementById('blogPosts');
        
        // Retrieve blog post data from localStorage
        const blogPostData = JSON.parse(localStorage.getItem('blogPostData'));

        if (blogPostData) {
            // Create HTML elements to display the blog post
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = blogPostData.title;

            const authorElement = document.createElement('p');
            authorElement.textContent = `Posted by: ${blogPostData.author}`;

            const contentElement = document.createElement('p');
            contentElement.textContent = blogPostData.content;

            // Append the elements to the container
            postElement.appendChild(titleElement);
            postElement.appendChild(authorElement);
            postElement.appendChild(contentElement);

            // Append the blog post to the container
            blogPostsContainer.appendChild(postElement);
        } else {
            // Handle case when no blog post data is found in localStorage
            const noPostsMessage = document.createElement('p');
            noPostsMessage.textContent = 'No blog posts available.';
            blogPostsContainer.appendChild(noPostsMessage);
        }
    }

    // Call the function to display blog posts
    displayBlogPost();

    // Form submission event listener
    const form = document.getElementById('blogForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capture form input values
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('username').value;

        // Create an object with form data
        const blogPost = {
            title: title,
            content: content,
            author: author,
        };

        // Store data in localStorage
        localStorage.setItem('blogPostData', JSON.stringify(blogPost));

        // Verify data storage
        console.log('Blog post data stored in localStorage:', localStorage.getItem('blogPostData'));

        // Redirect to another page
        window.location.href = 'another-page.html';
    });

    // Theme toggle functionality
    const handleThemeToggle = () => {
        console.log('Theme toggle button clicked!');
        // Add your theme toggle logic here
        console.log('Theme toggled successfully!');
    };

    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', handleThemeToggle);

    // Back button functionality
    function addBackButtonEventListener() {
        const backButton = document.getElementById('backButton');
        if (backButton) {
            backButton.addEventListener('click', function() {
                // Add functionality for the back button here
                window.location.href = 'index.html'; // Update to the correct URL of your landing page
            });
        } else {
            console.error('Back button element not found');
        }
    }

    // Call the function to add event listener to backButton
    addBackButtonEventListener();
});