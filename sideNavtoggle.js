
function clicked(){
  localStorage.setItem("modal","close");
}
var b='<div id="sidenav" class="sidenav sticky">'+
  '<div class="row">'+
    '<button class="navButton navButtonFirst" onclick="clicked(), location.href='+"'shopMens.html'"+'"><span>Mens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navHover">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick= "clicked(), location.href='+"'mensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="clicked(), location.href='+"'mensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'mensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+

  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="clicked(), location.href='+"'shopWomens.html'"+'"><span>Womens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navHover">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'womensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="clicked(), location.href='+"'womensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'womensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="clicked(), location.href='+"'shopChildrens.html'"+'"><span>Childrens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navHover">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'childrensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="clicked(), location.href='+"'childrensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'childrensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
"</div>";

document.getElementById("bar").innerHTML=b;


var front='<div class="sticky">'+
  '<div class="container-fluid Header sticky">'+
    '<h1><span class="white">Shop</span>Kart</h1>'+
    '<div class="dropdownPf"><div class="profileDiv">'+
      '<p class="iconify icon" data-icon="fa-user-circle" data-inline="false"></p>'+
      '<span class="profileList ">&#x25BC</span></div>'+
      '<div class="dropdownPf-content">'+
        '<a class="contentpf" href="#">My Profile</a>'+
        '<br>'+
        '<a class="contentpf" href="#">Saved</a>'+
        '<br>'+
        '<a class="contentpf" href="#">Favorites</a>'+
    '  </div>'+
    '</div>'+
    '<p class="iconify  homeButton" data-icon="fa-home" data-inline="false" onclick="location.href='+"'index.html'"+'"></p>'+
    '<div class="trend" onclick="location.href='+"'mainShop.html'"+'">'+
    '<p class="iconify  shopWord">Trending</p>'+
    '<p class="iconify  shopButton" data-icon="fa-fire" data-inline="false">Shop</p></div>'+

    '<input id="searchBar"class="searchBar" type="text" placeholder="Search..." name="search">'+
      '<button id="searchButton" class="searchButton fa fa-search" onclick="clicked(), searchItem()"></button>'+
'  </div>'+
'<div class="notification"><p id="kart" class="iconify shoppingKart" data-icon="fa-shopping-cart" data-inline="false"></p>'+
'<span id ="badge" class="badge">'+getCartSize()+'</span><div>'+
"</div>"+
'<div class="sideNavHeader">'+
'<h1 class="wordHeader">Collections</h1>'+
'<button id ="buttonside" class="buttonSide" onclick="toggle()">&#8801</button></div>';

document.getElementById("homeHeader").innerHTML=front;

function toggle()
{
  var view = document.getElementById("bar");

  if (view.style.display === "none")
  {
    view.style.display = "block";
    localStorage.setItem("option", "open");

  }
  else
  {
    view.style.display = "none";
    localStorage.setItem("option", "close");
  }
}
function addCart(){
  var kart= document.getElementById("kart");
  var badge= document.getElementById("badge");
  if(kart.classList.contains("cartShake2")){
    kart.classList.add("cartShake")
    kart.classList.remove("cartShake2");
    badge.classList.add("cartShake")
    badge.classList.remove("cartShake2");
  }
  else{
    kart.classList.add("cartShake2");
    kart.classList.remove("cartShake");
    badge.classList.add("cartShake2")
    badge.classList.remove("cartShake");

  }
  var n=document.getElementById("nameOfItem").innerHTML.split(": ")[1];
  var h= document.getElementById("heart");
  if(sessionStorage.getItem("cart"))
    {
      var array=JSON.parse(sessionStorage.getItem("cart"));
      array.push(n);
      sessionStorage.setItem("cart",JSON.stringify(array));
    }
    else{
      var array=[n];
      sessionStorage.setItem("cart",JSON.stringify(array));
    }
  document.getElementById("badge").innerHTML=getCartSize();

}
function getCartSize()
{
  if(sessionStorage.getItem("cart")==null)
  {
    return 0;
  }
  else{
    var array=JSON.parse(sessionStorage.getItem("cart"));
    return array.length;

  }
}
