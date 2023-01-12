var flag = -1
var arr = [], clickArea = []
var box = document.getElementById('box')
for (let i = 1; i < 6; i++) {
    arr[i - 1] = document.getElementById(`btn${i}`)
    clickArea[i-1]=document.getElementById(`clickArea${i}`)
}
/*获取五个一级菜单*/
for (let i = 0; i < 5; i++) {
    clickArea[i].onclick = function () {
        /*如果点击时已经有其他菜单展开（flag不为-1），则收回那个菜单，展开点击的菜单*/
        if (flag != -1&&flag!=i) {
            arr[flag].style.height = '40px'
            arr[i].style.height = '190px'
            box.style.height='550px'
            flag = i
        }
        /*如果第二次点击同一菜单，则缩回该菜单，此时没有菜单展开，flag=-1*/
        else if (flag == i) {
            arr[i].style.height = '40px'
            box.style.height = '400px'
            flag = -1
        }
        /*没有菜单展开时，直接展开点击的菜单，并用flag记录展开菜单的索引*/
        else {
            arr[i].style.height = '190px'
            box.style.height = '550px'
            flag = i
        }
    }
}