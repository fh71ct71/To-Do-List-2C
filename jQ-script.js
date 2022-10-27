$(document).ready(function(){

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

    $("#newListBtn").click(function(){

      $("#taskArea").removeClass("d-none")

    })

    const data=["Sample List","Task 1","Task 2","Task 3","Task 4","Task 5"]

    var i=2
    
    $("#addTask").click(function(){

      $("#nextTask").append('<input type="text" class="form-control-plaintext form-control-sm mt-1" placeholder="Your next-task" style="color: white;">')

      $("input").focus(function(){

        $(this).val(data[i])

        i++
        
      })
      
    })
    
    $("#newListBtn").click(function(){

      $("#title").val(data[0])

      $("#task1").val(data[1])

    })

})

//Tooltip related

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })