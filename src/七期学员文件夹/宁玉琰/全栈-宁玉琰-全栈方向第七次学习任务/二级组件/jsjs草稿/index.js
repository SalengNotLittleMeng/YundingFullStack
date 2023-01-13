/*let that;
class Menu {
    constructor(id) {
        that = this;
        this.container = document.getElementById(id);
        this.menus = this.container.querySelectorAll('.menu,.menu--selected');
        this.container.addEventListener("click", this.controller);
    }

    init(target) {
        this.menus.forEach(item => {
            if (item != target) {
                item.bool = false;
            }
            if (item != target && !item.contains(target)) {
                item.bool = true;
            }
        })
    }
}
controller(e)
    let target=e.target;
    that.init(target);
    target.bool=!target.bool;
    that.menus.forEach(item => {
        item.className=item.bool ? "menu--selected" : "menu";

})

let menu=new Menu("my-menu")*/
/*let that;
class Menu {
    constructor(id) {
        that = this;
        this.container = document.getElementById(id);
        this.menulists = this.container.querySelectorAll('.menu, .menu--selected');
        this.container.addEventListener("click", this.controller)
    }
    controller(e) {
        let target = e.target;
        that.menulists.forEach(item => {
            if (item != target) { item.className = "menu" }
            if (item != target && item.contains(target)) { item.className = "menu--selected" }
        })
        target.className = target.className == "menu" ? "menu--selected" : "menu"
    }
}
let menu = new Menu("my-menu")*/

/*class Menu {
    constructor(id) {
        
        this.container = document.getElementById(id);
        this.menulist=this.container.querySelectorAll('menu,menu--selected');
        this.container.addEventListener('click',this.controller);
console.log(11111);
    }
    controller(e){
        let {target}= e;
       target.className = target.className == "menu" ? "menu--selected" : "menu"
    }
}
let menu=new Menu("my-menu")*/