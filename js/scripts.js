/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/* en.json */
{
    "p1": "en text try 1"
}
/* fr.json*/
{
    "p1": "fr text 1er essai"
}
//fnct update lng
function updateContent(langData)
{
    document.querySelectorAll('[data-i8n]').forEach(Element => {
        const key = Element.getAttribute('data-i18n');
        Element.textContent = langData[key];
    });
    
}