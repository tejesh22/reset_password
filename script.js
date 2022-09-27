function checkPassword(){
    let password = document.getElementById("password").value;
    let reenterpassword = document.getElementById("reenterpassword").value;
    console.log(" Password:", password,'\n',"reenterpassword:",reenterpassword);
    let message = document.getElementById("message");
        if(password.length != 0 && password.length>= 8){
            if(password == reenterpassword){
                location.href = "next.html";
            
            }
             else{
                message.textContent = "Password don't match";
            
                }
        }
        else if(password.length < 8){
            message.textContent = "Password size less than 8";

         }
        else{
            alert("Password can't be empty!");
            message.textContent = "";
            }
}