const inputBar = document.getElementById("input");
console.log(inputBar);

function clearAll(){
    inputBar.value="";
}

function displayValue(num){
    inputBar.value+=num;
}

function clearOne(){
    inputBar.value=inputBar.value.slice(0,-1);
};

function evalute(){
    try{
            inputBar.value=eval(inputBar.value);
    }
    catch(err){
        alert("Enter a valid pattern");
    }
};
