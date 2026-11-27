$(document).ready(function () {
  const API_URL = "http://localhost:3003/tasks";

  function loadTasks(filter) {
    $("#message").text("Loading tasks...");
    $("#taskList").empty();

    let query = {};
    if (filter === "completed") {
      query.completed = true;
    } else if (filter !== "all") {
      query.priority = filter;
    }

    $.ajax({
      url: API_URL,
      method: "GET",
      data: query,
      dataType: "json"
    })
    .done(function (tasks) {
      $("#message").text("");
      if (tasks.length === 0) {
        $("#message").text("No tasks found.");
        return;
      }

      tasks.forEach(function (task) {
        const item = $("<li>").addClass("task-item");
        const checkbox = $("<input>").attr("type", "checkbox").prop("checked", task.completed);
        checkbox.on("change", function () {
          updateTask(task, checkbox);
        });

        const title = $("<span>").text(task.title);
        if (task.completed) title.addClass("completed");

        const priority = $("<span>").addClass("priority").text(task.priority);
        item.append(checkbox, title, priority);
        $("#taskList").append(item);
      });
    })
    .fail(function () {
      $("#message").text("Could not load tasks. Check JSON Server on port 3003.").addClass("error");
    });
  }

  function updateTask(task, checkbox) {
    const oldValue = task.completed;
    const newValue = checkbox.is(":checked");
    checkbox.prop("disabled", true);

    $.ajax({
      url: API_URL + "/" + task.id,
      method: "PATCH",
      contentType: "application/json",
      data: JSON.stringify({ completed: newValue })
    })
    .done(function () {
      task.completed = newValue;
      loadTasks($("#taskFilter").val());
    })
    .fail(function () {
      checkbox.prop("checked", oldValue).prop("disabled", false);
      $("#message").text("Could not update task. Please try again.").addClass("error");
    });
  }

  $("#taskFilter").on("change", function () {
    loadTasks($(this).val());
  });

  loadTasks("all");
});