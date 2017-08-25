//Now we will use the button to add the functionality
var button=document.getElementById('counter');

button.onclick=function(){
  //Create a Request Object
  var request=new XMLHttpRequest();
  //Capture the enpoint in the variabe
  request.onreadystate=function(){
      if(request.readystate===XMLhttpRequest.DONE){
          //Take Some Action
          if(request.status===200){
              var counter=request.responsetext;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();             
          }
      }
      //None
  }
  //Render the variable in the correct span
  request.open('GET' , 'http://adityasbodkhe.imad.hasura-app.io' ,true);
  request.send(null);
  
};