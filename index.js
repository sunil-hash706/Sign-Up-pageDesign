fn=()=>{
    var pss = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var a;
    console.log(a);
    if(pss.length<6){
        document.getElementById("shortPassword").style.visibility="visible";
    }
   else if(name==""){
        console.log("hii");
        document.getElementById("noName").style.visibility="visible";
    }
   else if(email==""){
        document.getElementById("noEmail").style.visibility="visible";
    }

    else{
        document.getElementById("shortPassword").style.visibility="hidden";
        document.getElementById("noEmail").style.visibility="hidden";
        document.getElementById("noName").style.visibility="hidden";
        document.getElementById("signedUp").style.visibility="visible";
    }
}