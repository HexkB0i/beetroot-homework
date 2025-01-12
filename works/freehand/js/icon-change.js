// Elements
var megaphone = document.getElementById('megaphone');
var building = document.getElementById('building');
var phone = document.getElementById('phone');

var designDiv = document.getElementById('design');
var ecommerceDiv = document.getElementById('ecommerce');
var appDiv = document.getElementById('application');

// Functions
function designChange(){
    megaphone.innerHTML = '<use xlink:href="assets/img/sprite/sprite.svg#megaphone-green"></use>'
};
function designReverse(){
    megaphone.innerHTML = '<use xlink:href="assets/img/sprite/sprite.svg#megaphone-blue"></use>'
};

function ecommerceChange(){
    building.innerHTML = '<use xlink:href="assets/img/sprite/sprite.svg#building-green"></use>'
};
function ecommerceReverse(){
    building.innerHTML = '<use xlink:href="assets/img/sprite/sprite.svg#building-blue"></use>'
};

function appChange(){
    phone.innerHTML = '<use xlink:href="assets/img/sprite/sprite.svg#phone-green"></use>'
};
function appReverse(){
    phone.innerHTML = '<use xlink:href="assets/img/sprite/sprite.svg#phone-blue"></use>'
};

// Listeners
designDiv.addEventListener('mouseover', function(event){setTimeout(designChange, 110)});
designDiv.addEventListener('mouseout', function(event){setTimeout(designReverse, 110)});

ecommerceDiv.addEventListener('mouseover', function(event){setTimeout(ecommerceChange, 110)});
ecommerceDiv.addEventListener('mouseout', function(event){setTimeout(ecommerceReverse, 110)});

appDiv.addEventListener('mouseover', function(event){setTimeout(appChange, 110)});
appDiv.addEventListener('mouseout', function(event){setTimeout(appReverse, 110)});