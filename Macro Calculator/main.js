/* MACRONUTRIENTS CALCULATOR */

$('.Macro input[name="height"]').click(function () {
    var height = $(this).val();

    if (height == "meters") {
        $('.Macro input[name="height-1"]').attr("placeholder", "Meters");
        $('.Macro input[name="height-1"]').val("");
        $('.Macro input[name="height-2"]').attr("placeholder", "Centimeters");
        $('.Macro input[name="height-2"]').val("");
    } else{
        $('.Macro input[name="height-1"]').attr("placeholder", "Feet");
        $('.Macro input[name="height-1"]').val("");
        $('.Macro input[name="height-2"]').attr("placeholder", "Inches");
        $('.Macro input[name="height-2"]').val("");
    }
});

$('.Macro input[name="wheight"]').click(function () {
    var weight = $(this).val();

    if (weight == "kilos") {
        $('.Macro input[name="weight-input"]').attr("placeholder", "Kilograms");
        $('.Macro input[name="weight-input"]').val("");
    } else{
        $('.Macro input[name="weight-input"]').attr("placeholder", "Pounds");
        $('.Macro input[name="weight-input"]').val("");
    }
});
$(document).ready(function () {
    var GotHeight = 0;
    var Age = null;
    var sex = $('.Macro input[name=sex]:checked').val();
    var height = $('.Macro input[name="height"]:checked').val();
    var size = $('.Macro input[name="wheight"]:checked').val();
    var activity = $('.Macro input[name=activity]:checked').val();
    var goal = $('.Macro input[name=goal]:checked').val();
    var height_1 = null;
    var height_2 = null;
    var weight = null;
    var carbs = 0;
    var protons = 0;
    var fats = 0;
    var calories = 0;
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
            $('.Macro .answer').show(0).html('undefined');
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
            calories = ((weight * 10) + (GotHeight * 6.25) - (Age * 5) + 5);
        } else {
            calories = ((weight * 10) + (GotHeight * 6.25) - (Age * 5) - 161);
        }

        switch (activity) {
            case "L":
                calories = Math.round(calories * 1.1);
                break;
            case "M":
                calories = Math.round(calories * 1.3);
                break;
            case "V":
                calories = Math.round(calories * 1.5);
                break;
            case "E":
                calories = Math.round(calories * 1.7);
                break;
        }

        switch (goal) {
            case "fat-loss":
                if (calories <= 2000) calories = Math.round(0.9 * calories);
                if (calories > 2000) calories = Math.round(0.8 * calories);
                carbs = Math.round(0.40 * calories / 4);
                protons = Math.round(0.40 * calories / 4);
                fats = Math.round(0.20 * calories / 9);
                break;
            case "maintenance":
                carbs = Math.round(0.45 * calories / 4);
                protons = Math.round(0.30 * calories / 4);
                fats = Math.round(0.25 * calories / 9);
                break;
            case "gain":
                calories += 500;
                carbs = Math.round(0.45 * calories / 4);
                protons = Math.round(0.30 * calories / 4);
                fats = Math.round(0.25 * calories / 9);
                break;
        }


        $('.Macro .answer-Carbs').show(0).html(''+carbs +' calories');
        $('.Macro .answer-Protein').show(0).html(''+protons+' G per day');
        $('.Macro .answer-Fats').show(0).html(''+fats+' G per day');
    }
    });

});
