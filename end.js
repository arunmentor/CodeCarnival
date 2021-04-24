const score=document.querySelector('.score');
const result=document.querySelector('.result');
const mostRecentScore = localStorage.getItem('mostRecentScore')


if(mostRecentScore==400){
    result.innerText="Cool Percentage: 100%"
}else if(mostRecentScore==300){
    result.innerText="Cool Percentage: 75%"
}else{
    result.innerText="Try harder next time"
}
score.innerText='You got a score of ' + mostRecentScore;


