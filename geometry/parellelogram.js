document.getElementById('calculator-btn-3').addEventListener('click', function calculateRectangleArea(){
    // get triangle base value
    const rectangleWidthInput = document.getElementById('parallelogram-width');
    // console.log(rectangleBaseInput)
    const rectangleWidthText = rectangleWidthInput.value;
    // console.log(rectangleBaseText);
    // this is needed because it would convert anything into a string to numbers if you put
    //  the value number
    const width = parseFloat(rectangleWidthText);
    // use console.log(typeof to check it)
    console.log(width); 

    // get triangle height value
    const rectangleLengthInput = document.getElementById('parallelogram-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    const area = width * length;
    console.log('Area of parallelogram:', area);

    //display rectangle area
    const rectangleAreaSpan = document.getElementById('parallelogram-area')
    // if it's now input then no need to put .value you can put innertext
    rectangleAreaSpan.innerText = area;
})
