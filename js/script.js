const boxButton = document.querySelectorAll('.box-btn');

const date = new Date()
        
        
const dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const dayNumber = date.getDate();
const day = dayArray[date.getDay()];
const monthArray = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.']
const month = monthArray[date.getMonth()];
const year = date.getFullYear();


document.getElementById('day').innerText= day+',';
document.getElementById('date').innerText= month+' '+dayNumber+' '+year;


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
        const activityDate = new Date()

        const activityMassage = document.getElementById('activity-massage')
        
        const p = document.createElement('p');
        
        const taskMassage = event.target.parentElement.parentElement.childNodes[3].textContent;

        const hour = activityDate.getHours()
        const minute = activityDate.getMinutes()
        const second = activityDate.getSeconds()
        
        if(hour > 12){
            const convertedHour = hour - 12;
            const time = convertedHour+":"+minute+":"+second+" PM";

            p.innerHTML =`<span class = 'mb-2'>You have Completed the task ${taskMassage} at  ${time}</span>`;
         }else{
            const time = hour+":"+minute+":"+second+" AM";

            p.innerHTML =`<span class = 'mb-2'>You have Completed the task ${taskMassage} at  ${time}</span>`;
         }


        activityMassage.appendChild(p);
        p.setAttribute('class','mb-6')
        p.classList.add('bg-[#F4F7FF]')
        p.classList.add('p-2')
        p.classList.add('m-5')
        p.classList.add('rounded-xl')

        const taskLeft = parseInt(document.getElementById('task-assigned').innerText)

        if(taskLeft === 0){
            alert('congrats!!! You have completed all the current task')
        }        

        
    })
}

document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('activity-massage').innerHTML=``;
})

document.getElementById('theme-btn').addEventListener('click',function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('body').classList.remove(`bg-[#F4F7FF]`);
    document.body.style.backgroundColor = '#' + randomColor;

})


document.getElementById('discover-new-btn').addEventListener('click',function(){
    window.location.href='./blog.html'
})




