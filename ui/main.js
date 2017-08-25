//Now we will use the button to add the functionality
var button=getElementById('counter');
var counter=0;
button.onclick=function(){
  //Make a request to the counter endpoint
  
  //Capture the enpoint in the variabe
  
  //Render the variable in the correct span
  counter=counter+1;
  var span=getElementById('count');
  span.innerHtml=counter.toString(); 
};