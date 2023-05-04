let input = document.getElementById("addInput");

input.addEventListener("keyup", function(event) {
    if(event.keyCode===13) {
        event.preventDefault();
        addToList()
    }
})

function addToList() {

    const input = document.getElementById("addInput");
    const listBox = document.querySelector("ul");
    const buttonDiv = document.createElement("div")
    const lista = document.createElement("li");

    const inputValue = input.value;
    const text = document.createTextNode(inputValue);
    
    const button = document.createElement('button');
    const btnImg = document.createElement('img')
    button.setAttribute('class', 'btn')
    btnImg.setAttribute('src','./images/delete_FILL0_wght400_GRAD0_opsz48.svg')


    lista.appendChild(text);
    button.appendChild(btnImg)
    buttonDiv.appendChild(button)
    lista.appendChild(buttonDiv);
    lista.setAttribute('class', 'listItem')

    if (inputValue == "") {
        alert('write something')
    } else {
        listBox.append(lista)
    }
    input.value = ""
};

document.querySelector("#lista").addEventListener('click', function(e) {
    const target = e.target;
     
    if(target.matches('img')) {
            const divB = target.parentElement;
            const DivA = divB.parentElement;
            DivA.parentElement.remove()
        } 
        
        else if(target.matches('button')) {
            const div = target.parentElement
            div.parentElement.remove()
        }

        else if(target.matches('li')) {
        target.classList.toggle('check');
        }
    })

