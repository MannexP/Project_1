let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let score =document.querySelector('h5')
let scoreBoard = document.querySelector('.score')
let points = 0

q1.addEventListener('click', function(){
    points += 10
    score.innerHTML = points;
   
})

q2.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points;
   
})

q3.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points;

})

let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')

   

q4.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points;
   
})

q5.addEventListener('click', function(){
    points -= 10
    score.innerHTML = points;
   
})

q6.addEventListener('click', function(){
    points += 10
    score.innerHTML = points;
   
})
