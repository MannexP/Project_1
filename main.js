const theme = new Audio();
theme.src = "theme.mp3";
const ding = new Audio();
ding.src = "ding.mp3";
const buzzer = new Audio();
buzzer.src = "buzzer.mp3";

function pause() {
theme.pause();
theme.currentTime = 0;   
}

function refresh() {
    setTimeout(function(){ location.reload(true);}, 1500);
}


let score =document.querySelector('h1')
let scoreBoard = document.querySelector('.score')
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
let box7 = document.querySelector('#box7')
let box8 = document.querySelector('#box8')
let box9 = document.querySelector('#box9')
let points = 0
let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')

q1.addEventListener('click', function(){
   points += 10
   score.innerHTML = points
   if(points === 90){
    swal("YOU WIN!", "", "success");
    refresh() 
}
   box1.style.backgroundColor = "green"
   box1.removeAttribute('data-toggle')
   pause()   
})
q2.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box1.style.backgroundColor = "red" 
    box1.removeAttribute('data-toggle')
    pause()
    if(box1.style.backgroundColor === "red"){
    refresh()  
    }

    
})

q3.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box1.style.backgroundColor = "red"   
    box1.removeAttribute('data-toggle')
    pause()  
    if(box1.style.backgroundColor === "red"){
        refresh()  
        }
})

let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')

    q4.addEventListener('click', function(){
        points -= 10
        score.innerHTML =points
        box2.style.backgroundColor = "red"   
        box2.removeAttribute('data-toggle')
        pause()
        if(box2.style.backgroundColor === "red"){
            refresh()  
            }
        
    })

     q5.addEventListener('click', function(){
        points += 10
        score.innerHTML = points
        if(points === 90){
            swal("YOU WIN!", "", "success");
            refresh() 
        }
        box2.style.backgroundColor = "green"
        box2.removeAttribute('data-toggle')
        pause()
    })

        q6.addEventListener('click', function(){
            points -= 10
            score.innerHTML = points
            box2.style.backgroundColor = "red"   
            box2.removeAttribute('data-toggle')
            pause()
            if(box2.style.backgroundColor === "red"){
                refresh()  
                }
        })

let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')

q7.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box3.style.backgroundColor = "red"   
    box3.removeAttribute('data-toggle')
    pause()
    if(box3.style.backgroundColor === "red"){
        refresh()  
        }
                 
})

q8.addEventListener('click', function(){
    points += 10
    score.innerHTML =points
    if(points === 90){
        swal("YOU WIN!", "", "success");
        refresh() 
    }
    box3.style.backgroundColor = "green"
    box3.removeAttribute('data-toggle')
    pause()
   
})

q9.addEventListener('click', function(){
    points -= 10
    score.innerHTML =points
    box3.style.backgroundColor = "red"   
    box3.removeAttribute('data-toggle')
    pause()
    if(box3.style.backgroundColor === "red"){
        refresh()  
        }
   
})

        let q10 = document.querySelector('#q10')
        let q11 = document.querySelector('#q11')
        let q12 = document.querySelector('#q12')

            q10.addEventListener('click', function(){
                points -= 10
                score.innerHTML =" Score: $" + points
                box4.style.backgroundColor = "red"   
                box4.removeAttribute('data-toggle')
                pause()
                if(box4.style.backgroundColor === "red"){
                    refresh()  
                    }

            })
            
            q11.addEventListener('click', function(){
                points += 10
                score.innerHTML =points
                if(points === 90){
                    swal("YOU WIN!", "", "success");
                    refresh() 
                }
                box4.style.backgroundColor = "green"
                box4.removeAttribute('data-toggle')
                pause()  
            })
            
            q12.addEventListener('click', function(){
                points -= 10
                score.innerHTML =points
                box4.style.backgroundColor = "red"   
                box4.removeAttribute('data-toggle')
                pause() 
                if(box4.style.backgroundColor === "red"){
                    refresh()  
                    } 
            })
let q13 = document.querySelector('#q13')
let q14 = document.querySelector('#q14')
let q15 = document.querySelector('#q15')
    
q13.addEventListener('click', function(){
    points -= 10
    score.innerHTML =points
    box5.style.backgroundColor = "red"   
    box5.removeAttribute('data-toggle')
    pause()
    if(box5.style.backgroundColor === "red"){
        refresh()  
        }
})

q14.addEventListener('click', function(){
    points += 10
    score.innerHTML = points
    if(points === 90){
        swal("YOU WIN!", "", "success");
        refresh() 
    }
    box5.style.backgroundColor = "green"
    box5.removeAttribute('data-toggle')
    pause()
    if(box5.style.backgroundColor === "red"){
        refresh()  
        }
})

q15.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box5.style.backgroundColor = "red"   
    box5.removeAttribute('data-toggle')
    pause()
    if(box5.style.backgroundColor === "red"){
        refresh()  
        }
})


        let q16 = document.querySelector('#q16')
        let q17 = document.querySelector('#q17')
        let q18 = document.querySelector('#q18')
            
        q16.addEventListener('click', function(){
            points -= 10
            score.innerHTML =points
            box6.style.backgroundColor = "red"   
            box6.removeAttribute('data-toggle')
            pause()
            if(box6.style.backgroundColor === "red"){
                refresh()  
                }
        })
        
        q17.addEventListener('click', function(){
            points -= 10
            score.innerHTML = points
            box6.style.backgroundColor = "red"
            box6.removeAttribute('data-toggle')
            pause()  
            if(box6.style.backgroundColor === "red"){
                refresh()  
                }     
        })
        
        q18.addEventListener('click', function(){
            points += 10
            score.innerHTML =points
            if(points === 90){
                swal("YOU WIN!", "", "success");
                refresh() 
            }
            box6.style.backgroundColor = "green"   
            box6.removeAttribute('data-toggle')
            pause()
        })
        
let q19 = document.querySelector('#q19')
let q20 = document.querySelector('#q20')
let q21 = document.querySelector('#q21')
            
q19.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box7.style.backgroundColor = "red"   
    box7.removeAttribute('data-toggle')
    pause()
    if(box7.style.backgroundColor === "red"){
        refresh()  
        }
})
            
                        
q20.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box7.style.backgroundColor = "red"   
    box7.removeAttribute('data-toggle')
    pause()
    if(box7.style.backgroundColor === "red"){
        refresh()  
        }
})

                        
q21.addEventListener('click', function(){
    points += 10
    score.innerHTML = points
    if(points === 90){
        swal("YOU WIN!", "", "success");
        refresh() 
    }
    box7.style.backgroundColor = "green"   
    box7.removeAttribute('data-toggle')
    pause()
})

let q22 = document.querySelector('#q22')
let q23 = document.querySelector('#q23')
let q24 = document.querySelector('#q24')
            
q22.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box8.style.backgroundColor = "red"   
    box8.removeAttribute('data-toggle')
    pause()   
    if(box8.style.backgroundColor === "red"){
        refresh()  
        }           
})
                        
q23.addEventListener('click', function(){
    points += 10
    score.innerHTML = points
    if(points === 90){
        swal("YOU WIN!", "", "success");
        refresh() 
    }
    box8.style.backgroundColor = "green"   
    box8.removeAttribute('data-toggle')
    pause()
})
   

                        
q24.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box8.style.backgroundColor = "red"   
    box8.removeAttribute('data-toggle')
    pause()
    if(box8.style.backgroundColor === "red"){
        refresh()  
        }
})
let q25 = document.querySelector('#q25')
let q26 = document.querySelector('#q26')
let q27 = document.querySelector('#q27')
            
q25.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box9.style.backgroundColor = "red"   
    box9.removeAttribute('data-toggle')
    pause() 
    if(box9.style.backgroundColor === "red"){
        refresh()  
        }               
})
                        
q26.addEventListener('click', function(){
    points += 10
    score.innerHTML = points
    if(points === 90){
        swal("YOU WIN!", "", "success");
        refresh() 
    }
    box9.style.backgroundColor = "green"   
    box9.removeAttribute('data-toggle')
    pause()
   
})
                        
q27.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box9.style.backgroundColor = "red"   
    box9.removeAttribute('data-toggle')
    pause()
    if(box9.style.backgroundColor === "red"){
        refresh()  
        }
})










        