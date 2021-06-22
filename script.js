function displayValue(num){
    let inputbox=document.getElementById("first")
    first.value+=num
}

function evaluateExpression(){
    let cur_value=first.value
    let result=eval(cur_value)
    first.value=result
}

function clearBOX(){
    first.value=""
}
function lastDelete(){
    let cur_value=first.value;
    let result=cur_value.slice(0,-1)
    first.value=result
}