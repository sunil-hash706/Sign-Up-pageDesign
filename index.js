fn=()=>{
    var pss = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var a;
    console.log(a);
    if(pss.length<6){
        document.getElementById("shortPassword").style.visibility="visible";
        document.getElementById("noName").style.visibility="hidden";
        document.getElementById("noEmail").style.visibility="hidden";
    }
   else if(name==""){
        document.getElementById("noName").style.visibility="visible";
        document.getElementById("noEmail").style.visibility="hidden";
        document.getElementById("shortPassword").style.visibility="hidden";
    }
   else if(email==""){
        document.getElementById("noEmail").style.visibility="visible";
        document.getElementById("noName").style.visibility="hidden";
        document.getElementById("shortPassword").style.visibility="hidden";
    }

    else{
        document.getElementById("shortPassword").style.visibility="hidden";
        document.getElementById("noEmail").style.visibility="hidden";
        document.getElementById("noName").style.visibility="hidden";
        document.getElementById("signedUp").style.visibility="visible";
    }
}