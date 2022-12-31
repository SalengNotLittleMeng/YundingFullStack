const box1 = document.getElementsByClassName("box1")[0]
const box2 = document.getElementsByClassName("box2")[0]
const box3 = document.getElementsByClassName("box3")[0]
const box4 = document.getElementsByClassName("box4")[0]

let Box = [box1, box2, box3, box4]

const box11 = document.getElementsByClassName("box11")[0]
const box21 = document.getElementsByClassName("box21")[0]
const box31 = document.getElementsByClassName("box31")[0]
const box41 = document.getElementsByClassName("box41")[0]

const box12 = document.getElementsByClassName("box12")
const box22 = document.getElementsByClassName("box22")
const box32 = document.getElementsByClassName("box32")
const box42 = document.getElementsByClassName("box42")

let box = [box12, box22, box32, box42]

function judge(ini) {
    for (let j = 0; j < 4; j++) {
        if (j === ini) {
            continue;
        }
        else if (Box[j].clientHeight === 830) {
            Box[j].classList.toggle("boxHeight")
            for (let i = 0; i < 3; i++) {
                box[j][i].classList.toggle("inBoxHeight")
                box[j][i].classList.toggle("inBoxText")

            }
        }
    }
}

box11.onclick = function () {
    box1.classList.toggle("boxHeight")
    judge(0)
    for (let i = 0; i < 3; i++) {
        box12[i].classList.toggle("inBoxHeight")
        box12[i].classList.toggle("inBoxText")
    }
}
box21.onclick = function () {
    box2.classList.toggle("boxHeight")
    judge(1)
    for (let i = 0; i < 3; i++) {
        box22[i].classList.toggle("inBoxHeight")
        box22[i].classList.toggle("inBoxText")
    }
}
box31.onclick = function () {
    box3.classList.toggle("boxHeight")
    judge(2)
    for (let i = 0; i < 3; i++) {
        box32[i].classList.toggle("inBoxHeight")
        box32[i].classList.toggle("inBoxText")
    }
}
box41.onclick = function () {
    box4.classList.toggle("boxHeight")
    judge(3)
    for (let i = 0; i < 3; i++) {
        box42[i].classList.toggle("inBoxHeight")
        box42[i].classList.toggle("inBoxText")
    }
}