 function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		
		else
		{
	alert('Thank You for Login & You are Redirecting to Campuslife Website');
  //Redirecting to other page or webste code or you can set your own html page.
       <a class="more_btn" href="TrafficCop.html">
	 
			}
	}		
	