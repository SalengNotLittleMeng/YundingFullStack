const time=document.getElementById('time_box');
let user_info=document.getElementById('user_info');
const sign=document.getElementById('sign');
const get=document.getElementById('get');
const pat=/[a-zA-Z0-9_-]/;
const account=document.getElementById('account');
const password=document.getElementById('password');
let flag=0;
const xhr=new XMLHttpRequest();
xhr.open("GET","https://api.reginvolver.cn/common/time");
xhr.send();
xhr.onload=()=>{
    if(xhr.status==200){
        console.log(xhr.response);
        time.textContent='当前时间：'+xhr.response;
    }
};
get.onclick=()=>{
    if(flag===0){
        xhr.open("GET","https://api.reginvolver.cn/user/list");
        xhr.send();
        xhr.onload=()=>{
            if(xhr.status==200){
                const result=JSON.parse(xhr.response);
                console.log(xhr.response);
                for(let value of result.data.records){
                    user_info.insertAdjacentHTML("beforeend","<li>"+value.username+"</li>");
                }
                flag=1;
            }
        };
    }
};
sign.onclick=()=>{
    if(pat.test(account.value)&&pat.test(password.value)){
        fetch("https://api.reginvolver.cn/user/register",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({password:password.value+"",username:account.value})
        });
    }else{
        alert('注册信息不完整');
    }
};