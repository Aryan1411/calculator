function log(msg){
    let ul=document.getElementById('log_content');
    let li=document.createElement('li');
    let text=document.createTextNode(msg);
    li.appendChild(text);
    ul.appendChild(li);
}
function calculate(){
    let expression=document.getElementById('value').value;
    if(expression){
        try{
            let ans=eval(expression);
            document.getElementById('value').value=ans;
            log(expression+'='+ans);
        }catch(e){
            console.log(e)
        }
    }
}

document.getElementById('value').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});

function buttonClick(v){
    let value=document.getElementById('value');
    value.value+=v;
    document.getElementById('value').value=value.value;
}
function clearall(){
    document.getElementById('value').value='';
}