
var b='<div id="sidenav" class="sidenav">'+
        '<div class="row">'+
  '<h3>Collections</h3>'+
  '</div>'+
  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="location.href='+"'shopMens.html'"+'"><span>Mens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navButton">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick="location.href='+"'mensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="location.href='+"'mensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="location.href='+"'mensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
  "<br>"+
  "<br>"+

  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="location.href='+"'shopWomens.html'"+'"><span>Womens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navButton">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick="location.href='+"'womensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="location.href='+"'womensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="location.href='+"'womensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
  "<br>"+
  "<br>"+
  '<div class="row" >'+
    '<button class="navButton navButtonFirst" onclick="location.href='+"'shopChildrens.html'"+'"><span>Childrens </span></button>'+
      '<div class="dropdown">'+
        '<button class="navButton">&#8801</button>'+
          '<div class="dropdown-content">'+
            '<button class="dropdownElement" onclick="location.href='+"'childrensShirts.html'"+'"><span>Shirts </span></button>'+
            '<button class="dropdownElement"  onclick="location.href='+"'childrensPants.html'"+'">Pants</button>'+
            '<button class="dropdownElement" onclick="location.href='+"'childrensAccessories.html'"+'">Accessories</button>'+
          "</div>"+
      "</div>"+
  "</div>"+
  "<br>"+
  "<br>"+
"</div>";

document.getElementById("bar").innerHTML=b;

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
