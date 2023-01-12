function display(i) {
    let ele = document.getElementById(i);
    //使用getElementById()方法获取元素id
    if (ele.style.display == "none") {
        passage1.style.display = "none";
        passage2.style.display = "none";
        passage3.style.display = "none";
        passage4.style.display = "none";
        passage5.style.display = "none";
        ele.style.display = "block";
    }
    else {
        ele.style.display = "none";
    }
    console.log(ele.style.display);
}
