

function Fun() {
 
  var tm= document.getElementById('navigation');

  var lists= document.getElementById('items');
  console.log(lists.style.display);
  if(lists.style.display=='' || lists.style.display=='block'){
	 
	  lists.style.display='none'
	  tm.style.minWidth='20px'
	 
	   tm.style.borderLeft='none';
		       tm.style.background='none';
  }
  else if(lists.style.display!=='block'){
	   lists.style.display='block'
	   tm.style.minWidth='300px'
	      tm.style.borderLeft=' 5px solid #9c27b0';
		       tm.style.background=' #d19bd1';
	   
  }
  
 
  
}
/*
nav ul{
	white-space:nowrap;
	max-width:1200px;
	margin:0 auto;
}
nav li{
	width:25%;
	display:inline-block;
	font-size:24px;
}
*/