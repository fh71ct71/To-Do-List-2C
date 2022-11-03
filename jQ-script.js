$(document).ready(function(){

    // version 2

    $("#date").text(new Date().toDateString())

    $("#bgR").click(function(){

      $("body").removeClass("bg-primary")

      $("body").removeClass("bg-secondary")

      $("body").removeClass("bg-warning")

      $("body").removeClass("bg-success")
      
      $("body").addClass("bg-danger")

    })

    $("#bgG").click(function(){

      $("body").removeClass("bg-secondary")

      $("body").removeClass("bg-primary")

      $("body").removeClass("bg-warning")

      $("body").removeClass("bg-danger")

      $("body").addClass("bg-success")

    })

    $("#bgB").click(function(){

      $("body").removeClass("bg-danger")

      $("body").removeClass("bg-secondary")

      $("body").removeClass("bg-warning")

      $("body").removeClass("bg-success")

      $("body").addClass("bg-primary")

    })

    $("#bgY").click(function(){

      $("body").removeClass("bg-success")

      $("body").removeClass("bg-secondary")

      $("body").removeClass("bg-danger")

      $("body").removeClass("bg-primary")

      $("body").addClass("bg-warning")

    })

    $("#bgGr").click(function(){

      $("body").removeClass("bg-success")

      $("body").removeClass("bg-primary")

      $("body").removeClass("bg-danger")

      $("body").removeClass("bg-warning")

      $("body").addClass("bg-secondary")

    })

    $("#tkR").click(function(){

      $("#tkBG").removeClass("bg-primary")

      $("#tkBG").removeClass("bg-secondary")

      $("#tkBG").removeClass("bg-warning")

      $("#tkBG").removeClass("bg-success")

      $("#tkBG").addClass("bg-danger")

    })

    $("#tkG").click(function(){

      $("#tkBG").removeClass("bg-secondary")

      $("#tkBG").removeClass("bg-primary")

      $("#tkBG").removeClass("bg-warning")

      $("#tkBG").removeClass("bg-danger")

      $("#tkBG").addClass("bg-success")

    })

    $("#tkB").click(function(){

      $("#tkBG").removeClass("bg-danger")

      $("#tkBG").removeClass("bg-secondary")

      $("#tkBG").removeClass("bg-warning")

      $("#tkBG").removeClass("bg-success")

      $("#tkBG").addClass("bg-primary")

    })

    $("#tkY").click(function(){

      $("#tkBG").removeClass("bg-success")

      $("#tkBG").removeClass("bg-secondary")

      $("#tkBG").removeClass("bg-danger")

      $("#tkBG").removeClass("bg-primary")

      $("#tkBG").addClass("bg-warning")

    })

    $("#tkGr").click(function(){

      $("#tkBG").removeClass("bg-success")

      $("#tkBG").removeClass("bg-primary")

      $("#tkBG").removeClass("bg-danger")

      $("#tkBG").removeClass("bg-warning")

      $("#tkBG").addClass("bg-secondary")

    })

    let wholeTasksData=[],titleList,taskData

    $("#newListBtn").click(function(){

      $("#taskArea").removeClass("d-none")

      $("#listTitle").focus()
          
    })

    $("#listTitle").keypress(function(e){

      let key=e.which

      if(key==13){

        $("#task").focus()

        titleList=$(this).val()

      }

    })

    $("#task").keypress(function(e){

      let key=e.which

      if(key==13){

        taskData=$(this).val()

        $("#nextTask").append('<input type="text" class="form-control-plaintext form-control-sm mt-1 taskContent" style="color: white;">')

        $(".taskContent").last().val(taskData)

        wholeTasksData.push(taskData)
        
        $(this).val("")

        $("#task").attr("placeholder", "Enter your next task here")

      }
    
    })
    console.log(wholeTasksData)
   
})

//Tooltip related

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })