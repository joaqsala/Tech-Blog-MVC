document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
  const newBlogFormHandler = async (event) => {
    event.preventDefault();

    console.log("entry submitted")
    const blogTitle = document.querySelector('#blog-title').value.trim();
    const blogContent = document.querySelector('#blog-content').value.trim();

    if (blogTitle && blogContent) {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ blogTitle, blogContent }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to add blog');
      }
    } else {
      alert("Please fill in the title and blog fields.")
    }
  };

  document.querySelector('#blog-submit').addEventListener('click', newBlogFormHandler);
});console.log('Event listener added');
