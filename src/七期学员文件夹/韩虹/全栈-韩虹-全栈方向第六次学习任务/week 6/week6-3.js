 function Show(a,b,c){
     var a = document.getElementById(a)
     var b = document.getElementById(b)
     var c=document.getElementById(c)
            if(a.style.display == "block")
            {
                a.style.display = "none";  
            }
            else
            {
                a.style.display = "block";
                // if(b.style.display=="")
                b.style.display = "none";
                c.style.display = "none";
            }
        }