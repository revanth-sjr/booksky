var bookauthorinput = document.getElementById("book-author-input")

//selecting popup box overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton= document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
})

 //select cancel button
 var cancelpopup = document.getElementById("cancel-popup")
 cancelpopup.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
 })

 //select container,add-book,book-title-input,book-author-input,book-description-input

 var container = document.querySelector(".container")
 var addbook = document.getElementById("add-book")
 var bookTitleInput = document.getElementById("book-title-input") 
 var bookAuthorInput = document.getElementById("book-author-input")
 var bookDescriptionInput = document.getElementById("book-description-input")

 addbook.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=`<h2>${bookTitleInput.value}</h2>
     <h5>${bookAuthorInput.value}</h5>
     <p>${bookDescriptionInput.value}</p>
     <button>Delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"
 })

 function deletebook(event)
 {
  event.target.parentElement.remove()
 }