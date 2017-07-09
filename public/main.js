console.log("connected");

(function() {
  var likeCount = document.querySelectorAll(".likeCount");
  console.log(likeCount);
  likeCount.forEach(el => {
      console.log(el.innerHTML);
    if (el.innerHTML !== "Likes: 0") {
      el.classList.remove("hidden");
    }
  });
})();
