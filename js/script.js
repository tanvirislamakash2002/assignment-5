const boxButton = document.querySelectorAll('.box-btn');

let taskAssigned = document.getElementById('task-assigned').innerText;
let numberReduce = document.getElementById('number-reduce').innerText;

for(const btnElement of boxButton){
    const btn = btnElement;
    
    
    btn.addEventListener('click', function(event){
        event.target.setAttribute('disabled','disabled')        

        taskAssigned++
        document.getElementById('task-assigned').innerText = taskAssigned

        numberReduce--
        document.getElementById('number-reduce').innerText = numberReduce


        console.log(event.target.parentElement.childNodes )
    })
}


