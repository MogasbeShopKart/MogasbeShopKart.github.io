if(!localStorage.getItem("reccomendation"))
{
  localStorage.setItem("reccomendation","");
}
var mensAccessories = [
{
  "Name": "Gold Navy Blue Silk Tie Pocket Square Set",
  "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg-tt_c4q3a-ku9M5wqgVSNwh9MAAZ5coUDtMQy5sfTNGKXP-2VMdKZvFqBspewlnlU37M5uPL1vYrqFM56lhttsKl2Tw3fltnlV6CENc&usqp=CAE",
  "Price": 25.99,
  "Origin":"Italy"
}];


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

var mensShirts = [

  {
    "Name": "Men's Lyden Turtle Graphic Shirt",
    "Image":"https://slimages.macysassets.com/is/image/MCY/products/1/optimized/11380661_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
    "Price": 28.88,
    "Origin":"United States Of America"
  }
];

var mensPopular= [

  {
    "Name": "Curve Men's Cologne - Eau de Cologne",
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
  "Name": "Jogger Shorts for Toddler Boys",
  "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQxEjnATHnvkcUAZBMrfrC3UakE0Q7cb2N0epddoUK2QbYTfdQkuSe99EV1RtimET9LKT6M81a&usqp=CAc",
  "Price": 5.99,
  "Origin":"America"
}];

var childrensShirts = [

{
  "Name": "U.S. Polo Assn. Boys Solid Polo",
  "Image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzO3Cg8nExIWae80pqxdC5YTG3SximBTFNsTdMLc3sZnNa9c0928T6TAe4vlNIRv8GkB2_39VT50fNb1camOeeDbpzSvFvsTllWm8eqOHz&usqp=CAE",
  "Price": 8.88,
  "Origin":"United States Of America"
}
];

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
  "Name": "U.S. Polo Assn. Boys Solid Polo",
  "Image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzO3Cg8nExIWae80pqxdC5YTG3SximBTFNsTdMLc3sZnNa9c0928T6TAe4vlNIRv8GkB2_39VT50fNb1camOeeDbpzSvFvsTllWm8eqOHz&usqp=CAE",
  "Price": 8.88,
  "Origin":"United States Of America"
},
{
  "Name": "Jogger Shorts for Toddler Boys",
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

var womensAccessories = [

{
  "Name": "Dryden Marcy Leather Satchel",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/3/optimized/16629823_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
  "Price": 350.99,
  "Origin":"Peru"
}];

var womensPants = [

{
  "Name": "Women's Superstretch Slimming Pull-On Jeans",
  "Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsDY-PpSxZgTyRu9mVdhrW9rhrELxb53DPw1pJEe1dda2J76OYZGpxv3UZ5NevRGwE-jlTfOptWw&usqp=CAc",
  "Price": 59.02,
  "Origin":"China"
}];

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
function createItem(arrayPos)
{
  var i="";
  var codeblock='<div class="grid-container shift">';
  for(i in arrayPos)
  {
    codeblock+='<div class="grid-item">' +
      '<img class ="itemImage" onclick="display('+i+')" src="' +arrayPos[i].Image +'" alt="'+arrayPos[i].Origin+'">'+
      '<a class="itemLink"onclick="display('+i+')">'+arrayPos[i].Name+'<span class="itemPrice">: $'+arrayPos[i].Price+'</span></a>'+
      '<br>'+
      '</div>';
  }
  codeblock+='</div>';
  return codeblock;
}
function createItemAll(arrayPos,arrayPos2,arrayPos3)
{
  var i="";
  var count=0;
  var codeblock="";
  for(i in arrayPos)
  {
    codeblock+='<div class="grid-item">' +
      '<img class ="itemImage" onclick="display('+count+')" src="' +arrayPos[i].Image +'" alt="'+
      arrayPos[i].Origin+'">'+
      '<a class="itemLink"onclick="display('+count+')">'+arrayPos[i].Name+'<span class="itemPrice">: $'+arrayPos[i].Price+'</span></a>'+
      '<br>'+
      '</div>';
      count++;
  }

  for(i in arrayPos2)
  {
    codeblock+='<div class="grid-item">' +
      '<img class ="itemImage" onclick="display('+count+')" src="' +arrayPos2[i].Image +'" alt="'+
      arrayPos2[i].Origin+'">'+
      '<a class="itemLink"onclick="display('+count+')">'+arrayPos2[i].Name+'<span class="itemPrice">: $'+arrayPos2[i].Price+'</span></a>'+
      '<br>'+
      '</div>';
      count++;
  }

  for(i in arrayPos3)
  {
    codeblock+='<div class="grid-item">' +
      '<img class ="itemImage" onclick="display('+count+')" src="' +arrayPos3[i].Image +'" alt="'+
      arrayPos3[i].Origin+'">'+
      '<a class="itemLink"onclick="display('+count+')">'+arrayPos3[i].Name+'<span class="itemPrice">: $'+arrayPos3[i].Price+'</span></a>'+
      '<br>'+
      '</div>';
      count++;
  }

  return codeblock;
}

var all=[[mensAccessories,mensPants,mensShirts,mensPopular],
[childrensAccessories,childrensPants,childrensShirts,childrensPopular],
[womensAccessories,womensPants,womensShirts,womensPopular]];

function getAll()
{
  return all;
}
function click(search)
{
  var itemList=[[mensAccessories,mensPants,mensShirts,mensPopular],
  [childrensAccessories,childrensPants,childrensShirts,childrensPopular],
  [womensAccessories,womensPants,womensShirts,womensPopular]];

  var storage="";
  if(localStorage.getItem("reccomendation")!="")
  {
    storage=localStorage.getItem("reccomendation");
  }
  for(i=0;i<3;i++)
  {
    for(k=0;k<3;k++)
    {
      for(l=0;l<itemList[i][k].length;l++)
      {
        if(itemList[i][k][l].Image==search && !storage.includes(itemList[i][k][l].Name))
        {
          storage+=(itemList[i][k][l].Name+"*");
          break;
        }
      }
    }
  }
  localStorage.setItem("reccomendation",storage);
}
function searchItem(){
  var itemList=[[mensAccessories,mensPants,mensShirts,mensPopular],
  [childrensAccessories,childrensPants,childrensShirts,childrensPopular],
  [womensAccessories,womensPants,womensShirts,womensPopular]];
  var searched=document.getElementById("searchBar").value;

  if(searched==="")
  {
    alert("Search Bar is Empty");
  }
  else {
    var found=[];
    var i,k,l=0;
    var t=0;
    for(i=0;i<3;i++)
    {
      for(k=0;k<3;k++)
      {
        for(l=0;l<itemList[i][k].length;l++)
        {
          var temp=itemList[i][k][l].Name.toLowerCase();
          searched=searched.toLowerCase();
          if(temp.includes(searched))
          {
            found.push(itemList[i][k][l]);
            t++;
          }
        }
      }
    }
    var temp='<div class="section">'+
        '<h2><i>Search Results</i></h2>'+
      '</div>';
    if(t==0)
    {
      temp='<div class="section">'+
      '<h5 class="resultNotFound">"'+searched+'" could not be found:  Suggested Results</h5>'+
        '</div>';
      var local = localStorage.getItem("reccomendation").split("\*");
      var ps=0;
      for(ps=0;ps<local.length;ps++)
      {
        for(i=0;i<3;i++)
        {
          for(k=0;k<3;k++)
          {
            for(l=0;l<itemList[i][k].length;l++)
            {
              if(local[ps]==itemList[i][k][l].Name)
              {
                found.push(itemList[i][k][l]);
              }
            }
          }
        }
      }
    }
      temp+=createItem(found);
    document.getElementById("search").innerHTML = temp;
    document.getElementById("head").innerHTML = "";

  }
}
var idfound="";
var opt="";
if(document.getElementById("childrensAccessories")!=null)
{
  opt+=createItem(all[1][0]);
  id="childrensAccessories";
}
if(document.getElementById("childrensPants")!=null)
{
  opt+=createItem(all[1][1]);
  id="childrensPants";

}
if(document.getElementById("childrensShirts")!=null)
{
  opt+=createItem(all[1][2]);
  id="childrensShirts";
}


if(document.getElementById("childrensClothing")!=null)
{
  opt+=createItem(all[1][3]);
  id="childrensClothing";
}


if(document.getElementById("mensAccessories")!=null)
{
  opt+=createItem(all[0][0]);
  id="mensAccessories";
}
if(document.getElementById("mensPants")!=null)
{
  opt+=createItem(all[0][1]);
  id="mensPants";
}
if(document.getElementById("mensShirts")!=null)
{
  opt+=createItem(all[0][2]);
  id="mensShirts";
}
if(document.getElementById("mensClothing")!=null)
{
  opt+=createItem(all[0][3]);
  id="mensClothing";
}

if(document.getElementById("womensAccessories")!=null)
{
  opt+=createItem(all[2][0]);
  id="womensAccessories";
}
if(document.getElementById("womensPants")!=null)
{
  opt+=createItem(all[2][1]);
  id="womensPants";

}
if(document.getElementById("womensShirts")!=null)
{
  opt+=createItem(all[2][2]);
  id="womensShirts";
}
if(document.getElementById("womensClothing")!=null)
{
  opt+=createItem(all[2][3]);
  id="womensClothing";
}
if(document.getElementById("trendyClothing")!=null)
{
  var i=0;
  opt='<div class="grid-container shift">';
  opt+=createItemAll(all[0][3],all[1][3],all[2][3]);
  opt+='</div>'
  id="trendyClothing";
}


document.getElementById(id).innerHTML = opt
