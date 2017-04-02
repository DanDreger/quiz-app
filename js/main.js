






function gradeTest () {

var quiz = [
{	answer: 90,
	userAnswer: document.getElementById("q1").value }, 
{	answer: 60.6,
	userAnswer: document.getElementById("q2").value }, 
{	answer: 9,
	userAnswer: document.getElementById("q3").value }, 
{	answer: 108,
	userAnswer: document.getElementById("q4").value }, 
{	answer: 73,
	userAnswer: document.getElementById("q5").value }, 
{	answer: 56,
	userAnswer: document.getElementById("q6").value }, 
{	answer: 762,
	userAnswer: document.getElementById("q7").value }]

var i = 0
var right = 0
var wrong = 0
for (var i = 0; i<quiz.length; i++) {
	var answer = quiz[i].answer
	var guess = quiz[i].userAnswer
	if (answer == guess){
		right++
	} else {
		wrong++
	}
	console.log(right)
	console.log(wrong)
}


var x = document.createTextNode(right)
var y = document.createTextNode(wrong)

var yesDiv = document.createElement('div')
yesDiv.appendChild(x)
document.getElementById('correct').appendChild(yesDiv)

var noDiv = document.createElement('div')
noDiv.appendChild(y)
document.getElementById('incorrect').appendChild(noDiv)


}


















