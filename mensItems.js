
//ALL CHILDREN ITEMS WILL BE STORED IN THIS FILE
//KEY
//codeblock= men Accessories
//codeblock1= men Pants
//codeblock2= men Shirts
//codeblock3= men Popular
//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW

//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var mensAccessories = [

{
  "Name": "Gold Navy Blue Silk Tie Pocket Square Set",
  "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg-tt_c4q3a-ku9M5wqgVSNwh9MAAZ5coUDtMQy5sfTNGKXP-2VMdKZvFqBspewlnlU37M5uPL1vYrqFM56lhttsKl2Tw3fltnlV6CENc&usqp=CAE",
  "Price": 25.99,
  "Origin":"Italy"
},
{
  "Name": "Gold Navy Blue Silk Tie Pocket Square Set",
  "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg-tt_c4q3a-ku9M5wqgVSNwh9MAAZ5coUDtMQy5sfTNGKXP-2VMdKZvFqBspewlnlU37M5uPL1vYrqFM56lhttsKl2Tw3fltnlV6CENc&usqp=CAE",
  "Price": 25.99,
  "Origin":"Italy"
}];

var i="";
var codeblock="";
codeblock+='<div class="grid-container shift">';

for(i in mensAccessories)
{
  codeblock+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i+')" src="' +mensAccessories[i].Image +'" alt="'+
    mensAccessories[i].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i+')">'+mensAccessories[i].Name+': $'+mensAccessories[i].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock+='</div>';

var mensPants = [

{
  "Name": "Men's Relaxed Straight Fit Driven-X Stretch Jeans",
  "Image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkdlE6UcOStc02XXd-kn8hYGG3WRsiK00oa1sAMcf2OdAZBgYRgnrvFQjv0qN6INglNuwyi3R2HA&usqp=CAc",
  "Price": 59.02,
  "Origin":"China"
},
{
  "Name": "Champions Icon Athletic Pants - Black",
  "Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHg1qguZXFS4XIffDgPLHFCdopcmnMRLw3QFOXu8_a1lZDJScPQf_oaL_ztRSFbWz6k9AWiJTPwQ&usqp=CAc",
  "Price": 40.99,
  "Origin":"Japan"
},
{
  "Name": "Men's Classic-Fit Cotton Shorts",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/2/optimized/11433222_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
  "Price": 55.99,
  "Origin":"United States of America"
}];
var i1="";
var codeblock1="";
codeblock1+='<div class="grid-container shift">';

for(i1 in mensPants)
{
  codeblock1+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i1+')" src="' +mensPants[i1].Image +'" alt="'+
    mensPants[i1].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i1+')">'+mensPants[i1].Name+': $'+mensPants[i1].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock1+='</div>';


//**********************
//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var mensShirts = [

{
  "Name": "Men's Lyden Turtle Graphic Shirt: ",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/1/optimized/11380661_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
  "Price": 28.88,
  "Origin":"United States Of America"
},
{
  "Name": "Men's Lyden Turtle Graphic Shirt ",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/1/optimized/11380661_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
  "Price": 28.98,
  "Origin":"United States Of America"
}
];
var i2="";
var codeblock2='<div class="grid-container shift">';
for(i2 in mensShirts)
{
  codeblock2+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i2+')" src="' +mensShirts[i2].Image +'" alt="'+
    mensShirts[i2].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i2+')">'+mensShirts[i2].Name+': $'+mensPants[i2].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock2+='</div>';

//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var mensPopular= [

  {
    "Name": "Gold Navy Blue Silk Tie Pocket Square Set",
    "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg-tt_c4q3a-ku9M5wqgVSNwh9MAAZ5coUDtMQy5sfTNGKXP-2VMdKZvFqBspewlnlU37M5uPL1vYrqFM56lhttsKl2Tw3fltnlV6CENc&usqp=CAE",
    "Price": 25.99,
    "Origin":"Italy"
  },
  {
    "Name": "Gold Navy Blue Silk Tie Pocket Square Set",
    "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg-tt_c4q3a-ku9M5wqgVSNwh9MAAZ5coUDtMQy5sfTNGKXP-2VMdKZvFqBspewlnlU37M5uPL1vYrqFM56lhttsKl2Tw3fltnlV6CENc&usqp=CAE",
    "Price": 25.99,
    "Origin":"Italy"
  },
  {
    "Name": "Men's Lyden Turtle Graphic Shirt",
    "Image":"https://slimages.macysassets.com/is/image/MCY/products/1/optimized/11380661_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
    "Price": 28.88,
    "Origin":"United States Of America"
  },
  {
    "Name": "Men's Relaxed Straight Fit Driven-X Stretch Jeans",
    "Image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkdlE6UcOStc02XXd-kn8hYGG3WRsiK00oa1sAMcf2OdAZBgYRgnrvFQjv0qN6INglNuwyi3R2HA&usqp=CAc",
    "Price": 59.02,
    "Origin":"China"
  },
  {
    "Name": "Champions Icon Athletic Pants - Black",
    "Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHg1qguZXFS4XIffDgPLHFCdopcmnMRLw3QFOXu8_a1lZDJScPQf_oaL_ztRSFbWz6k9AWiJTPwQ&usqp=CAc",
    "Price": 40.99,
    "Origin":"Japan"
  },
  {
    "Name": "Men's Classic-Fit Cotton Shorts",
    "Image":"https://slimages.macysassets.com/is/image/MCY/products/2/optimized/11433222_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
    "Price": 55.99,
    "Origin":"United States of America"
  }

];

var i3="";
var codeblock3="";
codeblock3+='<div class="grid-container shift">';

for(i3 in mensPopular)
{
  codeblock3+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i3+')" src="' +mensPopular[i3].Image +'" alt="'+
    mensPopular[i3].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i3+')">'+mensPopular[i3].Name+': $'+mensPopular[i3].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock3+='</div>';

var idfound="";
var opt="";
if(document.getElementById("mensShirts")!=null)
{
  opt+=codeblock2;
  id="mensShirts";
}
if(document.getElementById("mensPants")!=null)
{
  opt+=codeblock1;
  id="mensPants";

}
if(document.getElementById("mensAccessories")!=null)
{
  opt+=codeblock;
  id="mensAccessories";
}
if(document.getElementById("mensClothing")!=null)
{
  opt=codeblock3;
  id="mensClothing";
}


document.getElementById(id).innerHTML = opt
