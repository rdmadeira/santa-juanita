 window.onload = showContactoInputs;
 
 function showContactoInputs() {
        var contactoLink = document.getElementById("click-contacto");
            
        contactoLink.addEventListener('click', showContactoInputs);
        var sectionContacto = document.getElementById('contactos');
        var visibility = sectionContacto.style.visibility;
        if (visibility =='hidden') {
                sectionContacto.style.visibility = 'visible';
                sectionContacto.style.opacity = 1;
                
            } else {
                sectionContacto.style.visibility = 'hidden';
                sectionContacto.style.opacity = 0;
                
                }
    }
 
