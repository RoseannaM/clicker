/*
//step one. One Cat
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
    },
    {
        name: "Peach",
        img: "img/peach.png",
        clicks: 0,
        id: "img-3"
    },
    {
        name: "Spots",
        img: "img/spots.png",
        clicks: 0,
        id: "img-4"
    },
    {
        name: "Fluffy",
        img: "img/fluffy.png",
        clicks: 0,
        id: "img-5"
    },
    {
        name: "Violet",
        img: "img/violet.png",
        clicks: 0,
        id: "img-5"
    }

];

/*var catimg = cats.slice(0,1); //trying to access img from cat object
console.log(catimg);*/

/*
//Step 2, two cats
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
        /!*newimage.src = cat.img;
        newimage.id = cat.id;
        newimage.className = ("cat");*!/


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
*/

//Step 3, Three cats.

function appendCats(cats){
    cats.forEach(function(cat){
        /*var catdiv = $('<div/>');*/
        var catlist = $('<li/>'); //create li element
        var catbutton = $('<button/>');//create button element
        var cattitle = $('<h3/>');//create h3 element
        cattitle.text(cat.name); //append cat name to h3
        catbutton.append(cattitle); //append h3 to button
        catlist.append(catbutton); //append button to li
        $("ul").append(catlist); //append li to ul

        //cat clicks
        /*var catclicks = $('<h2/>');//cat click h2
        catclicks.text(cat.clicks);//cat click text is the cat clicks
        $("#catclicks").append(catclicks);*/

        //images
        var newimage = $('<img/>', {
            src: cat.img,
            id:  cat.id,
            class: "cat"
        });

        //buttons are linked to images
        catbutton.click(function() {//button does two things. Puts image on the page and adds clicks
            $("#emptyBox").empty();
            $("#emptyBox").append(newimage)
            var catclickheader = $('<h2/>');
            catclickheader.text("Clicks");
            $("#emptyBox").append(catclickheader);
        });

    })
}

appendCats(cats);


/*
$('button').click(function() {//button does two things. Puts image on the page and adds clicks
    var newimage = $('<img/>', {
        src: cats.img,
        id:  cats.id,
        class: "cat"
    });
    $("#emptyBox").append(newimage)

});
*/
