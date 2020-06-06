var allImg = document.getElementsByTagName("img");
var allLinks= document.getElementsByTagName("a");
var modal="";
var num="";
<<<<<<< HEAD


if(localStorage.getItem("pos")>-1 && localStorage.getItem("modal")=="open")
{
  allImg[localStorage.getItem("pos")].click();
}

function display(i) {
  num=i;
  click(allImg[num].src);
=======
function display(i) {
  num=i;
>>>>>>> master
  setModal(num);
  modal= document.getElementById("myModal");
  modal.style.display = "block";

}

function deleteModal() {
  modal.style.display = "none";
  document.getElementById("kk").innerHTML = "";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function setModal(num)
{
  var info="";
  var m="";
  info=allLinks[num].textContent.split(":")
  var price=info[1];
  m+='<div id= "myModal" class="modal">'+
    '<div class="modal-content">'+
    '<span onclick="deleteModal()" class="close">&times;</span>'+
      '<div class="row">'+
        '<div class="column">';
        m+='<img src="'+allImg[num].src+'"> </div>';
        m+='<div class="column">'+
        '<br><h5> Item: '+info[0]+'</h5>'+
        '<h5>Price:'+price+'</h5>'+
        '<h5>Country of Origin: '+allImg[num].alt+'</h5>';
  m+='</div>'+'</div>'+'</div>';
  document.getElementById("modalStore").innerHTML = m;
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function setModal(num)
{
  var info="";
  var m="";
  info=allLinks[num].textContent.split(":")
  var price=info[1];
  m+='<div id= "myModal" class="modal">'+
    '<div class="modal-content">'+
    '<span onclick="deleteModal()" class="close">&times;</span>'+
      '<div class="row">'+
        '<div class="column">';
        m+='<img src="'+allImg[num].src+'"> </div>';
        m+='<div class="column shift">'+
        '<br><h5> Item: '+info[0]+'</h5>'+
        '<h5>Price:'+price+'</h5>'+
        '<h5>Country of Origin: '+allImg[num].alt+'</h5>'+
        '<a class="shiftLink" onclick="location.href='+"'itemPage.html'"+'">View Full Page</a>';
  m+='</div>'+'</div>'+'</div>';
  localStorage.setItem("name",info[0]);
  localStorage.setItem("origin",allImg[num].alt);
  localStorage.setItem("price",price);
  localStorage.setItem("src",allImg[num].src);
  localStorage.setItem("file",location.pathname);
  localStorage.setItem("pos",num);

  document.getElementById("modalStore").innerHTML = m;

}
