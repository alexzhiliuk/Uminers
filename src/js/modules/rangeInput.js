function addSpaces(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}

$(".double-range-input input[type='range']").on('input', function() {

    let maxValue = Number($(this).attr('max')),
        currentValue = Number($(this).val()),
        rangeInputMax = $(this).parent().find(".double-range-input__range_max"),
        rangeInputMin = $(this).parent().find(".double-range-input__range_min"),
        valueGap = Number($(this).parent().parent().attr("data-value-gap"))

    if ($(this).hasClass("double-range-input__range_min")) {

        if (currentValue + valueGap > rangeInputMax.val()) {

            currentValue = rangeInputMax.val() - valueGap
            $(this).val(currentValue)
            
        }
        
        $(this).parent().find(".double-range-input__progress-line").css("left", `${currentValue / maxValue * 100 + 1}%`)
        $(this).parent().parent().find(".double-range-input__min-value").html(addSpaces(currentValue))

    } else if ($(this).hasClass("double-range-input__range_max")) {

        if (currentValue - valueGap < rangeInputMin.val()) {

            currentValue = Number(rangeInputMin.val()) + valueGap
            $(this).val(currentValue)
            
        }
        console.log("work")
        $(this).parent().find(".double-range-input__progress-line").css("right", `${100 - currentValue / maxValue * 100 + 1}%`)
        $(this).parent().parent().find(".double-range-input__max-value").html(addSpaces(currentValue))

    }
    
})

