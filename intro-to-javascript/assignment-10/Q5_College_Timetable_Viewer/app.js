const API_URL = "http://localhost:3005/timetable";
const daySelect = document.getElementById("daySelect");
const timetable = document.getElementById("timetable");
const message = document.getElementById("message");

async function loadTimetable(day) {
  message.textContent = "Loading timetable...";
  timetable.innerHTML = "";

  try {
    const response = await fetch(API_URL + "?day=" + encodeURIComponent(day));
    if (!response.ok) throw new Error("Request failed");

    const classes = await response.json();
    message.textContent = "";

    if (classes.length === 0) {
      message.textContent = "No classes today.";
      return;
    }

    classes.forEach(function (classItem) {
      const card = document.createElement("article");
      card.className = "class-card";

      const subject = document.createElement("h3");
      subject.textContent = classItem.subject;
      const faculty = document.createElement("p");
      faculty.textContent = "Faculty: " + classItem.faculty;
      const time = document.createElement("p");
      time.textContent = "Time: " + classItem.time;

      card.append(subject, faculty, time);
      timetable.appendChild(card);
    });
  } catch (error) {
    message.textContent = "Could not load timetable. Check JSON Server on port 3005.";
    message.className = "error";
  }
}

daySelect.addEventListener("change", function () {
  loadTimetable(daySelect.value);
});

loadTimetable(daySelect.value);