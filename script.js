$('.saveBtn').on('click', function() {
    var text = $(this).siblings('.text').val();
    var time =$(this).parent().attr('id');
   
    //save text and time in localstorage
    localStorage.setItem(time, text)
})

function hour(){
    var currentHour = moment().hour()
    
    // need to loop over time blocks look into jquery loops.
    $( ".row" ).each(function( ) {
        var hour = $(this).attr('id')
        var text = $(this).children(".text")

         //need to convert the id from a string to a Int
         hour = parseInt(hour)

        //need a conditional (if statement) that checks i the time block is past  the current hour, equal the current hour, or after the current hour and we need to add classes past, present, future. 
        if (hour === currentHour) {
            text.addClass("present")
          } else if (hour < currentHour) {
              text.addClass("past")
          } else {
              text.addClass("future")
          }  
      })
   

}

hour()


$("#9 .text").val(localStorage.getItem("9"))
$("#10 .text").val(localStorage.getItem("10"))
$("#11 .text").val(localStorage.getItem("11"))
$("#12 .text").val(localStorage.getItem("12"))
$("#13 .text").val(localStorage.getItem("13"))
$("#14 .text").val(localStorage.getItem("14"))
$("#15 .text").val(localStorage.getItem("15"))
$("#16 .text").val(localStorage.getItem("16"))
$("#17 .text").val(localStorage.getItem("17"))

$("#currentDay").text(moment().format("MMM Do YYYY"))