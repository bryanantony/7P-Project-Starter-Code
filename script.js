$("button").click(function(){
    let variable1 =$(".a").val();
    let variable2 =$(".b").val();
    let variable3 =$(".c").val();
    
    
    
    let  variable4 = variable2 * 365;
    
    $(".fortune-display").append("<p>"+ variable1 + " ,you will eat "+ variable4 +" tacos by 2050."+ "</p>");
                                
                                
                                
                                
                                
                                
    console.log(variable1,variable2,variable3);
});