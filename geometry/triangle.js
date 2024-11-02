// Objectivee : get base, height of triangle. calculate the area by using the provided
// forumula. and then display the area.
// Step 1 : Get The Base Value 
// Step 2 : Added An id in the base input field
// Step 3 : use getElementById to access the input field
// Step 4 : Get value from the input field. (value is string now) 
// Step 5 : Convert the value to a number. Ue parseFloat

document.getElementById('calculator-btn').addEventListener('click', function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-value');
    const triangleBaseText = triangleBaseInput.value;
    // this is needed because it would convert anything into a string to numbers if you put
    //  the value number
    const base = parseFloat(triangleBaseText);
    // use console.log(typeof to check it)
    console.log(base); 

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log('Area of triangle:', area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area')
    // if it's now input then no need to put .value you can put innertext
    triangleAreaSpan.innerText = area;
})
