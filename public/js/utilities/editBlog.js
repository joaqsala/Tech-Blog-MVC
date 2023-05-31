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

    
    const deleteBlogFormHandler = async (event) => {
        event.preventDefault();

        const blogId = event.target.dataset.blogId;

        const confirmDelete = confirm("Are you sure you want to delete this blog?");

          if (confirmDelete) {
        const response = await fetch(`/api/blogs/${blogId}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to delete blog');
          }
        }
      };
        document.querySelector('#blog-delete-button').addEventListener('click', deleteBlogFormHandler);
    }
);

