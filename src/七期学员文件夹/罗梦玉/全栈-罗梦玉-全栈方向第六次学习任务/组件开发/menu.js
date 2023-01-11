//参考网上的相关例子完成的...

let menu = document.getElementsByTagName("span");//获取所有的span
let now = null;//记录上次被点击的盒子

//利用for循环在每一个span的onclick响应函数中通过parentNode获取其对应的父盒子，使其父盒子的高度变为其scrollHeight的值
//若now不等于当前点击的span，则获取now的父盒子，令其高度变为span的高度，然后令当前点击的span展开
//若now等于当前点击的span，获取其父盒子的高度，如果等于span的高度，则令其高度变为scrollHeight的值，否则令其变为span的高度
//设置定时器，在准备将父盒子高度增加或减少的时候调用，当父盒子高度达到span的高度或达到scrollHeight，就关闭定时器
for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = function () {
        let par = menu[i].parentNode;
            if (now === i) {
                if (par.style.height === "80px") {
                    open(par);
                }
                else {
                    close(par);
                }
            }
            else {
                if (now !== null) {
                    close(menu[now].parentNode);
                }
                open(par);
                now = i;
            }
    }
}

function open(par) {
    let tem = setInterval(() => {
        let num = par.offsetHeight;
        if (num >= par.scrollHeight) {
            clearInterval(tem);
        }
        par.style.height = num + 1 + "px";
    }, 7);
}

function close(par) {
    let tem = setInterval(() => {
        let num = par.offsetHeight;
        if (num <= 43) {
            clearInterval(tem);
            return;
        }
        par.style.height = num - 1 + "px";
    }, 7);
}