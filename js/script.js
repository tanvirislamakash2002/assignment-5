const boxButton = document.querySelectorAll('.box-btn');



let taskAssigned = document.getElementById('task-assigned').innerText;
let numberReduce = document.getElementById('number-reduce').innerText;


const date = new Date()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()

const dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const dayNumber = date.getDate();
const day = dayArray[date.getDay()];
const monthArray = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.']
const month = monthArray[date.getMonth()];
const year = date.getFullYear();



document.getElementById('day').innerText= day+',';
document.getElementById('date').innerText= month+' '+dayNumber+' '+year;

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
        
        const taskMassage = event.target.parentElement.parentElement.childNodes[3].textContent;
        
        const time = hour+":"+minute+":"+second+" AM";
        p.innerHTML =`<span class = 'mb-2'>You have Completed the task ${taskMassage} at  ${time}</span>`;

        activityMassage.appendChild(p);
        p.setAttribute('class','mb-2')
        p.classList.add('bg-gray-200')
        p.classList.add('p-2')
        p.classList.add('rounded-xl')


        

        const btnLength = boxButton.length;

        let countDisabled = 0;
        for(let i = 0; i<btnLength; i++){
            const y = boxButton[i].getAttribute('disabled');
            if(y === 'disabled'){
                countDisabled++
            }
        }
        
        if(countDisabled >= btnLength){
            alert('congrats!!! You have completed all the current task')
        }

        
        

        
    })
}

document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('activity-massage').innerHTML=``;
})

document.getElementById('theme-btn').addEventListener('click',function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('body').classList.remove(`bg-gray-300`);
    document.body.style.backgroundColor = '#' + randomColor;

})


document.getElementById('discover-new-btn').addEventListener('click',function(){
    window.location.href='./blog.html'
})

