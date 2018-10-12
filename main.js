
let score =document.querySelector('h5')
let scoreBoard = document.querySelector('.score')
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let box5 = document.querySelector('#box5')
let points = 0

let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')

q1.addEventListener('click', function(){
    points += 10
    score.innerHTML = points
    box1.style.backgroundColor = "green"
})

q2.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box1.style.backgroundColor = "red" 
})

q3.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box1.style.backgroundColor = "red"   
})

        let q4 = document.querySelector('#q4')
        let q5 = document.querySelector('#q5')
        let q6 = document.querySelector('#q6')

        q4.addEventListener('click', function(){
            points -= 10
            score.innerHTML = points
            box2.style.backgroundColor = "red"
        
        })

        q5.addEventListener('click', function(){
        points += 10
        score.innerHTML = points
        box2.style.backgroundColor = "green"
                        })

        q6.addEventListener('click', function(){
        points -= 10
        score.innerHTML = points
        box2.style.backgroundColor = "red"
        })

let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')

q7.addEventListener('click', function(){
points -= 10
score.innerHTML = points
box3.style.backgroundColor = "red"               
})

q8.addEventListener('click', function(){
    points += 10
    score.innerHTML = points
    box3.style.backgroundColor = "green"
})

q9.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points
    box3.style.backgroundColor = "red"
})

        let q10 = document.querySelector('#q10')
        let q11 = document.querySelector('#q11')
        let q12 = document.querySelector('#q12')

            q10.addEventListener('click', function(){
                points -= 10
                score.innerHTML = points
                box4.style.backgroundColor = "red"               
                })
            
            q11.addEventListener('click', function(){
                points += 10
                score.innerHTML = points
                box4.style.backgroundColor = "green"
            })
            
            q12.addEventListener('click', function(){
                points -= 10
                score.innerHTML = points
                box4.style.backgroundColor = "red"
            })
let q13 = document.querySelector('#q13')
let q14 = document.querySelector('#q14')
let q15 = document.querySelector('#q15')
    
q13.addEventListener('click', function(){
points -= 10
score.innerHTML = points
box5.style.backgroundColor = "red"               
})
                
q14.addEventListener('click', function(){
points += 10
score.innerHTML = points
box5.style.backgroundColor = "green"
})
                
q15.addEventListener('click', function(){
points -= 10
score.innerHTML = points
box5.style.backgroundColor = "red"
})