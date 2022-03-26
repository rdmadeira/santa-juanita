function showContactoInputs() {
        var contactoLink = document.getElementById('click-contacto');
        
        var sectionContacto = document.getElementById('contactos');

        var visibility = sectionContacto.style.visibility;
        
        if (visibility=='hidden') {
            sectionContacto.style.visibility = 'visible';
            sectionContacto.style.opacity = 1;
            sectionContacto.style.right = '0px';

        } else {
            sectionContacto.style.visibility = 'hidden';
            sectionContacto.style.opacity = 0;
            sectionContacto.style.right = '-100vw';
        }
}