//document load eventhandler//
document.addEventListener("DOMContentLoaded", () => {
    const updateBlogFormHandler = async (event) => {
    event.preventDefault();

    // Get the updated values from the input fields
    const blogTitle = document.querySelector('#blog-title-input').value.trim();
    const blogContent = document.querySelector('#blog-content-input').value.trim();
    const blogUpdateButton = document.querySelector("#blog-update-button");
    const blogId = blogUpdateButton.dataset.blogId;
    
    console.log(blogTitle);
    console.log(blogContent);
    console.log('blogId', blogId);

    const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        body: JSON.stringify({ blogId, blogTitle, blogContent }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    };
    document.querySelector('#blog-update-button').addEventListener('click', updateBlogFormHandler);

});

