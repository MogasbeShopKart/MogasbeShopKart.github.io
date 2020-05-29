
//ALL CHILDREN ITEMS WILL BE STORED IN THIS FILE
//KEY
//codeblock= men Accessories
//codeblock1= men Pants
//codeblock2= men Shirts
//codeblock3= men Popular
//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW

//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var womensAccessories = [

{
  "Name": "Dryden Marcy Leather Satchel",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/3/optimized/16629823_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
  "Price": 350.99,
  "Origin":"Peru"
},
{
  "Name": "Dryden Marcy Leather Satchel",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/3/optimized/16629823_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
  "Price": 350.99,
  "Origin":"Peru"
},
{
  "Name": "Dryden Marcy Leather Satchel",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/3/optimized/16629823_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
  "Price": 350.99,
  "Origin":"Peru"
}];

var i="";
var codeblock="";
codeblock+='<div class="grid-container shift">';

for(i in womensAccessories)
{
  codeblock+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i+')" src="' +womensAccessories[i].Image +'" alt="'+
    womensAccessories[i].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i+')">'+womensAccessories[i].Name+': $'+womensAccessories[i].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock+='</div>';

var womensPants = [

{
  "Name": "Women's Superstretch Slimming Pull-On Jeans",
  "Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsDY-PpSxZgTyRu9mVdhrW9rhrELxb53DPw1pJEe1dda2J76OYZGpxv3UZ5NevRGwE-jlTfOptWw&usqp=CAc",
  "Price": 59.02,
  "Origin":"China"
},
{
  "Name": "Women's Superstretch Slimming Pull-On Jeans",
  "Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsDY-PpSxZgTyRu9mVdhrW9rhrELxb53DPw1pJEe1dda2J76OYZGpxv3UZ5NevRGwE-jlTfOptWw&usqp=CAc",
  "Price": 59.02,
  "Origin":"China"
},
{
  "Name": "Women's Superstretch Slimming Pull-On Jeans",
  "Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsDY-PpSxZgTyRu9mVdhrW9rhrELxb53DPw1pJEe1dda2J76OYZGpxv3UZ5NevRGwE-jlTfOptWw&usqp=CAc",
  "Price": 59.02,
  "Origin":"China"
}];
var i1="";
var codeblock1="";
codeblock1+='<div class="grid-container shift">';

for(i1 in womensPants)
{
  codeblock1+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i1+')" src="' +womensPants[i1].Image +'" alt="'+
    womensPants[i1].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i1+')">'+womensPants[i1].Name+': $'+womensPants[i1].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock1+='</div>';


//**********************
//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var womensShirts = [

{
  "Name": "Seasonless Yarn Sweater Tee",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOpjwKHtoqhe0sBO8Cg0HzzmAMHzAtvRQxMDPyev1wtJ1QCaf3cFsNQ6U3oXI&usqp=CAc",
  "Price": 34.28,
  "Origin":"United States Of America"
},
{
  "Name": "Chiffon-Hem Top",
  "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJu0bJp1jMpK6jIFFqK3KgoflkDVbKLqJEJmhktGvXACDx54R-ZHGRYV014MREFA&usqp=CAc",
  "Price": 28.98,
  "Origin":"United States Of America"
},
{
  "Name": "Seam-Detail High-Low Top",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/16404078_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
  "Price": 78.98,
  "Origin":"United States Of America"
}
];
var i2="";
var codeblock2='<div class="grid-container shift">';
for(i2 in womensShirts)
{
  codeblock2+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i2+')" src="' +womensShirts[i2].Image +'" alt="'+
    womensShirts[i2].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i2+')">'+womensShirts[i2].Name+': $'+womensPants[i2].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock2+='</div>';

//ALL men ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var womensPopular= [

  {
    "Name": "Seasonless Yarn Sweater Tee",
    "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOpjwKHtoqhe0sBO8Cg0HzzmAMHzAtvRQxMDPyev1wtJ1QCaf3cFsNQ6U3oXI&usqp=CAc",
    "Price": 34.28,
    "Origin":"United States Of America"
  },
  {
    "Name": "Chiffon-Hem Top",
    "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJu0bJp1jMpK6jIFFqK3KgoflkDVbKLqJEJmhktGvXACDx54R-ZHGRYV014MREFA&usqp=CAc",
    "Price": 28.98,
    "Origin":"United States Of America"
  },
  {
    "Name": "Seam-Detail High-Low Top",
    "Image":"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/16404078_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
    "Price": 78.98,
    "Origin":"United States Of America"
  },
  {
    "Name": "Women's Superstretch Slimming Pull-On Jeans",
    "Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsDY-PpSxZgTyRu9mVdhrW9rhrELxb53DPw1pJEe1dda2J76OYZGpxv3UZ5NevRGwE-jlTfOptWw&usqp=CAc",
    "Price": 59.02,
    "Origin":"China"
  },
  {
    "Name": "Dryden Marcy Leather Satchel",
    "Image":"https://slimages.macysassets.com/is/image/MCY/products/3/optimized/16629823_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
    "Price": 350.99,
    "Origin":"Peru"
  }


];

var i3="";
var codeblock3="";
codeblock3+='<div class="grid-container shift">';

for(i3 in womensPopular)
{
  codeblock3+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i3+')" src="' +womensPopular[i3].Image +'" alt="'+
    womensPopular[i3].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i3+')">'+womensPopular[i3].Name+': $'+womensPopular[i3].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock3+='</div>';

var idfound="";
var opt="";
if(document.getElementById("womensShirts")!=null)
{
  opt+=codeblock2;
  id="womensShirts";
}
if(document.getElementById("womensPants")!=null)
{
  opt+=codeblock1;
  id="womensPants";

}
if(document.getElementById("womensAccessories")!=null)
{
  opt+=codeblock;
  id="womensAccessories";
}
if(document.getElementById("womensClothing")!=null)
{
  opt=codeblock3;
  id="womensClothing";
}


document.getElementById(id).innerHTML = opt
