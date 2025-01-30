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
