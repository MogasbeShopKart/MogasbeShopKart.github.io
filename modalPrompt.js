
var allImg = document.getElementsByTagName("img");
var allLinks= document.getElementsByTagName("a");
var modal="";
var num="";
var params = new URLSearchParams(window.location.search);
var link =history.state;

if(link!=null)
{
  var ii=0;
  for(ii=0;ii<allImg.length;ii++)
  {
    if(link==allImg[ii].src)
    {
      allImg[ii].click();
      break;
    }
  }
}

function display(i) {
  num=i;
  click(allImg[num].src);
  setModal(num);
  modal= document.getElementById("myModal");
  modal.style.display = "block";

}

function deleteModal() {
  modal.style.display = "none";
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
  '<div id="heart" class="heart" onclick="heartChange()"></div>'+
    '<div class="modal-content">'+
    '<span onclick="deleteModal()" class="close">&times;</span>'+
      '<div class="row">'+
        '<div class="column">';
        m+='<img src="'+allImg[num].src+'"> </div>';
        m+='<div class="column shift">'+
        '<br><h5> Item: '+info[0]+'</h5>'+
        '<h5>Price:'+price+'</h5>'+
        '<h5>Country of Origin: '+allImg[num].alt+'</h5>'+
        '<a class="shiftLink" onclick="webpage()">View Full Page</a>';
  m+='</div>'+'</div>'+'</div>';
  params.set("name",info[0]);
  link=allImg[num].src;
  params.set("origin",allImg[num].alt);
  params.set("price",price);
  params.set("src",allImg[num].src);
  params.set("file",location.pathname);
  params.set("pos",num);
  history.pushState(link, "", window.location);

  document.getElementById("modalStore").innerHTML = m;
}
function webpage(){
  window.location ="itemPage.html"+"?"+params;
}
function heartChange(){
  var h= document.getElementById("heart");
  h.classList.toggle("active");
}
