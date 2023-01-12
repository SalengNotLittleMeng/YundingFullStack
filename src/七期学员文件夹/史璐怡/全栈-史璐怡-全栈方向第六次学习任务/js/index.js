
let box = document.getElementsByClassName("box_");
for (let i = 0; i < box.length; i++) {
    box[i].onclick = function () {
        if (box[i].style.height == "106px") {
            box[i].style.height = "34px"
        }
        else {
            box[0].style.height = "34px"
            box[1].style.height = "34px"
            box[2].style.height = "34px"
            box[3].style.height = "34px"
            box[4].style.height = "34px"
            box[i].style.height = "106px"
        }
    }
}