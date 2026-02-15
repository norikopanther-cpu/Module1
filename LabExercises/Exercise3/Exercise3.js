function button1Clicked() {
    const heading1 = document.getElementById('heading1');
    
    const button1 = document.getElementById('button1');
    button1.style.backgroundColor = 'coral';
    button1.style.borderColor = 'coral';
    heading1.textContent = document.getElementById('text-input1').value;
}

function button2Clicked() {
    const heading2 = document.getElementById('heading2');
    
    const button2 = document.getElementById('button2');
    button2.style.backgroundColor = 'yellow';
    button2.style.borderColor = 'yellow';
    button2.style.color = 'black';
    heading2.textContent = document.getElementById('text-input2').value;
}