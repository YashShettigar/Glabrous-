var obj = [
	{url:'^.*\/MensCasuals.html', contents:[{img:'./res/images/mens-black-t-shirt.jpg',title: 'Black t-shirt', context: 'A simple black t-shirt can be really classy sometimes!',price: '$12'},{img:'./res/images/mens-jean-jacket.jpg',title: 'Jean Jacket', context: 'Perfectly suits over any t-shirt without bragging! Can be used as shirt too!',price: '$9'},{img:'./res/images/mens-plaid.jpg',title: 'Plaid Shirt', context: 'A half-sleeved blue plaid shirt for person with sky-high beliefs!',price: '$6'}]},
	{url:'^.*\/MensFormals.html', contents:[{img:'./res/images/mens-black-suit.jpg',title: 'Black Suit', context: 'A complete low-profile black suit which shows your sophisticated-ness!',price: '$20'},{img:'./res/images/mens-business-suit.jpg',title: 'Business Suit', context: 'A blue business suit that flaunts the inner businessman in you!',price: '$32'},{img:'./res/images/mens-double-breasted.jpg',title: 'Double-breasted Coat', context: 'Suit yourself with a brand new double-breasted coat that keeps you warm in long winters!',price: '$41'}]},
	{url:'^.*\/MensOccasion.html', contents:[{img:'./res/images/mens-pink-suit.jpg',title: 'Pink Party Suit', context: 'Show the love inside you with this pink party suit!',price: '$28'},{img:'./res/images/mens-traditional-suit.jpg',title: 'Indo-Western Suit', context: 'A suit with a pinch of Indian tradition that flaunts your traditional side!',price: '$25'},{img:'./res/images/mens-kurta.jpg',title: 'Indian Suit', context: 'A simple Indian suit! \'Simply match-able\' for every Indian occasion!',price: '$14'}]}
];
var re_url="";
var loc = window.location.href;
if(loc.match(obj[0].url)){
	re_url=obj[0];
	console.log(re_url);
}else if(loc.match(obj[1].url)){
	re_url=obj[1];
}else if(loc.match(obj[2].url)){
	re_url=obj[2];
}
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
