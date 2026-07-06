function editProfile() {
  let name = prompt("Enter new name:");
  if(name) {
    document.querySelector(".profile-card p strong").textContent = name;
    alert("Profile updated!");
  }
}

