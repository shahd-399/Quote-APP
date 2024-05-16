var button = document.getElementById('btn');
var output = document.getElementById('output');

const arrQuotes = [
    {
        author: '--Frank Zappa', 
        quote: '\“So many books, so little time.\”'
    },
    {
        author: '--Marcus Tullius Cicero', 
        quote: '\“A room without books is like a body without a soul.\”'
    },
    {
        author: '--Dr. Seuss', 
        quote: '\“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.\”'
    },
    {
        author: '--Wayne Gretzy', 
        quote: '\“A room without books is like a body without a soul.\”'
    },
    {
        author: '--Mark Twain', 
        quote: '\“If you tell the truth, you don\'t have to remember anything.\”'
    },
    {
        author: '--C.S. Lewis, The Four Loves', 
        quote: '\“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .\”'
    },
    {
        author: '--Elbert Hubbard', 
        quote: '\“A friend is someone who knows all about you and still loves you.\”'
    },
    {
        author: '--Martin Luther King', 
        quote: '\“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.\”'
    },
    {
        author: '--Andre Gide, Autumn Leaves', 
        quote: '\“It is better to be hated for what you are than to be loved for what you are not.\”'
    },
];


button.onclick = function() {
    display();
}

function display(){
    var random = parseInt(Math.random()*arrQuotes.length);
    
    var box =`<p>${arrQuotes[random].quote}</p>
    <p>${arrQuotes[random].author}</p>`

    output.innerHTML=box;
}