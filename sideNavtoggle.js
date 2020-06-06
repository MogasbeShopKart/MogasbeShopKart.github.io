
function clicked(){
  localStorage.setItem("modal","close");
}
var b='<div id="sidenav" class="sidenav sticky">'+
        '<div class="row">'+
  '<h3>Collections</h3>'+
  '</div>'+
  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="clicked(), location.href='+"'shopMens.html'"+'"><span>Mens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navButton">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick= "clicked(), location.href='+"'mensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="clicked(), location.href='+"'mensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'mensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
  "<br>"+
  "<br>"+

  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="clicked(), location.href='+"'shopWomens.html'"+'"><span>Womens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navButton">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'womensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="clicked(), location.href='+"'womensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'womensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
  "<br>"+
  "<br>"+
  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="clicked(), location.href='+"'shopChildrens.html'"+'"><span>Childrens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navButton">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'childrensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="clicked(), location.href='+"'childrensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="clicked(), location.href='+"'childrensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
  "<br>"+
  "<br>"+
"</div>";

document.getElementById("bar").innerHTML=b;
var front='<div class="sticky">'+
  '<div class="container-fluid blueHeader sticky">'+
    '<h1><span class="white">Shop</span>Kart</h1>'+
    '<input id="searchBar"class="searchBar" type="text" placeholder="Search..." name="search">'+
      '<button id="searchButton" class="searchButton" onclick="clicked(), searchItem()">&#x1f50d;</button>'+
'  </div>'+

  '<div class="change headercolor">'+
      '<button class="buttonHeader" onclick="clicked(), location.href='+"'index.html'"+'"><span>Home </span></button>'+
      '<button class="buttonHeader" onclick="clicked(), location.href='+"'mainShop.html'"+'"><span>Shop </span></button>'+
      '<button class="buttonHeader" onclick="clicked(), location.href='+"'index.html'"+'"><span>Checkout </span></button>'
'  </div>'+

"</div>";
document.getElementById("homeHeader").innerHTML=front;

function toggle()
{
  var view = document.getElementById("bar");

  if (view.style.display === "none")
  {
    view.style.display = "block";
    document.getElementById("buttonside").style.marginLeft = "201px";
    localStorage.setItem("option", "open");

  }
  else
  {
    view.style.display = "none";
    document.getElementById("buttonside").style.marginLeft = "0px";
    localStorage.setItem("option", "close");
  }
}
