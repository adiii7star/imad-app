//Now we will use the button to add the functionality
var button=document.getElementById('counter');

button.onclick=function(){
    
  //Create a Request Object
  
  var request=new XMLHttpRequest();
  
  //Capture the enpoint in the variable
  
  request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE){
          //Take Some Action
          if(request.status===200){
              var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();             
          }
      }
      //None
  }
  //Render the variable in the correct span
  request.open('GET' , 'http://adityasbodkhe.imad.hasura-app.io/counter' ,true);
  request.send(null);
  
};