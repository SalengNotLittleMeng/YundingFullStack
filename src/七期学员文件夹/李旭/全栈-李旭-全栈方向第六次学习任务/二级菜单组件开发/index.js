(function () {
    //找元素
    var box = document.querySelector('#box');
    var btns = box.querySelectorAll('h1');

    /*
        需求：点击版手风琴效果
            * 点击的时候，让对应的ul显示：高度恢复
    */

    for (var i = 0; i < btns.length; i++) {
        // btns[i].index = i;
        btns[i].istrue = true;
        btns[i].onclick = function () {
            // cons[this.index].style.height = "120px";
            var now = this.nextElementSibling;//获取下一个兄弟元素
            if (this.istrue) {
                //排他
                const children = box.children;
                for (let i = 0; i < children.length; i++) {
                    if (i % 2 === 1) {
                        children[i].style.height = "0px";
                    }
                }

                now.style.height = "120px";
            } else {
                now.style.height = "0px";
            }
            this.istrue = !this.istrue;
        }
    }


})();