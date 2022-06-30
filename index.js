let dataContainer = document.querySelector(".mom__dataContainer");
let button = document.querySelector(".mom__button");
let box = document.querySelector(".inputContainer__input");
let arrKey = ["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"];
button.addEventListener("click", promise);

function promise(){
    const endpoint = createEndpoint(box.value);
    fetch(endpoint)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        x = [data.name,data.height,data.mass,data.hair_color,data.skin_color,data.eye_color,data.birth_year,data.gender];
        append(x);
    })
    .catch(function(){
        appendTo.textContent = "AN ERROR BRO";
    });
}

// This allows for different values to be pulled from the API
function createEndpoint(index){
    return "https://swapi.dev/api/people/" + index + '/';
}

// Deletes any existing data on the page in that moment.
function clearAppend() {
    arr = ["Name:","Height:","Mass:","Hair Color:", "Skin Color:" , "Eye Color:", "Birth Year:", "Gender:"];
    for(let i = 0;i < arr.length;i++){
        let className = ".detail"+i;
        let appendTo = document.querySelector(className);
        appendTo.textContent= arr[i];
    } 
}

// Mounts onto arry onto page
function append(arry) {
    clearAppend();
    for(let i = 0;i < 8;i++){
        let className = ".detail"+i;
        let appendTo = document.querySelector(className);
        appendTo.textContent = appendTo.textContent + " " + arry[i];
    } 
}

//         add | remove | start | end
// push      X |        |       | X
//  pop        |    X   |       | X
// unshift   X |        |   X   |   
// shift       |    X   |   X   |