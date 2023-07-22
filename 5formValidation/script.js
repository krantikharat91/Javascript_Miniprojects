let username = document.getElementById("username");
let password = document.getElementById("password");
let flag =1;

function validateForm()
{
    //validation for username
   if(username.value == "")
   {
        document.getElementById("userError").innerHTML = "User name is empty";
        flag = 0;
   }
   else if(username.value.length < 3)
   {
        document.getElementById("userError").innerHTML = "User name required min 3 char";
        flag = 0;
   }
   else
   {
        document.getElementById("userError").innerHTML = "";
        flag =1;
   }
   //validation for password
   if(password.value == "")
   {
        document.getElementById("passError").innerHTML = "password is empty";
        flag = 0;
   }
   else
   {
        document.getElementById("passError").innerHTML = "";
        flag =1;
   }
   //final value validation
   if(flag)
   {
        return true;
   }
   else
   {
        return false;
   }
   
}