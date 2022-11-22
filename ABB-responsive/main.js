var search = document.querySelector('#search');
var midhearder = document.querySelector('#header-mid');
var menu = document.querySelector('#items');
var bottom = document.querySelector('#header-b');

function Search(){
    search.style.display = 'block';
    midhearder.style.display = 'none';
    bottom.style.display = 'none';
}
var btn = document.querySelector('#close');

function Close(){
    search.style.display = 'none';
    midhearder.style.display = 'block';
    bottom.style.display = 'block';
}
function Dropdown(){
    menu.style.display = 'block';
   
}