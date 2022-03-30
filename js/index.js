window.onload = showContactoInputs();
 
var sectionContacto = document.getElementById('contactos');

document.getElementById('click-contacto').addEventListener('click', showContactoInputs);
function showContactoInputs() {
    var sectionContacto = document.getElementById('contactos');
    var visibility = sectionContacto.style.visibility;    
    if (visibility =='hidden') {
            sectionContacto.style.visibility = 'visible';
            sectionContacto.style.opacity = 1;
            sectionContacto.style.width = '100%';
            sectionContacto.style.maxWidth = '850px';
            
        } else {
            sectionContacto.style.visibility = 'hidden';
            sectionContacto.style.opacity = 0;
            sectionContacto.style.width = 0;
            }
}
document.getElementById('btn-cerrar').addEventListener('click', cambioCss)
function cambioCss() {
    sectionContacto.style.visibility = 'hidden';
    sectionContacto.style.opacity = 0;
    sectionContacto.style.width = 0;
}
document.getElementById('menu-vertical').addEventListener('click', showMenuMobile);   
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
/* document.getElementById('menu-productos').addEventListener('click', abrirProductos);
function abrirProductos() {
    var sheet = document.styleSheets[0];
    sheet.styleSheet.insertRule("ul.submenu-productos{display: flex;flex-direction: column;visibility: visible; opacity: 1;position: absolute; width: max-content; top: 39px; left: -10px;}", 40);
} */


