function displayContent(){
  let textbox = document.getElementById('content')
  let info = textbox.value

  let li = document.createElement('li')
  let infoText = document.getElementById('content-box')
  infoText.innerText = info
  document.body.appendChild(li)
}




// function displayContent(){
// /* Getting the value of the textbox and assigning it to the variable title. */
//   let textbox = document.getElementById('content')
//   let title = textbox.value

//   let span = document.createElement('li');
//   li.innerText = title;
//   document.body.appendChild(li)

// }

