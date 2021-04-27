var text;
function myFunction() {
    var x = document.getElementById("divContainer2");
    text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
    }
}

var imageNameLength;
var dynamicInput;
$(document).ready(function () {
    $('.card-img-top').on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                'border': '5px solid rgb(127, 13, 129)'
            });
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                'border': '3px solid grey'
            });
        },
        click: function () {

            $('#divContainer2').empty();
            var imageUrl = $(this).attr('src');
            $('#mainImage').attr('src', imageUrl)

            var array1=imageUrl.split('/');
            var splitOne=array1[2];
            var array2 = splitOne.split('.');
            var d=array2[0];
            console.log(d);
            imageNameLength = d.length;

            for (var i=0; i<imageNameLength; i++){
                dynamicInput = document.createElement('input');
                dynamicInput.type="text";
                dynamicInput.style= "width:30px; height:30px; font-size:25px; color:rgb(127, 13, 129); border ";
                document.getElementById('divContainer2').append(dynamicInput);
            }
        }
    });

    $('#btnCheck').click(function () {

        var imageUrl = $('#mainImage').attr('src');

        var array1=imageUrl.split('/');
        var splitOne=array1[2];
        var array2 = splitOne.split('.');
        var imageName=array2[0];

        if (text == imageName) {
            alert("Right Answer");
        } else {
            alert("Wrong Answer");
        }
    });
});

