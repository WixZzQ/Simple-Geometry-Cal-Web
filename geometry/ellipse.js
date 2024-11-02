document.getElementById('calculator-btn-4').addEventListener('click', function calculateRectangleArea(){
    // get triangle base value
    const ellipseWidthInput = document.getElementById('ellipse-width');
    // console.log(ellipseWidthInput);

    const ellipseWidthText = ellipseWidthInput.value;
    // console.log(ellipseWidthText);
    // this is needed because it would convert anything into a string to numbers if you put
    //  the value number
    const a = parseFloat(ellipseWidthText);
    // use console.log(typeof to check it)
    console.log(a); 

    // get ellipse n value
    const ellipseLengthInput = document.getElementById('ellipse-length');
    const ellipseLengthText = ellipseLengthInput.value;
    const b = parseFloat(ellipseLengthText);
    console.log(b);

    const area = 3.124 * a * b;
    console.log('Area of parallelogram:', area);

    //display rectangle area
    const ellipseAreaSpan = document.getElementById('ellipse-area')
    // if it's now input then no need to put .value you can put innertext
    ellipseAreaSpan.innerText = area;
})
