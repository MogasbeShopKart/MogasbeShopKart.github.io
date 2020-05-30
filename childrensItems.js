
//ALL CHILDREN ITEMS WILL BE STORED IN THIS FILE
//KEY
//codeblock= Childrens Accessories
//codeblock1= Childrens Pants
//codeblock2= Childrens Shirts
//codeblock3= Childrens Popular
//ALL CHILDRENS ACCESSORIES ARE LISTED IN THE ARRAY BELOW

//ALL CHILDRENS ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var childrensAccessories = [

{
  "Name": "Children's Embossed Heart Locket in Sterling Silver",
  "Image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7KtPdGDoLoIlzoo5x0e-oG2_HexWdMU7NcRx1TcbmEXbOpCR1ednpR5eF8t4g7OxKyNJJTnggBkNT4bakd55w938fgqOdvanJkjLG9Vj2sUcq4pCEg5Tnbw&usqp=CAE",
  "Price": 80.99,
  "Origin":"England"
},
{
  "Name": "Children's Diamond Accent Figaro Chain Id Bracelet in 14k",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSugoUna3FUq5a8z-YOYArbRE0vDGQSoFobUAqe6omaHgMpoD5T_a9Hy42AOw&usqp=CAc",
  "Price": 162.50,
  "Origin":"England"
}];

var i="";
var codeblock="";
codeblock+='<div class="grid-container shift">';

for(i in childrensAccessories)
{
  codeblock+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i+')" src="' +childrensAccessories[i].Image +'" alt="'+
    childrensAccessories[i].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i+')">'+childrensAccessories[i].Name+': $'+childrensAccessories[i].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock+='</div>';

var childrensPants = [

{
  "Name": "Ring of Fire Alexander Stretch Twill Pants",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaAnX_PDeqosqgd8A3WTcqWHrgLdxOyegMbiIUkhqogHlTVQh0DwLoxqeq6DabSWut-yGw0Uk&usqp=CAc",
  "Price": 14.00,
  "Origin":"China"
},
{
  "Name": "Adidas Big Boys Icon Athletic Pants - Black",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr29y297z3xA_8YZ142cupfq6fRuemyu_3UJ5Z2kDx-X6yc3t_fvVlVqiP-iwGGeJvFlN22qH_&usqp=CAc",
  "Price": 20.99,
  "Origin":"Japan"
},
{
  "Name": "Functional-Drawstring Jogger Shorts for Toddler Boys",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQxEjnATHnvkcUAZBMrfrC3UakE0Q7cb2N0epddoUK2QbYTfdQkuSe99EV1RtimET9LKT6M81a&usqp=CAc",
  "Price": 5.99,
  "Origin":"America"
}];
var i1="";
var codeblock1="";
codeblock1+='<div class="grid-container shift">';

for(i1 in childrensPants)
{
  codeblock1+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i1+')" src="' +childrensPants[i1].Image +'" alt="'+
    childrensPants[i1].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i1+')">'+childrensPants[i1].Name+': $'+childrensPants[i1].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock1+='</div>';


//**********************
//ALL CHILDRENS ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var childrensShirts = [

{
  "Name": "U.S. Polo Assn. Boys Solid Polo",
  "Image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzO3Cg8nExIWae80pqxdC5YTG3SximBTFNsTdMLc3sZnNa9c0928T6TAe4vlNIRv8GkB2_39VT50fNb1camOeeDbpzSvFvsTllWm8eqOHz&usqp=CAE",
  "Price": 8.88,
  "Origin":"United States Of America"
},
{
  "Name": "U.S. Polo Assn. Boys Solid Polo",
  "Image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzO3Cg8nExIWae80pqxdC5YTG3SximBTFNsTdMLc3sZnNa9c0928T6TAe4vlNIRv8GkB2_39VT50fNb1camOeeDbpzSvFvsTllWm8eqOHz&usqp=CAE",
  "Price": 8.88,
  "Origin":"United States Of America"
},{
  "Name": "U.S. Polo Assn. Boys Solid Polo",
  "Image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzO3Cg8nExIWae80pqxdC5YTG3SximBTFNsTdMLc3sZnNa9c0928T6TAe4vlNIRv8GkB2_39VT50fNb1camOeeDbpzSvFvsTllWm8eqOHz&usqp=CAE",
  "Price": 8.88,
  "Origin":"United States Of America"
}
];
var i2="";
var codeblock2='<div class="grid-container shift">';
for(i2 in childrensShirts)
{
  codeblock2+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i2+')" src="' +childrensShirts[i2].Image +'" alt="'+
    childrensShirts[i2].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i2+')">'+childrensShirts[i].Name+': $'+childrensShirts[i].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock2+='</div>';

//ALL CHILDRENS ACCESSORIES ARE LISTED IN THE ARRAY BELOW
var childrensPopular= [

  {
    "Name": "Ring of Fire Alexander Stretch Twill Pants",
    "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaAnX_PDeqosqgd8A3WTcqWHrgLdxOyegMbiIUkhqogHlTVQh0DwLoxqeq6DabSWut-yGw0Uk&usqp=CAc",
    "Price": 14.00,
    "Origin":"China"
  }
  ,
{
  "Name": "Adidas Big Boys Icon Athletic Pants - Black",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr29y297z3xA_8YZ142cupfq6fRuemyu_3UJ5Z2kDx-X6yc3t_fvVlVqiP-iwGGeJvFlN22qH_&usqp=CAc",
  "Price": 20.99,
  "Origin":"Japan"
},
{
  "Name": "Functional-Drawstring Jogger Shorts for Toddler Boys",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQxEjnATHnvkcUAZBMrfrC3UakE0Q7cb2N0epddoUK2QbYTfdQkuSe99EV1RtimET9LKT6M81a&usqp=CAc",
  "Price": 5.99,
  "Origin":"America"
},
{
  "Name": "Children's Embossed Heart Locket in Sterling Silver",
  "Image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7KtPdGDoLoIlzoo5x0e-oG2_HexWdMU7NcRx1TcbmEXbOpCR1ednpR5eF8t4g7OxKyNJJTnggBkNT4bakd55w938fgqOdvanJkjLG9Vj2sUcq4pCEg5Tnbw&usqp=CAE",
  "Price": 80.99,
  "Origin":"England"
},
{
  "Name": "Children's Diamond Accent Figaro Chain Id Bracelet in 14k",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSugoUna3FUq5a8z-YOYArbRE0vDGQSoFobUAqe6omaHgMpoD5T_a9Hy42AOw&usqp=CAc",
  "Price": 162.50,
  "Origin":"England"
}];

var i3="";
var codeblock3="";
codeblock3+='<div class="grid-container shift">';

for(i3 in childrensPopular)
{
  codeblock3+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i3+')" src="' +childrensPopular[i3].Image +'" alt="'+
    childrensPopular[i3].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i3+')">'+childrensPopular[i3].Name+': $'+childrensPopular[i3].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock3+='</div>';

var idfound="";
var opt="";
if(document.getElementById("childrensShirts")!=null)
{
  opt+=codeblock2;
  id="childrensShirts";
}
if(document.getElementById("childrensPants")!=null)
{
  opt+=codeblock1;
  id="childrensPants";

}
if(document.getElementById("childrensAccessories")!=null)
{
  opt+=codeblock;
  id="childrensAccessories";
}
if(document.getElementById("childrensClothing")!=null)
{
  opt=codeblock3;
  id="childrensClothing";
}


document.getElementById(id).innerHTML = opt
