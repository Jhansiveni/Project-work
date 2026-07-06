function showCourses() {
  let courses = ["Data Structures", "Algorithms", "Web Development"];
  let list = document.createElement("ul");
  courses.forEach(course => {
    let item = document.createElement("li");
    item.textContent = course;
    list.appendChild(item);
  });
  document.querySelector(".dashboard").appendChild(list);
}

