var cats = [{
    name: 'Pickles',
    image: 'images/tibbles.png',
    clicks: 0
},
    {
    name: 'Tibbles',
    image: 'images/pickles.png',
    clicks: 0
    }
];


$('#cat-img').append(cats.image)


var i = 0;   //starting clicks at 0

$('#cat-img').click(function() {//setting click function on cat img
    i ++ ; $('h2').html(i);
 });

/*
var elem = document.getElementById('#cat-img');
elem.addEventListener('click', function(){
    var clicks = 0;   //starting clicks at 0
    console.log(clicks);
}, false);*/

/*
 $('#cat-img').click(function() {
 var i;
 i = 0;
 i = i + 1$('h2').html(i);
 });*/
