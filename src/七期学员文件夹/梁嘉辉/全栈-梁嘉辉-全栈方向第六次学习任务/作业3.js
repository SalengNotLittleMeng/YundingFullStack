function hit(judge){
    var judge = document.getElementById(judge);
    if (judge.style.display == "block") {
      judge.style.display = "none";
    } else {
      passage_1.style.display = "none";
      passage_2.style.display = "none";
      passage_3.style.display = "none";
      passage_4.style.display = "none";
      passage_5.style.display = "none";
      judge.style.display = "block";
    }
}