var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2700);
}

var myIndex1 = 0;
textname();

function textname() { 
    var j;
    var a = document.getElementsByClassName("txt");
    for (j = 0; j < a.length; j++) {
      a[j].style.display = "none";
    }
    myIndex1++;
    if (myIndex1 > a.length) {myIndex1 = 1}
    a[myIndex1-1].style.display = "block";
    setTimeout(textname, 2700);
}