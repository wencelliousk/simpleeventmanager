let eventName=document.getElementById("eventName")
let eventDate=document.getElementById("eventDate")
let eventVenue=document.getElementById("eventVenue")
let addEventButton=document.getElementById("addEventButton")
let eventList=document.getElementById("eventList")

addEventButton.addEventListener("click",function(){

    let name=eventName.value
    let date=eventDate.value
    let venue=eventVenue.value

    if(name=="", date=="", venue==""){
        alert("Please fill all the fields")
        return
    }

    let newEvent=document.createElement("li")
    newEvent.className="event"

    let eventText=document.createElement("span")
    eventText.textContent="Event: " + name + " , Date: " + date + " , Venue: " + venue

    let deleteButton=document.createElement("button")
    deleteButton.textContent="Delete"
    deleteButton.className="delete-button"

    deleteButton.addEventListener("click",function(){
        newEvent.remove()
    })

    newEvent.append(eventText)
    newEvent.append(deleteButton)

    eventList.append(newEvent)

    eventName.value=""
    eventDate.value=""
    eventVenue.value=""

})