var obj = [
	{url:'^.*\/MensCasuals.html', contents:[{img:'./res/images/mens-black-t-shirt.jpg',title: 'Black t-shirt', context: 'A simple black t-shirt can be really classy sometimes!',price: '$12'},{img:'./res/images/mens-jean-jacket.jpg',title: 'Jean Jacket', context: 'Perfectly suits over any t-shirt without bragging! Can be used as shirt too!',price: '$9'},{img:'./res/images/mens-plaid.jpg',title: 'Plaid Shirt', context: 'A half-sleeved blue plaid shirt for person with sky-high beliefs!',price: '$6'}]},
	{url:'^.*\/MensFormals.html', contents:[{img:'./res/images/mens-black-suit.jpg',title: 'Black Suit', context: 'A complete low-profile black suit which shows your sophisticated-ness!',price: '$20'},{img:'./res/images/mens-business-suit.jpg',title: 'Business Suit', context: 'A blue business suit that flaunts the inner businessman in you!',price: '$32'},{img:'./res/images/mens-double-breasted.jpg',title: 'Double-breasted Coat', context: 'Suit yourself with a brand new double-breasted coat that keeps you warm in long winters!',price: '$41'}]},
    {url:'^.*\/MensOccasion.html', contents:[{img:'./res/images/mens-pink-suit.jpg',title: 'Pink Party Suit', context: 'Show the love inside you with this pink party suit!',price: '$28'},{img:'./res/images/mens-traditional-suit.jpg',title: 'Indo-Western Suit', context: 'A suit with a pinch of Indian tradition that flaunts your traditional side!',price: '$25'},{img:'./res/images/mens-kurta.jpg',title: 'Indian Suit', context: 'A simple Indian suit! \'Simply match-able\' for every Indian occasion!',price: '$14'}]},
    {url:'^.*\/WomensCasuals.html', contents:[{img:'./res/images/womens-hoody.jpg',title: 'White Hoody', context: 'For the gothic personality inside you!',price: '$16'},{img:'./res/images/womens-yellow-top.jpg',title: 'Yellow Top', context: 'A yellow sleeveless top just for you to show your sunny side!',price: '$14'},{img:'./res/images/womens-tank.jpg',title: 'White & Black Tank', context: 'A pair of white and black tank for the hardship at \'GYMS\'!',price: '$14'}]},
    {url:'^.*\/WomensOccasion.html', contents:[{img:'./res/images/womens-long-beaded-dress.jpg',title: 'Adriana Papell Long Beaded Dress', context: 'A long dress that attracts attention of crowd towards you in any party!',price: '$25'},{img:'./res/images/womens-robe.jpg',title: 'Green Robe', context: 'Suitable for most of the occasion showing your wild side!',price: '$30'},{img:'./res/images/womens-red-frock.jpg',title: 'Red Japanese Gown', context: 'A red gown that combines the modern frock designs with Japanese tradition...',price: '$24'}]},
    {url:'^.*\/WomensFormals.html', contents:[{img:'./res/images/womens-blouse.jpg',title: 'White Blouse', context: 'A white blouse that goes for both formal and casual!',price: '$20'},{img:'./res/images/womens-white-suit.jpg',title: 'White Suit', context: 'A suit that brings the confident CEO in you ;)',price: '$32'},{img:'./res/images/womens-red-shirt.jpg',title: 'Red Shirt', context: 'A plain red shirt that can be wore for any formal meetings!',price: '$23'}]}
];
var re_url="";
var loc = window.location.href;

//Adding context to pages and adding functionality to go back

if(loc.match(obj[0].url)){
    document.getElementById('backIcon').addEventListener('click',() => {
        var r = window.location.href.split("/MensCasuals.html");
        r[0]+="/MenSection.html";
        window.location.replace(r[0]);
    });
	re_url=obj[0];
}else if(loc.match(obj[1].url)){
    document.getElementById('backIcon').addEventListener('click',() => {
        var r = window.location.href.split("/MensFormals.html");
        r[0]+="/MenSection.html";
        window.location.replace(r[0]);
    });
	re_url=obj[1];
}else if(loc.match(obj[2].url)){
    document.getElementById('backIcon').addEventListener('click',() => {
        var r = window.location.href.split("/MensOccasion.html");
        r[0]+="/MenSection.html";
        window.location.replace(r[0]);
    });
	re_url=obj[2];
}else if(loc.match(obj[3].url)){
    document.getElementById('backIcon').addEventListener('click',() => {
        var r = window.location.href.split("/WomensCasuals.html");
        r[0]+="/MenSection.html";
        window.location.replace(r[0]);
    });
    re_url=obj[3];
}else if(loc.match(obj[4].url)){
    document.getElementById('backIcon').addEventListener('click',() => {
        var r = window.location.href.split("/WomensOccasion.html");
        r[0]+="/MenSection.html";
        window.location.replace(r[0]);
    });
    re_url=obj[4];
}else if(loc.match(obj[5].url)){
    document.getElementById('backIcon').addEventListener('click',() => {
        var r = window.location.href.split("/WomensFormals.html");
        r[0]+="/MenSection.html";
        window.location.replace(r[0]);
    });
    re_url=obj[5];
}


// rendering tabs of section's product to the pages
var p = document.getElementById('tabContainer');
for(var i =1;i<4; i++){
	var j=1;
	var tabs = '<div class="main-row-'+i+'">\
                <div class="col-'+(j)+'">\
                    <img id="garmentImg" src="'+re_url.contents[i-1].img+'" alt="Garment Image">\
                </div>\
                <div class="col-'+(j+1)+'">\
                    <div id="Title">'+re_url.contents[i-1].title+'</div>\
                    <div id="subtitle">'+re_url.contents[i-1].context+'</div>\
                </div>\
                <div class="col-'+(j+2)+'">\
                    <div id="Price"><strong>Price</strong><br />'+re_url.contents[i-1].price+'</div>\
                    <div class="col-'+(j+2)+'-row">\
                        <input onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown()" type="button" value="-" id="LB" /><input type="number" min="0" max="10" value="0" defaultValue="0"/><input onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp()" type="button" value="+" id="RB" />\
                    </div>\
                </div>\
            </div>'
	p.innerHTML = p.innerHTML + tabs;
}
