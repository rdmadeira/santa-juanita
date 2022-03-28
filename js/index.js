showContactoInputs();


function showContactoInputs() {
    
    var { visibility, sectionContacto } = newFunction();
        
        if (visibility =='hidden') {
                sectionContacto.style.visibility = 'visible';
                sectionContacto.style.opacity = 1;
                sectionContacto.style.width = 'min(60%,600px)';
                
            } else {
                sectionContacto.style.visibility = 'hidden';
                sectionContacto.style.opacity = 0;
                sectionContacto.style.width = 0;
                }
    }

    
function newFunction() {
    var sectionContacto = document.getElementById('contactos');
    var visibility = sectionContacto.style.visibility;
    return { visibility, sectionContacto };
}

function showMenuMobile() {
    var menuVertical = document.getElementById('ul-menu');
    var visibility2 = menuVertical.style.visibility;
    var iconoOculto = document.getElementById('menu-vertical');
    var display = iconoOculto.style.display;
    
    if (visibility2 == 'hidden' && matchMedia("(max-width:520px)")) {
        menuVertical.style.visibility = 'visible';
        menuVertical.style.opacity = 1;
    } 
    else if (visibility2 == 'visible' && matchMedia("(max-width:520px)")) {
        menuVertical.style.visibility = 'hidden';
        menuVertical.style.opacity = 0;
    } 
    else {
        menuVertical.style.visibility = 'visible';
        menuVertical.style.opacity = 1;
    }
    
    
}
