$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
var current_category = 0;
var fruits = ["C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/apples.jpg",
                  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/oranges.jpg",
                  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/watermelon.jpg",
                  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/grapes.jpg",
                  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/kiwi.jpg"
                ];
var fruitHeadings = ["Apples","Oranges","Watermelon","Grapes","Kiwi"];       
var fruitPrice = ["200","98","40","79","62"]; 

var vegetables = ["C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/capsicum.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/cauli.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/tomatoes.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/spinach.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/potatoes.jpg"
];
var vegetableHeadings = ["Capsicum","Cauliflower","Tomatoes","Spinach","potatoes"];
var vegetablePrice = ["49","73","32","68","50"];

var dairy = ["C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/cheese.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/eggs.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/yogurt.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/milk.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/meat.jpg"
];
var dairyHeadings = ["Cheese","Eggs","Yogurt","Milk","Meat"];
var dairyPrice = ["20","40","100","20","400"];

var confectionary = ["C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/tart.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/candy.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/chocolate.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/breads.jpg",
  "C:/Users/ACER/Desktop/Study Stuff/FINAL YEAR/Internet and Web Systems/bootstrapWebsite/images/cake.jpg"
];
var confectionaryHeadings = ["Tart","Candy","Chocolate","Breads","Cake"];
var confectionaryPrice = ["20000","40000","10000","10100","50000"];


function showProducts(category) {   
    current_category = category;
    var img = document.getElementsByClassName('product_image');
    var price = document.getElementsByClassName('product_price');
    var headings = document.getElementsByClassName('product_title');
    var popover = document.getElementsByClassName('product_details');
    for(i = 0 ; i < img.length ; i++)
    {
        switch(category)
        {
            case 0: img[i].setAttribute('src' , fruits[i]);
                    headings[i].innerHTML = fruitHeadings[i];
                    price[i].innerHTML = fruitPrice[i];
                    popover[i].setAttribute('data-content','Price = ' + fruitPrice[i] + ' GST: 12%');
                    break;
            case 1: img[i].src = dairy[i];
                    headings[i].innerHTML = dairyHeadings[i];
                    price[i].innerHTML = dairyPrice[i];
                    popover[i].setAttribute('data-content','Price = ' + dairyPrice[i] + ' GST: 18%');
                    break;
            case 2: img[i].src = vegetables[i];
                    headings[i].innerHTML = vegetableHeadings[i];
                    price[i].innerHTML = vegetablePrice[i];
                    popover[i].setAttribute('data-content','Price = ' + vegetablePrice[i] + ' GST: 14%');
                    break;
            case 3: img[i].src = confectionary[i];
                    headings[i].innerHTML = confectionaryHeadings[i];
                    price[i].innerHTML = confectionaryPrice[i];
                    popover[i].setAttribute('data-content','Price = ' + confectionaryPrice[i] + ' GST: 4%');
                    break;
            default: img[i].src = "http://placehold.it/700x400";
                    headings[i].innerHTML = "sample heading";
                    price[i].innerHTML = "1000";
                    popover[i].setAttribute('data-content','Price = ' + fruitPrice[i] + ' GST: 6%');        
        }
        
    }
}
var cart = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function addToCart(product){

    switch(current_category)
        {
            case 0: cart[product]++;
                    // alert("Item added to cart!");
                    break;
            case 1: cart[product + 5]++;
                    // alert("Item added to cart!");
                    break;
            case 2: cart[product + 10]++;
                    // alert("Item added to cart!");
                    break;
            case 3: cart[product + 15]++;
                    // alert("Item added to cart!");
                    break;
            case 4: cart[product + 20]++;
                    // alert("Item added to cart!");
                    break;
            default: alert("this is a new product");        
        }
    var bidValue = document.getElementById('cartcap').innerHTML;
     var val = parseInt(bidValue);
     val+=1
     document.getElementById('cartcap').innerHTML = val;
}
var final_price = 0;
function showCart(){

    var table = document.getElementById("myTable");
    var row;
    var name;
    var qty;
    var price;
    var total;
    for(var i = 0 ; i < cart.length ; i++)
    {
        if(cart[i] > 0)
        {   //console.log(i);
            row = table.insertRow(1);
            name = row.insertCell(0);
            
            qty = row.insertCell(1);
            
            price = row.insertCell(2);
            total = row.insertCell(3);
            
            var category = Math.floor(i/5);
            var product = i%4;
            
            
            switch(category)
            {
                case 0: name.innerHTML = fruitHeadings[product];
                        break;
                case 1: name.innerHTML = dairyHeadings[product];
                        break;
                case 2: name.innerHTML = vegetableHeadings[product];
                        break;
                case 3: name.innerHTML = confectionaryHeadings[product];
                        break;
            }
            
            
            qty.innerHTML = cart[i];
            
            
            switch(category)
            {
                case 0: price.innerHTML = fruitPrice[product];
                        break;
                case 1: price.innerHTML = dairyPrice[product];
                        break;
                case 2: price.innerHTML = vegetablePrice[product];
                        break;
                case 3: price.innerHTML = confectionaryPrice[product];
                        break;
            }
            
            
            
            
            switch(category)
            {
                case 0: total.innerHTML = cart[i]*parseInt(fruitPrice[product]);
                        final_price = final_price + (cart[i]*parseInt(fruitPrice[product]));
                        break;
                case 1: total.innerHTML = cart[i]*parseInt(dairyPrice[product]);
                        final_price = final_price + (cart[i]*parseInt(dairyPrice[product]));
                        break;
                case 2: total.innerHTML = cart[i]*parseInt(vegetablePrice[product]);
                        final_price = final_price + (cart[i]*parseInt(vegetablePrice[product]));
                        break;
                case 3: total.innerHTML = cart[i]*parseInt(confectionaryPrice[product]);
                        final_price = final_price + (cart[i]*parseInt(confectionaryPrice[product]));
                        break;
            }
        }
    }
    row = table.insertRow(-1);
    name = row.insertCell(0);
    qty = row.insertCell(1);
    price = row.insertCell(2);

    total = row.insertCell(3);
    if(final_price > 0)
    {
        console.log(final_price)
        total.innerHTML = final_price;
    }
    else
    {
        price.innerHTML = "Cart Empty!";
    }
    final_price = 0;
}

function resetCart(){
    var table = document.getElementById('myTable');
    while(table.rows.length > 0){
        table.deleteRow(1);
    }
}
    var new_category;
    var counter = 5;

    function addCategory(){
        new_category = prompt("Please enter a new category:", "sample");
        var category = document.getElementById('navbar-nav ml-auto');
        var inhtml = category.innerHTML;
        category.innerHTML = inhtml + '<li class=nav-item><a href =# onclick=showProducts(3) class=nav-link>'+new_category+'</a></li>';
        counter++;
    }