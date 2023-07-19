//点击时字体样式改变
let selected = document.getElementById("select").children;
for (let i = 0; i < selected.length - 1; i++) {
    selected[i].onclick = function() {
        for (let j = 0; j < selected.length; j++) {
            if (selected[j].className == 'selected')
                selected[j].className = '';
        }
        selected[i].className = 'selected';
    }
}

//控制文本域大小
let txt = document.getElementById("txt");
txt.onkeyup = function() {
    this.size = (this.value.length > 2 ? this.value.length : 2);
}