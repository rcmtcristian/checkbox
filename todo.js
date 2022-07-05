
/* Selecting the content of the textbox. */
let textbox = document.querySelector('content')
/* Assigning the value of the textbox to the variable info. */
let info = textbox.value
/* Assigning the value of the textbox to the variable task. */
let task = document.getElementById('fill')
// let taskContent = document.getElementById('content-box').value
/* Assigning the value of the textbox to the variable task. */
let taskContent = info
/* Creating an array of tasks. */
let tasks = [task]
document.querySelector('#create').addEventListener('click', displayContent)

function displayContent(){
  for( i = 0; i < task; i++){
  tasks.splice(1,0, task)
}
}







// function displayContent(){
//   let textbox = document.getElementById('content')
//   let info = textbox.value

//   let li = document.createElement('li')
//   let infoText = document.getElementById('content-box')
//   infoText.innerText = info
//   document.body.appendChild(li)
// }




// function displayContent(){
// /* Getting the value of the textbox and assigning it to the variable title. */
//   let textbox = document.getElementById('content')
//   let title = textbox.value

//   let span = document.createElement('li');
//   li.innerText = title;
//   document.body.appendChild(li)

// }

