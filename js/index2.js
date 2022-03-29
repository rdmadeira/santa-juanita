function prueba() {
var sheet = document.getElementById('style1').sheet;
}
/* function prueba() {
var sheet = document.getElementById('style1').styleSheets;
var css_rules_num = sheet.cssRules.length;
var cssRules =sheet.cssRules.CSSRuleList
alert (cssRules[5]);

sheet.deleteRule(0);
sheet.insertRule("* { margin:50px; border: red 5px solid; }", css_rules_num[0]);
<<<<<<< HEAD
}
=======
} */



function cambioCss() {
    var sectionContacto = document.getElementById('contactos');
    sectionContacto.style.visibility = 'hidden';
}
/* function cambioCss(selector, property, value) { 
    
    for (var i=0; i<document.styleSheets.length;i++) {
        //Loop through all styles / Try add rule 
        try { 
            document.styleSheets[i].insertRule(selector + '{' +property+':'+ value + ';' + '}', document.styleSheets[i].cssRules.length); 
        } 
        catch(err) {
                try { 
                    document.styleSheets[i].addRule(selector, property+':'+value);
                } 
                catch(err) {}} //IE 
            } 
        }
 */
    /* Fuente: https://www.iteramos.com/pregunta/22306/cambio-de-valores-css-con-javascript */

