const body = document.querySelector('body');
const themeButton = document.getElementById('theme-btn');

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
console.log(randomColor());

themeButton.addEventListener('click', () => {
    // console.log('clicked');
    body.style.backgroundColor = randomColor();
});



const completeBtn = document.querySelectorAll('.complete');
const createP = document.querySelector(".createElement");
const rimainBtn = document.querySelector('.remain');
const addBtn = document.querySelector('.add');
const time = document.getElementById('dateDay');

// const firstBtn = document.getElementById('1');
// const seondBtn = document.getElementById('2');
// const thirdBtn = document.getElementById('3');
// const fourthBtn = document.getElementById('4');
// const fivethBtn = document.getElementById('5');
// const sixthBtn = document.getElementById('6');


let task = 0;

function addTask() {
    const completedTasks = 23;
    task++;
    addBtn.innerText = `${completedTasks + task}`;
}

let encompleteTask = 0;

function ramainTask() {
    const completedTasks = 6;
    encompleteTask++;
    rimainBtn.innerText = `0${completedTasks - encompleteTask}`;
}
function showTime() {
    let now = new Date();
    return now.toLocaleTimeString();
};

console.log(showTime());

function dateTime(){
    const date = new Date();
    const day = date.getDay();
    const monthDay = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `${days[day]}, ${monthDay}/${month}/${year}`;
}
console.log(dateTime());

const tasks = {
    1: 'Fix Mobile Button Issue ',
    2: 'Add Dark Mode',
    3: 'Optimize  Home page ',
    4: 'Add new emoji 🤲',
    5: 'Integrate OpenAI API ',
    6: 'Improve Job searching'
};
console.log(tasks[1]);

const completedTasks = Object.keys(tasks).length;
// console.log(completedTasks);

completeBtn.forEach((btn) =>{
    btn.addEventListener(("click"), (e) => {
        const value = e.target.id;
        const taskName = tasks[value];
        
        if (taskName) {
            alert(`You have completed the task: ${taskName}`);
            const p = document.createElement('p');
            p.innerText = `You have completes the task: ${taskName} at ${showTime()}`;
            p.classList.add("allTask", "text-center", "rounded-lg", "p-4", "text-md");
            createP.appendChild(p);
            e.target.disabled = true;
            e.target.style.backgroundColor = 'grey';
            time.innerText = dateTime();
            addTask();
            ramainTask();
        }
        if (completedTasks === encompleteTask) {
            alert('All tasks are completed');
        }
    });
});

const removeP = document.getElementById("timeDisplay");

removeP.addEventListener('click', () =>{
    const allTask = document.querySelectorAll('.allTask');
    allTask.forEach((task) => {
        task.innerText = "";
    })
});

const anotherPage = document.getElementById("question");
anotherPage.addEventListener(('click'), () => {
    window.location.href = "./question.html";
});


// completeBtn.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const value = e.target.id
//         const p = document.createElement('p');
//         if (value === '1') {
//             alert('You have Complete The Task Add Dark Mode');
//             p.innerText = `You have Complete The Task Add Dark Mode at${showTime()}`;
//             createP.appendChild(p);
//             firstBtn.disabled = true;
//             firstBtn.style.backgroundColor = 'grey';
//             ramainTask();
//             addTask()
//         } else if (value === '2') {
//             alert('You have Complete The Task Add Light Mode');
//             p.innerText = `You have Complete The Task Add Light Mode at${showTime()}`;
//             createP.appendChild(p);
//             seondBtn.disabled = true;
//             seondBtn.style.backgroundColor = 'grey';
//             ramainTask();
//             addTask()
//         } else if (value === '3') {
//             alert('You have Complete The Task Add Random Color');
//             p.innerText = `You have Complete The Task Add Random Color at${showTime()}`;
//             createP.appendChild(p);
//             thirdBtn.disabled = true;
//             thirdBtn.style.backgroundColor = 'grey';
//             ramainTask();
//             addTask()
//         } else if (value === '4') {
//             alert('You have Complete The Task Add Task Counter');
//             p.innerText = `You have Complete The Task Add Task Counter at${showTime()}`;
//             createP.appendChild(p);
//             fourthBtn.disabled = true;
//             fourthBtn.style.backgroundColor = 'grey';
//             ramainTask();
//             addTask()
//         } else if (value === '5') {
//             alert('You have Complete The Task Add Complete Task Counter');
//             p.innerText = `You have Complete The Task Add Complete Task Counter at${showTime()}`;
//             createP.appendChild(p);
//             fivethBtn.disabled = true
//             fivethBtn.style.backgroundColor = 'grey';
//             ramainTask();
//             addTask()
//         } else if (value === '6') {
//             alert('You have Complete The Task Add Remain Task Counter');
//             p.innerText = `You have Complete The Task Add Remain Task Counter at${showTime()}`;
//             createP.appendChild(p);
//             sixthBtn.disabled = true;
//             sixthBtn.style.backgroundColor = 'grey';
//             ramainTask();
//             addTask()
//         }
//     });
// });




