var yiji=document.getElementsByClassName('menu');
var cnt=1;
for(let i=0;i<yiji.length;i++){
    document.getElementById(String(i+1)).flag=true;
    yiji[i].onclick=function(){
        if(document.getElementById(String(i+1)).flag){
            if(cnt!==i+1){
                document.getElementById(String(cnt)).style.height='0px';
                document.getElementById(String(cnt)).flag=true;
            }
            setTimeout(()=>{ document.getElementById(String(i+1)).style.height='111px'},100);
            document.getElementById(String(i+1)).flag=false;
        }else{
            document.getElementById(String(i+1)).style.height='0px';
            document.getElementById(String(i+1)).flag=true;
        }
        cnt=i+1;
    }
}