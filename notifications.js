function toggleNotifications() {
  let box = document.querySelector(".notifications");
  if(box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

