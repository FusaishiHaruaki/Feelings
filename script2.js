document.addEventListener("DOMContentLoaded", function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var emotion = urlParams.get('emotion');
  
    var contentDiv = document.getElementById("content");
    
    var titleDiv = document.getElementById("titlee");
    
    // Update content based on the selected emotion
    if (emotion === "negative") {
        titleDiv = "Pick your specific negative emotion"
        contentDiv.innerHTML += "<button onclick='Anger()'>Anger</button>";
        contentDiv.innerHTML += "<button onclick='Anxious()'>Anxious</button>";
        contentDiv.innerHTML += "<button onclick='Embarrassed()'>Embarrassed</button>";
        contentDiv.innerHTML += "<button onclick='Helpless()'>Helpless</button>";
        contentDiv.innerHTML += "<button onclick='Sad()'>Sad</button>";
      } else if (emotion === "positive") {
        contentDiv.innerHTML += "<button onclick='Confident()'>Confident</button>";
        contentDiv.innerHTML += "<button onclick='Excited()'>Excited</button>";
        contentDiv.innerHTML += "<button onclick='Content()'>Content </button>";
        contentDiv.innerHTML += "<button onclick='Happy()'>Happy</button>";
        contentDiv.innerHTML += "<button onclick='Relaxed()'>Relaxed</button>";
      } else if (emotion === "neutral") {
        contentDiv.innerHTML += "<button onclick='Bored()'>Bored</button>";
        contentDiv.innerHTML += "<button onclick='Lazy()'>Lazy</button>";
        contentDiv.innerHTML += "<button onclick='Nervous()'>Nervous</button>";
        contentDiv.innerHTML += "<button onclick='Puzzled()'>Puzzled</button>";
        contentDiv.innerHTML += "<button onclick='Hungry()'>Hungry</button>";
      }
    });
    
    function buttonClicked() {
      alert("Button clicked!");
    }

    function redirectToPage(pageUrl, emotion) {
      window.location.href = pageUrl + '?emotion=' + emotion;
    }
    
    function Anger() {
      redirectToPage('quote.html', 'Anger');
    }
    
    function Anxious() {
      redirectToPage('quote.html', 'Anxious');
    }

    function Embarrassed() {
      redirectToPage('quote.html', 'Embarrassed');
    }

    function Helpless() {
      redirectToPage('quote.html', 'Helpless');
    }

    function Sad() {
      redirectToPage('quote.html', 'Sad');
    }

    function Confident() {
      redirectToPage('quote.html', 'Confident');
    }

    function Excited() {
      redirectToPage('quote.html', 'Excited');
    }

    function Content() {
      redirectToPage('quote.html', 'Content');
    }

    function Happy() {
      redirectToPage('quote.html', 'Happy');
    }

    function Relaxed() {
      redirectToPage('quote.html', 'Relaxed');
    }

    function Bored() {
      redirectToPage('quote.html', 'Bored');
    }

    function Lazy() {
      redirectToPage('quote.html', 'Lazy');
    }

    function Nervous() {
      redirectToPage('quote.html', 'Nervous');
    }

    function Puzzled() {
      redirectToPage('quote.html', 'Puzzled');
    }

    function Hungry() {
      redirectToPage('quote.html', 'Hungry');
    }



    


   
    
    