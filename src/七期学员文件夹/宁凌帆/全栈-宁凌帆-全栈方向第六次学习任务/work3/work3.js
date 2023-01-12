let that;
class Menu{
    constructor(id){
        that = this
        this.container = document.getElementById(id)
        this.menulists = this.container
            .querySelectorAll('.menu-list__item, menu-list1__item, .menu-list__item--selected')
        this.container.addEventListener("click",this.controller)
    }

    controller(e){
        let target = e.target
        that.menulists.forEach(item=>{
            if(item !=target){
                item.className = "menu-list__item"
            }
            if(item !=target && item.contains(target)){
                item.className = "menu-list__item--selected"
            }
        })
        target.className = target.className == "menu-list__item"?"menu-list__item--selected":"menu-list__item"
    }
}

let menu = new Menu("my-menu")