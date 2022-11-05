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

let wholeTasksData = [], titleList, tempVariable

function loadTasks() {

  $("#listTitle").val(titleList)

  wholeTasksData.forEach((value) => {

    $("#nextTask").append(`<div class="row">
  <div class="col-1"><input type="checkbox" class="form-check-input"></div>
  <div class="col-10"><input type="text"
          class="form-control-plaintext form-control-sm mt-1 taskContent" style="color: white;">
  </div>
  <div class="col-1">
      <div class="del btn" onclick="deleteTask('${value}')">X</div>
  </div>
</div>`)

    $(".taskContent").last().val(value)

  })

}

function deleteTask(taskName) {

  tempVariable = taskName

  $("#nextTask").text("")

  wholeTasksData = wholeTasksData.filter((value) => { return value != tempVariable })

  loadTasks()

}

function addTasks(taskAdd) {

  wholeTasksData.push(taskAdd)

  loadTasks()

}

//Tooltip related

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {

  return new bootstrap.Tooltip(tooltipTriggerEl)

})