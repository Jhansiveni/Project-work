function validateLogin() {
  let username = document.querySelector("input[placeholder='Username']").value;
  let password = document.querySelector("input[placeholder='Password']").value;

  if(username === "" || password === "") {
    alert("Please enter both username and password!");
    return false;
  } else {
    alert("Login successful!");
    return true;
  }
}


