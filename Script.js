let del = document.getElementsByClassName('delete')
for (let elem of del){
	elem.addEventListener('click', deleted)
}
function deleted(){
	this.parentNode.remove()
}

let chat = document.getElementById('chat')
let buttonMessage = document.getElementById('buttonMessage')



buttonMessage.addEventListener('click', getMessage)
function getMessage(){
	chat.style.display='block'
}

let openChat = document.getElementById('openChat')
let closeChat = document.getElementById('closeChat')
closeChat.addEventListener('click', buttonClose)
function buttonClose(){
	chat.style.display='none'
	openChat.value=''
}

let send = document.getElementById('message')
send.addEventListener('click', buttonSend)
function buttonSend(){
	openChat.value=''
}