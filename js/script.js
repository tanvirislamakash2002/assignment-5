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


        // activity massage  
        const activityMassage = document.getElementById('activity-massage')
        
        const p = document.createElement('p');
        

        const date = new Date()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        
        const time = hour+":"+minute+":"+second+" AM";
        p.innerHTML =`<span class = 'mb-2'>You have Completed the task Fix Mobile Button Issue at  ${time}</span>`;

        activityMassage.appendChild(p);
        p.setAttribute('class','mb-2')
        p.classList.add('bg-gray-200')
        p.classList.add('p-2')
        p.classList.add('rounded-xl')


        



        
    })
}

document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('activity-massage').innerHTML=``;
})


