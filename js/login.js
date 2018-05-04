// window.parentPage = true;
function validate()
        {
            var username = document.loginform.id.value;
            var password = document.loginform.pwd.value;
                if(username == 'solarproject@gmail.com' && password == 'solarproject')
                    {
                    	document.cookie="login";
                       return true;
                    }
                else
                    {
                    	alert ("wrong credential");
                    return false;
                    
                    }
        } 