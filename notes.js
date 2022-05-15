//console.log("arju");
showNotes();
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let addtxt=document.getElementById("addtxt");
    let addtitle=document.getElementById("addtitle");
    let notes=localStorage.getItem("notes");
    if (notes===null)
    {
    notesObj=[];
    }
    else
    {
    notesObj=JSON.parse(notes);
    }
    let myObj={
        title:addtitle.value,
        text:addtxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value="";
    addtitle.value="";
   // console.log(notesObj);
    showNotes();
})


// function to show elements from local storage
function showNotes()
{
    let notes=localStorage.getItem("notes");  
    if (notes===null)
    {
    notesObj=[];
    }
    else
    {
    notesObj=JSON.parse(notes);//converts string to objects
    }
    let html="";
    notesObj.forEach(function(element,index){
        if (element.title!="" || element.text!="")
        {
    html += `<div class="notecard card mx-2 my-2" style="width: 21.5rem;">
           <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>
            </div>`;
        }
        

 })
 let notesEle=document.getElementById("notes");
 if (notesObj.length!=0)
 {
 notesEle.innerHTML=html;
 }
 else{
    notesEle.innerHTML="<h4>Nothing to show, add a note</h4>";
    
 }
}

// function to delete a note

function deleteNote(index)
{
//console.log("deleting",index);
let notes=localStorage.getItem("notes");
if (notes===null)
{
notesObj=[];
}
else
{
notesObj=JSON.parse(notes);
}
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));
showNotes();
}

searchtxt=document.getElementById("searchtxt");
searchtxt.addEventListener("input",function(){
    let inputval=searchtxt.value;
  //  console.log("input",searchtxt.value);
    let notecards=document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        let cardtitle=element.getElementsByTagName("h5")[0].innerText;
       // console.log(cardtxt);
        if (cardtxt.includes(inputval) || cardtitle.includes(inputval))
        {
        element.style.display="block";
        }
        else
        {
        element.style.display="none";
        }
    })
})