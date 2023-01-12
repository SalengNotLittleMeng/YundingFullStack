let menu = document.getElementsByTagName("p");
        let now = null;
        for (let i = 0; i < menu.length; i++) {
            menu[i].onclick = function () {
                let par = menu[i].parentNode;
                if (now === i) {
                    if (par.style.height === "90px") {
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
                if (num <= 90) {
                    clearInterval(tem);
                    return;
                }
                par.style.height = num - 1 + "px";
            }, 7);
        }