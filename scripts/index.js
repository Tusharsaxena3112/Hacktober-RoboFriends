var robots = [{
    id:"One",
    image:"https://robohash.org/1"
},{
    id:"Two",
    image:"https://robohash.org/2"
},{
    id:"Three",
    image:"https://robohash.org/3"
},{
    id:"Four",
    image:"https://robohash.org/4"
},{
    id:"Five",
    image:"https://robohash.org/5"
},{
    id:"Six",
    image:"https://robohash.org/6"
},{
    id:"Seven",
    image:"https://robohash.org/7"
},{
    id:"Eight",
    image:"https://robohash.org/8"
},{
    id:"Nine",
    image:"https://robohash.org/9"
}]

var container = document.getElementById("container");
robots.forEach(element => {
    container.innerHTML += `<div id=${element.id} class="robot">
    <img  src=${element.image} title="Hi! I am a robot ${element.id}">
    </div>`
});
