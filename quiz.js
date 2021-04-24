const question=document.querySelector('.question');
const options=Array.from(document.querySelectorAll('.option-text'));
const scoreText=document.querySelector('.score-display');
const result=document.querySelector('.result');

let currentQuestion={}
let acceptedAnswer=true;
let score=0;
let questionCounter=0;
let questionsAvailable=[];

let questions = [
    {
        question: 'BRB...Wonder what that means',
        option1: 'Bring Rock Bands',
        option2: 'Bus Ride Back',
        option3: 'Be Right Back',
        option4: 'Big Road Block',
        answer: 3,
    },
    {
        question: "OMG!!!??",
        option1: "Over My Gate",
        option2: "Oh My God",
        option3: "On My Goal",
        option4: "Offer More Guidance",
        answer: 2,
    },
    {
        question: "IDK...What does that mean?",
        option1: "I dropped Ketchup",
        option2: "I do Know",
        option3: "I dropped Keys",
        option4: "I don't Know",
        answer: 4,
    },
    {
        question: "BTW..What does this mean?",
        option1: "Be the Winner",
        option2: "Between",
        option3: "By The Way",
        option4: "Born to Win",
        answer: 3,
    }
]

const points=100;
const max_questions=4;

startGame=()=>{
    questionCounter=0
    score=0
    questionsAvailable=questions
    newQuestion()
}

newQuestion =()=>{
    if(questionsAvailable.length===0 || questionCounter>max_questions){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionsIndex=Math.floor(Math.random() * questionsAvailable.length);
    currentQuestion=questionsAvailable[questionsIndex];
    question.innerText=currentQuestion.question;

    options.forEach(option =>{
        const number=option.dataset['number']
        option.innerText=currentQuestion['option'+number]
    })

    questionsAvailable.splice(questionsIndex, 1)

    acceptedAnswer=true
}

options.forEach(option=>{
    option.addEventListener('click', e =>{
        if(!acceptedAnswer) return

        acceptedAnswer=false;
        const selectedOption=e.target;
        const selectedAnswer=selectedOption.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct-ans' : 'wrong-ans' ;

        if(classToApply==='correct-ans'){
            incrementScore(points);
        }

        selectedOption.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedOption.parentElement.classList.remove(classToApply);
            newQuestion();

        }, 1000)

    })
})


incrementScore=(num)=>{
    score+=num;
    scoreText.innerText=score

}

startGame()