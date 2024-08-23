const back = document.getElementsByClassName("back")[0];
const add =document.getElementById("add");
const input =document.getElementById("input");
const date1 = document.createElement('div');

add.addEventListener("click" ,function (){
const div1 = document.createElement("div");
const text = document.createElement("div");
text.className="text"



const time = document.getElementById("time").value;
const dateDiv = document.createElement("div");
const timeDiv =document.createElement("div");
timeDiv.style.color="white"
timeDiv.style.border ="1px white"
date1.style.color="white"
date1.innerHTML = time;
const date = new Date();
const formatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});
const formattedTime = formatter.format(time.value);
timeDiv.innerHTML= formattedTime;



div1.className="cube";
text.innerHTML = input.value;

div1.appendChild(timeDiv)
div1.appendChild(text);
back.appendChild(div1);

const deleteButton = document.createElement("button");
deleteButton.innerHTML="delete"
div1.appendChild(deleteButton);
deleteButton.addEventListener("click", function(){
    div1.remove();
});

const doneButton = document.createElement("button");
doneButton.innerHTML="done";
div1.appendChild(doneButton);
doneButton.addEventListener("click", function(){
    div1.remove();
    doneButton.remove();
    editButton.remove();
    div2.appendChild(div1);
});

const editButton = document.createElement("button");
editButton.innerHTML="edit"
div1.appendChild(editButton);

editButton.addEventListener("click", function(){
    const div3 = document.createElement("input");
    const div4 = document.createElement("button");
    div4.innerHTML="change"
    div1.appendChild(div4);
    div1.appendChild(div3);
    div4.addEventListener("click", function(){
    const div3Value = div3.value;
    div1.firstChild.innerHTML = div3Value;
    div3.remove();
    div4.remove();
});
});
div1.appendChild(date1)



if(text.innerHTML === ""){
    doneButton.remove();
    editButton.remove();
    deleteButton.remove();
    div1.remove();
    alert("please type something!!!")
}
input.value = "";
});
const div2 =  document.createElement("div");
div2.className="Done"
div2.innerHTML="Completed things:"
back.appendChild(div2);

const personal = document.getElementById("personal");
const personal2 = document.getElementById("personal2");
const personal3 = document.getElementById("personal3");
let Name2 = localStorage.getItem('Name')
personal.innerHTML = Name2;
let email2 = localStorage.getItem('Email')
personal2.innerHTML = email2
let Number2 = localStorage.getItem('Number')
personal3.innerHTML = Number2;
console.log("asdf")