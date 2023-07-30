document.addEventListener("DOMContentLoaded", function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var emotion = urlParams.get('emotion');
  
    var contentDiv = document.getElementsByClassName("content");
    var content2Div = document.getElementsByClassName("content2");
    
    var titleDiv = document.getElementById("titleee");
    
    // Update content based on the selected emotion

    if (emotion === "Anger") {
        contentDiv[0].innerHTML += "Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.";
        content2Div[0].innerHTML += "source: https://www.goodreads.com/quotes/tag/anger";
      } else if (emotion === "Anxious") {
        contentDiv.innerHTML += "It's Okay to be Anger";
      } else if (emotion === "Embarrassed") {
        contentDiv.innerHTML += "<button onclick='buttonClicked()'>Bored</button>";
      } else if (emotion === "Helpless"){
        contentDiv.innerHTML += ""
      } else if (emotion === "Sad"){
        contentDiv.innerHTML += ""
      } else if (emotion === "Confident"){
        contentDiv.innerHTML += "Confidence is a plant of slow growth in an aged bosom.";
        contentDiv.innerHTML += "source: https://www.forbes.com/quotes/theme/confidence/";
      } else if (emotion === "Excited"){
        contentDiv.innerHTML += "The language of excitement is at best picturesque merely. You must be calm before you can utter oracles"
      } else if (emotion === "Content"){
        contentDiv.innerHTML += "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. -- Oprah Winfrey"
      } else if (emotion === "Happy"){
        contentDiv.innerHTML += "Most folks are about as happy as they make up their minds to be. - Abraham Lincoln"
      } else if (emotion === "Relaxed"){
        contentDiv.innerHTML += "Relax. No one else knows what they're doing either. - Ricky Gervais"
      } else if (emotion === "Bored"){
        contentDiv.innerHTML += ""
      } else if (emotion === "Lazy"){
        contentDiv.innerHTML += ""
      } else if (emotion === "Nervous"){
        contentDiv.innerHTML += ""
      } else if (emotion === "Puzzled"){
        contentDiv.innerHTML += ""
      } else if (emotion === "Hungry"){
        contentDiv.innerHTML += ""
      }
    });



    
    