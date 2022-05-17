//HEADER MENU DROPDOWN
var buttonDropdown = document.querySelectorAll('.button-dropdown');
var targetDropdown  = document.querySelectorAll('.dropdown-content');
var aux = document.querySelectorAll(".dropdown");
window.onload = allFunctions;

function allFunctions(){
    openDropdown();
    activeButton();
}

function clearActiveDropdown(){
    for(var i=0;i<buttonDropdown.length;i++){
        targetDropdown[i].classList.remove("show-dropdown")
    }
}

function openDropdown(){
    for(var i=0;i<buttonDropdown.length;i++){
        if(buttonDropdown[i].addEventListener('click', function(event){
            switch (event.target.id) {
                case "dropdown-language":
                    if(targetDropdown[0].classList.contains("show-dropdown")){
                        targetDropdown[0].classList.remove("show-dropdown");
                    }else{
                        targetDropdown[0].classList.add("show-dropdown");
                    }
                    break;
                case "dropdown-coin":
                    if(targetDropdown[1].classList.contains("show-dropdown")){
                        targetDropdown[1].classList.remove("show-dropdown");
                    }else{
                        targetDropdown[1].classList.add("show-dropdown");
                    }
                    break;
                default:
                    
                    break;
            }
        }));
    }
    //TROCA DO TEXTO DO DROPDOWN
    if(aux[1].querySelector("a").addEventListener('click', function(){
        var auxChange = aux[1].querySelector("span").innerHTML;
        aux[1].querySelector("span").innerHTML = aux[1].querySelector("a").innerHTML;
        aux[1].querySelector("a").innerHTML = auxChange;
    }));
    if(aux[0].querySelector("a").addEventListener('click', function(){
        var auxChange = aux[0].querySelector("span").innerHTML;
        aux[0].querySelector("span").innerHTML = aux[0].querySelector("a").innerHTML;
        aux[0].querySelector("a").innerHTML = auxChange;
    }));
}

window.addEventListener('click', function(event){
    if(event.target.id != "dropdown-coin" && event.target.id != "dropdown-language"){
        clearActiveDropdown();
    }
}) 

//ATIVAR O BOTAO AO CLICAR
var targetNav  = document.querySelectorAll('.nav-link');

function activeButton(){
    for(var i=0;i<targetNav.length;i++){
        if(targetNav[i].addEventListener('click', function(event){
            //console.log(event.target.id)
            for(var i=0;i<targetNav.length;i++){
                targetNav[i].classList.remove("active");
            }
            targetNav[parseInt(event.target.id)-1].classList.add("active");
        }));
    }
}

