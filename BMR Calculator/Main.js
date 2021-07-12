$('.BMR input[name="height"]').click(function () {
    var height = $(this).val();
    if (height == "meters") {
        $('.BMR input[name="height-1"]').attr("placeholder", "Meters");
        $('.BMR input[name="height-1"]').val("");
        $('.BMR input[name="height-2"]').attr("placeholder", "Centimeters");
        $('.BMR input[name="height-2"]').val("");
    } else {
        $('.BMR input[name="height-1"]').attr("placeholder", "Feet");
        $('.BMR input[name="height-1"]').val("");
        $('.BMR input[name="height-2"]').attr("placeholder", "Inches");
        $('.BMR input[name="height-2"]').val("");
    }
});

$('.BMR input[name="wheight"]').click(function () {

    if (weightUnits == "kilos") {
        $('.BMR input[name="weight-input"]').attr("placeholder", "Kilograms");
        $('.BMR input[name="weight-input"]').val("");
    } else {
        $('.BMR input[name="weight-input"]').attr("placeholder", "Pounds");
        $('.BMR input[name="weight-input"]').val("");
    }
});
$(document).ready(function () {
    var GotHeight = 0;
    var Age = null;
    var sex = $('.BMR input[name=sex]:checked').val();
    var height = $('.BMR input[name="height"]:checked').val();
    var size = $('.BMR input[name="wheight"]:checked').val();
    var height_1 = null;
    var height_2 = null;
    var weight = null;
    var bmr = 0;
    $("#Age").change(function (e) {
        Age = $(this).val();
    });

    $("#height-1").change(function (e) {
        height_1 = $(this).val();
    });
    $("#height-2").change(function (e) {
        height_2 = $(this).val();
    });
    $("#weight").change(function (e) {
        weight = $(this).val();
    });
    $(".submit").click(function (e) {
         if (Age == null || height_1 == null || height_2 == null || weight == null) {
            $('.BMR .answer').show(0).html('undefined');
        } else {

            if (height == "feet") {
                GotHeight = ((height_1 * 30.48) + (height_2 * 2.54));
            } else {
                GotHeight = (height_1 * 100) + height_2;
            }

            if (size == "pounds") {
                weight = (weight * 0.453592);
            }

            if (sex == "male") {
                bmr = Math.round(66.5 + (weight * 13.75) + (GotHeight * 5.003) - (Age * 6.755));
            } else {
                bmr = Math.round(655 + (weight * 9.563) + (GotHeight * 1.850) - (Age * 4.676));
            }

            $('.BMR .answer').show(0).html('' + bmr + ' calories/day</span>');
        }
    });

});
