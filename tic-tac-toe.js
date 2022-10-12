window.onload = function(){
    var square = document.getElementById('board');
    console.log(square);
    for (var i = 0; i < square.children.length; i++) {
        square.children[i].classList.add('square');
    }
}
   





