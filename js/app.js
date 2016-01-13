/*
var i = 0;   //Global variable. Starting clicks at 0

$('#cat-img').click(function() {//setting click function on cat img
    i ++ ; $('h2').html(i); //increment i
 });*/


var cats = [ //cat array object
    {
        name: "Pickles",
        img: "img/pickles.png",
        clicks: 0,
        id: "img-1"
    },
    {
        name: "Tibbles",
        img: "img/tibbles.png",
        clicks: 0,
        id: "img-2"
    }
];

function appendCats(cats){// cats is the array of objects
    cats.forEach(function(cat){// for each cat in the cat object. The function is called for EACH cat
        var catdiv = $('<div/>');
        var cattitle = $('<h3/>');
        cattitle.text(cat.name);
        catdiv.append(cattitle);

        var newimage = $('<img/>', {
            src: cat.img,
            id:  cat.id,
            class: "cat"
        });

        catdiv.append(newimage);
        /*newimage.src = cat.img;
        newimage.id = cat.id;
        newimage.className = ("cat");*/


        var catclicks = $('<h2/>');
        catclicks.text(cat.clicks);
        catdiv.append(catclicks);

        $("body").append(catdiv);

        newimage.click(function(){ //setting click function on cat images
            cat.clicks++;
            catclicks.text(cat.clicks);
        });

    })
}
appendCats(cats);

/*function appendCats(array) { //append the array to the page. Give the function the cats array as input
    for (var i = 0; i < array.length; i++){ // keep appending objects until it is the length of the array
        var catdiv = document.createElement('div');// create the div where the cat objects will go

        var cattitle = document.createElement('h3'); //create h3 tag
        cattitle.innerHTML = array[i].name; //add cat name
        catdiv.appendChild(cattitle); //append to the dom

        var newimage = document.createElement('img'); //create img tag
        newimage.src = array[i].img; //add cat img
        newimage.id = array[i].id;// add img id
        newimage.className = ("cat"); //add cat class
        catdiv.appendChild(newimage); //append to dom


        var catclicks = document.createElement('h2'); //create h2 tag for clicks
        catclicks.innerHTML = array[i].clicks; //append the clicks to h2
        catdiv.appendChild(catclicks); //append to the dom

        document.body.appendChild(catdiv); //append the cat div with object properties
        var elem = document.getElementsByTagName('img');

    }
        /!*$(".cat").click(function(){ //setting click function on cat images
             //need to append clicks to each cats count
        });*!/

    for (var i = elem.length - 1; i >= 0; i--) {
        elem[i].addEventListener("click",clickhandler,false);
    }

    function clickhandler(){

        /// I want to use the item from the array. as such array[i].count =+ 1but it doesn't work

        console.log();
    }

}

appendCats(cats);*/





