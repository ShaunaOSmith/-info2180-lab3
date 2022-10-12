window.onload = function(){
    var square = document.getElementById('board');
    console.log(square);
    for (var i = 0; i < square.children.length; i++) {
        square.children[i].classList.add('square');
    }
    let circleturn = Boolean;
    circleturn = false;
    
    const x_turn = 'X'
    const O_turn = 'O'

    const winning_Combinations = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]

    positions = document.querySelectorAll('.square');
    newgamebutton = document.querySelector('.btn');
    console.log(newgamebutton);
    console.log(positions);

    

    newGame();

    newgamebutton.addEventListener('click', newGame);

    function newGame(){
        circleturn = false;
        target  = document.getElementById('status');
        target.textContent = 'Move your mouse over a square and click to play an X or an O.';
        target.classList.remove('you-won');

        positions.forEach(element => {
            element.textContent = '';
            element.classList.remove(x_turn);
            element.classList.remove(O_turn);
            element.addEventListener('mouseover', hoverPos);
            element.addEventListener('mouseout', stopHover);
            element.removeEventListener('click', placeMark);
            element.addEventListener('click', placeMark);

            
        });
      
    }

    function placeMark(element){
        const pos = element.target;
        const currentClass = circleturn ? O_turn : x_turn;
        if (circleturn){
            pos.textContent = "O";
            pos.classList.add(O_turn);
            pos.removeEventListener('mouseover', hoverPos);
            pos.removeEventListener('click', placeMark);
            if(victory(currentClass)){
                status();
                positions.forEach(element => {
                    element.removeEventListener('mouseover', hoverPos);
                    element.removeEventListener('click', placeMark);
                });
              
            }else{
                circleturn = false;
            
            }
            console.log(victory(currentClass));
            
        } else {
            pos.textContent = "X";
            pos.classList.add(x_turn);
            pos.removeEventListener('mouseover', hoverPos);
            pos.removeEventListener('click', placeMark);
            if(victory(currentClass)){
                status();
                positions.forEach(element => {
                    element.removeEventListener('mouseover', hoverPos);
                    element.removeEventListener('click', placeMark);
                });
            }else{
                circleturn = true;
            
            }
            console.log(victory(currentClass));
        }
        
    }
    function hoverPos(element){
        const pos = element.target;      
        pos.classList.add('hover');  
    }

    function stopHover(element){
        const pos = element.target;


        pos.classList.remove('hover');


    }

    function victory(currentClass){
        return winning_Combinations.some(combo =>{
            return combo.every(index => {
                return positions[index].classList.contains(currentClass)
            })
        })
    }

    function status(){
        let target = document.getElementById('status');
        if(circleturn){
            
            target.textContent = 'Congratulations! O is the Winner!';
            target.classList.add('you-won');
        } else{
            target.textContent = 'Congratulations! X is the Winner!';
            target.classList.add('you-won');
        }
        
    }


}
   





