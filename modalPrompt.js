var allImg = document.getElementsByTagName("img");
var allLinks= document.getElementsByTagName("a");
var modal="";
var num="";
function display(i) {
  num=i;
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
