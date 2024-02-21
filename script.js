$(document).ready(function(){
    $("#signup-form").validate({
        fname:{
            required:true   //we cannot move without typing that value
        }
    })
})