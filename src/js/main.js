// $('#titleHello').text("Hello World");

// $('#titleHello').text();

// $('.square, .rectangle').addClass('red');

// $('tr:even').css('background-color', 'gray');


// function myCallBack(){
//     console.log("Hello world from jQuery");
// }

// $(document).ready(myCallBack());

// // $(document).ready(function(){

// // });

// $('#btnHideDivs').on('click', function(){
//     $('div').addClass('hidden');
//     $('div').removeClass('shown');
// });

// // $('#btnShowDivs').on('click', function(){
// //     $('div').addClass('shown');
// //     $('div').removeClass('hidden');
// // });

// $('#btnShowDivs').click(function(){
//     $('div').addClass('shown');
//     $('div').removeClass('hidden');
// });

// //apiUri = "http:// ....";
// // $.get(apiUri, function(data){
// //     console.log(data);
// // });



//http://sachinchoolur.github.io/lightslider/

$(document).ready(function() {

    $("#lightSlider").lightSlider({
        item: 1,
        prevHtml: "<",
        nextHtml: ">"
    }); 
    

  });