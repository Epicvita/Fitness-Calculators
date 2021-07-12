$(document).ready(function () {



    $('.submit').click(function () {
        var weight = parseFloat($('.Main input.weight').val());
        var reps = parseFloat($('.Main .form-select').val());
        var onerepmax = 0;
        var weightType = $('.Main input[name="weight"]:checked').val();


        if (isNaN(weight)) {
            $('.result').html("Your One-Rep Max (one-rm): ?");
            $('.Main .message').show(0).html('<span style="color: #a30000;">Please enter the weight you lifted.</span>');
        } else {

            onerepmax = Math.round(weight / reps);
            $('.result').html("Your One-Rep Max (one-rm): " + onerepmax + " " + weightType);
            $('#1rm95').html(Math.round(0.95 * onerepmax) + " " + weightType);
            $('#1rm90').html(Math.round(0.90 * onerepmax) + " " + weightType);
            $('#1rm85').html(Math.round(0.85 * onerepmax) + " " + weightType);
            $('#1rm80').html(Math.round(0.80 * onerepmax) + " " + weightType);
            $('#1rm75').html(Math.round(0.75 * onerepmax) + " " + weightType);
            $('#1rm70').html(Math.round(0.70 * onerepmax) + " " + weightType);
            $('#1rm65').html(Math.round(0.65 * onerepmax) + " " + weightType);
            $('#1rm60').html(Math.round(0.60 * onerepmax) + " " + weightType);
            $('#1rm55').html(Math.round(0.55 * onerepmax) + " " + weightType);
            $('#1rm50').html(Math.round(0.50 * onerepmax) + " " + weightType);
            $('.calc-rec').show(0);
            $('.message').hide(0);
        };
    });
});
