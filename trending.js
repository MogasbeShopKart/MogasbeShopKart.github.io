var all = [

{
  "Name": "Dryden Marcy Leather Satchel",
  "Image":"https://slimages.macysassets.com/is/image/MCY/products/3/optimized/16629823_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
  "Price": 350.99,
  "Origin":"Peru"
},
{
  "Name": "Gold Navy Blue Silk Tie Pocket Square Set",
  "Image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg-tt_c4q3a-ku9M5wqgVSNwh9MAAZ5coUDtMQy5sfTNGKXP-2VMdKZvFqBspewlnlU37M5uPL1vYrqFM56lhttsKl2Tw3fltnlV6CENc&usqp=CAE",
  "Price": 25.99,
  "Origin":"Italy"
},
{
  "Name": "Children's Embossed Heart Locket in Sterling Silver",
  "Image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7KtPdGDoLoIlzoo5x0e-oG2_HexWdMU7NcRx1TcbmEXbOpCR1ednpR5eF8t4g7OxKyNJJTnggBkNT4bakd55w938fgqOdvanJkjLG9Vj2sUcq4pCEg5Tnbw&usqp=CAE",
  "Price": 80.99,
  "Origin":"England"
}];

var i="";
var codeblock="";
codeblock+='<div class="grid-container shift">';

for(i in all)
{
  codeblock+='<div class="grid-item">' +
    '<img class ="itemImage" onclick="display('+i+')" src="' +all[i].Image +'" alt="'+
    all[i].Origin+'">'+
    '<br>' +
    '<a onclick="display('+i+')">'+all[i].Name+': $'+all[i].Price+'</a>'+
    '<br>'+
    '</div>';
}
codeblock+='</div>';

document.getElementById('trendyClothing').innerHTML=codeblock;
