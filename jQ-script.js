$(document).ready(function () {

  // version 3

  $("#date").text(new Date().toDateString())

  $("#bgR").click(function () {

    $("body").removeClass("bg-primary")

    $("body").removeClass("bg-secondary")

    $("body").removeClass("bg-warning")

    $("body").removeClass("bg-success")

    $("body").addClass("bg-danger")

  })

  $("#bgG").click(function () {

    $("body").removeClass("bg-secondary")

    $("body").removeClass("bg-primary")

    $("body").removeClass("bg-warning")

    $("body").removeClass("bg-danger")

    $("body").addClass("bg-success")

  })

  $("#bgB").click(function () {

    $("body").removeClass("bg-danger")

    $("body").removeClass("bg-secondary")

    $("body").removeClass("bg-warning")

    $("body").removeClass("bg-success")

    $("body").addClass("bg-primary")

  })

  $("#bgY").click(function () {

    $("body").removeClass("bg-success")

    $("body").removeClass("bg-secondary")

    $("body").removeClass("bg-danger")

    $("body").removeClass("bg-primary")

    $("body").addClass("bg-warning")

  })

  $("#bgGr").click(function () {

    $("body").removeClass("bg-success")

    $("body").removeClass("bg-primary")

    $("body").removeClass("bg-danger")

    $("body").removeClass("bg-warning")

    $("body").addClass("bg-secondary")

  })

  $("#tkR").click(function () {

    $("#tkBG").removeClass("bg-primary")

    $("#tkBG").removeClass("bg-secondary")

    $("#tkBG").removeClass("bg-warning")

    $("#tkBG").removeClass("bg-success")

    $("#tkBG").addClass("bg-danger")

  })

  $("#tkG").click(function () {

    $("#tkBG").removeClass("bg-secondary")

    $("#tkBG").removeClass("bg-primary")

    $("#tkBG").removeClass("bg-warning")

    $("#tkBG").removeClass("bg-danger")

    $("#tkBG").addClass("bg-success")

  })

  $("#tkB").click(function () {

    $("#tkBG").removeClass("bg-danger")

    $("#tkBG").removeClass("bg-secondary")

    $("#tkBG").removeClass("bg-warning")

    $("#tkBG").removeClass("bg-success")

    $("#tkBG").addClass("bg-primary")

  })

  $("#tkY").click(function () {

    $("#tkBG").removeClass("bg-success")

    $("#tkBG").removeClass("bg-secondary")

    $("#tkBG").removeClass("bg-danger")

    $("#tkBG").removeClass("bg-primary")

    $("#tkBG").addClass("bg-warning")

  })

  $("#tkGr").click(function () {

    $("#tkBG").removeClass("bg-success")

    $("#tkBG").removeClass("bg-primary")

    $("#tkBG").removeClass("bg-danger")

    $("#tkBG").removeClass("bg-warning")

    $("#tkBG").addClass("bg-secondary")

  })

  let taskData

  $("#newListBtn").click(function () {

    $("#taskArea").removeClass("d-none")

    $("#listTitle").focus()

  })

  $("#listTitle").keypress(function (e) {

    let key = e.which

    if (key == 13) {

      $("#task").focus()

      titleList = $(this).val()

    }

  })

  $("#task").keypress(function (e) {

    let key = e.which

    if (key == 13) {

      taskData = $(this).val()

      $("#nextTask").text("")

      addTasks(taskData)

      $(this).val("")

      $("#task").attr("placeholder", "Enter your next task here")

    }

  })

})

//Outside of Document

let wholeTasksData = [
  { id: "x1", name: "Firdous", strike: true },
  { id: "x2", name: "Ramees", strike: true },
  { id: "x3", name: "Danish", strike: false }
], titleList = "Sample To-Do", tempVariable

loadTasks()

function loadTasks() {

  $("#listTitle").val(titleList)

  wholeTasksData.forEach((value) => {

    if (value.strike) {

      $("#nextTask").append(`<div class="row">
  <div class="col-1"><input type="checkbox" class="form-check-input" onclick="strikeOver('${value.strike}','${value.id}')" checked></div>
  <div class="col-10"><input type="text"
          class="form-control-plaintext form-control-sm mt-1 taskContent text-decoration-line-through" style="color: white;">
  </div>
  <div class="col-1">
      <div class="btn" onclick="deleteTask('${value.id}')">X</div>
  </div>
</div>`)

      $(".taskContent").last().val(value.name)

    } else {

      $("#nextTask").append(`<div class="row">
  <div class="col-1"><input type="checkbox" class="form-check-input" onclick="strikeOver('${value.strike}','${value.id}')"></div>
  <div class="col-10"><input type="text"
          class="form-control-plaintext form-control-sm mt-1 taskContent" style="color: white;">
  </div>
  <div class="col-1">
      <div class="btn" onclick="deleteTask('${value.id}')">X</div>
  </div>
</div>`)

      $(".taskContent").last().val(value.name)

    }

  })

}

function strikeOver(strikeValue, taskID) {

  $("#nextTask").text("")

  wholeTasksData.forEach((value) => {

    if (value.id == taskID) {

      if (strikeValue == "true") {

        value.strike = false

      } else {

        value.strike = true

      }

    }

  })

  loadTasks()

}

function deleteTask(taskID) {

  $("#nextTask").text("")

  wholeTasksData = wholeTasksData.filter((value) => { return value.id != taskID })

  loadTasks()

}

let i = 3, taskObject

function addTasks(taskAdd) {

  i++

  taskObject = { id: "x" + i, name: taskAdd, strike: false }

  wholeTasksData.push(taskObject)

  loadTasks()

}

//Tooltip related

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {

  return new bootstrap.Tooltip(tooltipTriggerEl)

})