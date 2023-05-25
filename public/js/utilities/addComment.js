
  document.addEventListener("DOMContentLoaded", function() {
    const commentButton = document.getElementById("comment-button");
    const commentModal = new bootstrap.Modal(document.getElementById("commentModal"));

    commentButton.addEventListener("click", function() {
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
  });
