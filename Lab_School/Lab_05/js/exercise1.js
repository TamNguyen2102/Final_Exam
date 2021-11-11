let grid = document.createElement("div");
grid.className = "grid"; 
let color_square = document.createElement("button");
color_square.className = "block";
$(color_square).css({"height": "1.5rem", "width": "1.5rem"});

let original_color = $('body').css('background-color');

function randomColor() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    return "rgb(" + r + "," + g + "," + b + ")";
};

$(document).ready(() => {
    $(".row-2").append(grid.cloneNode());

    for (let i = 1; i <= 100; i++) {
        $(color_square).css('background-color', randomColor());
        $(".grid").append(color_square.cloneNode());
        
        if ((i % 10) == 0) {
            $(".grid").append("<br>");
        }
    }

    let original_color = $('body').css('background-color');

    $(".block").hover(function() {
        $("body").css('background-color', $(this).css('background-color'));
        $(".color-code-container").html($(this).css('background-color'));
    }, function() {
        $("body").css('background-color', original_color);
        $(".color-code-container").html(original_color);
    });

    $(".block").click(function() {
        $("body").css('background-color', $(this).css('background-color'));
        original_color = $(this).css('background-color');
        $(".row-3").html("Background-color has been change")
        $(".row-3").css({"display": ""});
        $(".row-3").fadeOut(3000, function() {});
    });

    $(".color-code-container").click(function() {
        let tempText = $(".color-code-container").select();
        navigator.clipboard.writeText(tempText.val());
        $(".row-3").html("Copy to clipboard");
        $(".row-3").css({"display": ""});
        $(".row-3").fadeOut(3000, function() {});
    });
});

