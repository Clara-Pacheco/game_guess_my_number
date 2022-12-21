let againBtn = document.querySelector(".again")
let secretNumber = document.querySelector(".number")

let checkBtn = document.querySelector(".check")

let score = document.querySelector(".score")
let highScore = document.querySelector(".highscore")

let guess = Math.round(Math.random()*10*2)

console.log(guess)

checkBtn.addEventListener('click',check)

function check(){

  let userInput = Number(document.querySelector(".guess").value)

  // Validação para caso o usuário não tenha feito nenhum palpite

  if(userInput == 0){  // ou (!userInput) --> se não existir palpite
    document.querySelector('.message').textContent = '⛔ No number!'  
  }else if(guess == userInput){
    document.querySelector('.message').textContent = '🎉 Correct Number!'  
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    if(score.textContent > highScore.textContent){
      highScore.textContent = score.textContent
    }
    secretNumber.textContent = guess
  }else if(guess !== userInput){
      if(Number(score.textContent) > 1){
        document.querySelector('.message').textContent = userInput > guess ? ' 📈 Too high!' : '📉 Too low!'
        score.textContent = Number(score.textContent) - 1
    }
  }
}
  againBtn.addEventListener('click',function(){
    guess = Math.round(Math.random()*10*2)
    document.querySelector('.message').textContent = 'Start guessing...'  
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    score.textContent = 20
    secretNumber.textContent = '?'
    document.querySelector('.guess').value = ''

  })

