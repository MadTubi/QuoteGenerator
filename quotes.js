//An array holding the quotes
const quotes = ["The truth is, no one of us can be free until everybody is free.", 
    "Tell me, what is  it you plan to do with your one wild and precious life?",
    "Let the beauty of what you love be what you do .",
    "It takes courage to grow up and become who you really are.",
    "In three words I can sum up everything I've learned about life: it goes on."
];

//an array holding the authors
const authors = [
    "Maya Angelou",
    "Mary Oliver",
    "Rumi",
    "E.E. Cummings",
    "Robert Frost"

];

const button = document.getElementById("clickBTN");//variable for the button when clicked
const author = document.getElementById("author");//variable to replace the contents of the authors
const num = document.getElementById("num");//the nujmbe rof quote we are on

var quoteCount = 1;//keeps up with the number of quote we are on
var updateArray = 0;//keeps up with the index of the arrays

//function that when then button is clicked, it updates the div to 
//have a quote, the author, and the number out of 5 we are on, when it
button.addEventListener("click", function(){

    document.getElementById("child").textContent = quotes[updateArray];
    author.textContent ="By " + authors[updateArray];

    updateArray = (updateArray+1)%quotes.length;//resets the array back to zero after it reaches the last number

    num.textContent = quoteCount+"/5"
    quoteCount+=1;

    //resets the variable back to 1
    if(quoteCount >5){
        quoteCount = 1;
    }
    



});