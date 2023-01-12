let that;
class Menu {
    constructor(id) {
        that = this;
        this.container = document.getElementById(id);
        this.menulist = this.container.querySelectorAll('.menu,.menu--selected');
        this.container.addEventListener('click', this.controller);

    }
    controller(e) {
        let { target } = e;


        that.menulist.forEach(item => {
            if (item != target) {                                //单纯的不是被点击对象
                item.className = "menu"
            }
            if (item != target && item.contains(target)) {        //判断父级
                item.className = "menu--selected"
            }
        })



        target.className = target.className == "menu" ? "menu--selected" : "menu"
    }
}
let menu = new Menu("my-menu")