
const quote = document.querySelector(".quote");
const tweet = document.querySelector(".tweet");
const newquote = document.querySelector(".newquote");

newquote.addEventListener("click", getjoke);

getjoke();

function getjoke(){
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            "Accept": "application/json"
        }
    }).then(function(response){
        return response.json();
    }).then(function(data){
        const joke = data.joke;
        quote.innerText = joke;
const tweetlink = `https://twitter.com/share?text=${joke}`;

tweet.setAttribute("href", tweetlink);
    }).catch(function(error){

        quote.innerText = "Opps! Some error happened!";
        tweet.removeAttribute("href");
        
    })
}


