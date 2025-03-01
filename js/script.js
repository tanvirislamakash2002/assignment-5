const boxButton = document.querySelectorAll('.box-btn');

let taskAssigned = document.getElementById('task-assigned').innerText;
let numberReduce = document.getElementById('number-reduce').innerText;

for(const btnElement of boxButton){
    const btn = btnElement;
    
    
    btn.addEventListener('click', function(event){
        alert('Board updated Successfully')
        event.target.setAttribute('disabled','disabled')        

        taskAssigned--
        document.getElementById('task-assigned').innerText = taskAssigned

        numberReduce++
        document.getElementById('number-reduce').innerText = numberReduce

        const date = new Date()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        
        const time = hour+":"+minute+":"+second+" AM";
        document.getElementById('time').innerText ='You have Completed the task Fix Mobile Button Issue at '+ time;



        
    })
}


