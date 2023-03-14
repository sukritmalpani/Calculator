function add(a, b) {
    return a + b;
    // console.log(a+b);
}
function subtract(a, b) {
    return a - b;
    // console.log(a+b);
}
function multiply(a, b) {
    return a * b;
    // console.log(a+b);
}
function divide(a, b) {
    return a / b;
    // console.log(a+b);
}
function operate(op, num1, num2) {
    let ans;
    if (op == "+") {
        ans = add(num1, num2);
    }
    if (op == '-') {
        ans = subtract(num1, num2);
    }
    if (op == '*') {
        ans = multiply(num1, num2);
    }
    if (op == '/') {
        ans = divide(num1, num2);
    }
    console.log(ans);
    display(ans);

}
function display(value1)
{
    text=document.getElementById('output1').value;
    text=text+value1;
    document.getElementById('output1').value=text;
    console.log(value1);
    return text;
}
function calculate()
{
    let index;
    let num1;
    let op;
    let num2;
    for(let i=0;i<text.length;i++)
    {
        if(text.charAt(i)=='+' || text.charAt(i)=='-' || text.charAt(i)=='*' || text.charAt(i)=='/')
        index=i;
    }
    num1=Number(text.slice(0,index));
    num2=Number(text.slice(index+1));
    op=text[index];
    console.log(num1);
    console.log(num2);
    console.log(op);
    clearDisplay();
    operate(op,num1,num2);
}
function clearDisplay()
{
    text="";
    document.getElementById('output1').value=text;
}