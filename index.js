document.addEventListener('DOMContentLoaded', (event) => {
    // Find all the forms on the page
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        // Add an event listener for the 'Enter' key press
        form.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default form submission behavior
                form.querySelector('button').click(); // Trigger the button click
            }
        });
    });
});

function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function calculateRectangle() {
    const length = parseFloat(document.getElementById('rect-length').value);
    const width = parseFloat(document.getElementById('rect-width').value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('rect-result').innerText = '* Invalid input! Please enter valid length and width.';
        document.getElementById('rect-result').className = 'invalid';
        return;
    }

    const area = calculateRectangleArea(length, width);
    const perimeter = calculateRectanglePerimeter(length, width);
    document.getElementById('rect-result').innerText = `Area: ${area} square units, Perimeter: ${perimeter} units`;
    document.getElementById('rect-result').className = 'result';
}

function calculateSquareArea(side) {
    return side * side;
}

function calculateSquarePerimeter(side) {
    return 4 * side;
}

function calculateSquare() {
    const side = parseFloat(document.getElementById('square-side').value);

    if (isNaN(side) || side <= 0) {
        document.getElementById('square-result').innerText = '* Invalid input! Please enter a valid side length.';
        document.getElementById('square-result').className = 'invalid';
        return;
    }

    const area = calculateSquareArea(side);
    const perimeter = calculateSquarePerimeter(side);
    document.getElementById('square-result').innerText = `Area: ${area} square units, Perimeter: ${perimeter} units`;
    document.getElementById('square-result').className = 'result';
}

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calculateCircle() {
    const radius = parseFloat(document.getElementById('circle-radius').value);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById('circle-result').innerText = '* Invalid input! Please enter a valid radius.';
        document.getElementById('circle-result').className = 'invalid';
        return;
    }

    const area = calculateCircleArea(radius);
    const circumference = calculateCircleCircumference(radius);
    document.getElementById('circle-result').innerText = `Area: ${area.toFixed(2)} square units, Circumference: ${circumference.toFixed(2)} units`;
    document.getElementById('circle-result').className = 'result';
}

function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

function calculateTriangle() {
    const base = parseFloat(document.getElementById('tri-base').value);
    const height = parseFloat(document.getElementById('tri-height').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById('tri-result').innerText = '* Invalid input! Please enter valid base and height.';
        document.getElementById('tri-result').className = 'invalid';
        return;
    }

    const area = calculateTriangleArea(base, height);
    document.getElementById('tri-result').innerText = `Area: ${area} square units`;
    document.getElementById('tri-result').className = 'result';
}
