// Wait for html/handlebars doc to be loaded before making/adding event listeners
// ensure that the code execution happens only when the DOM is ready and accessible
document.addEventListener("DOMContentLoaded", function() {
      const commentButton = document.getElementById("comment-button");
      const commentModal = new bootstrap.Modal(document.getElementById("commentModal"));
      const commentForm = document.getElementById("commentForm");

      commentButton.addEventListener("click", function() {
        const blogId = commentButton.dataset.blogId; // Get the blog ID from data attribute
        commentForm.dataset.blogId = blogId; // Store the blog ID in the comment form's data attribute
        commentModal.show();
      });

    const closeModalButton = document.querySelector("#commentModal .btn-close");
    closeModalButton.addEventListener("click", function() {
      commentModal.hide();
    });

    const closeModalButton2 = document.querySelector("#closer");
    closeModalButton2.addEventListener("click", function() {
      commentModal.hide();
    });

    console.log(commentForm)
    
    commentForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
        console.log("has been submitted")
      // Get the comment content entered by the user
      const commentInput = document.getElementById("commentInput");
      const comment_content = commentInput.value.trim();
      const blogId = commentForm.dataset.blogId; // Get the blog ID from the comment form's data attribute
        

      const response = await fetch('/api/blogs/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment_content, blog_id: blogId })
        });
    
        if (response.status === 200) {
        alert('Comment added successfully!');
    // Reset the form fields
      commentInput.value = "";

      // Hide the modal
      commentModal.hide();
        location.replace('/blogs/:id');
        } else {
        alert('Failed to add comment');
        }

    });
  });
