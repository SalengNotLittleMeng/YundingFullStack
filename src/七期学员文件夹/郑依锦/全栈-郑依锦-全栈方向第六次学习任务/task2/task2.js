function display(element) {
  let ele = document.getElementById(element);
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
  // if (ele.style.display == "block") {
  //   ele.style.display = "none";
  // }
  console.log(ele);
  console.log(ele.style.display);
}
