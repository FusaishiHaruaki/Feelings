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
      redirectToPage('page3.html', 'Anger');
    }
    
    function Anxious() {
      redirectToPage('page3.html', 'Anxious');
    }

    function Embarrassed() {
      redirectToPage('page3.html', 'Embarrassed');
    }

    function Helpless() {
      redirectToPage('page3.html', 'Helpless');
    }

    function Sad() {
      redirectToPage('page3.html', 'Sad');
    }

    function Confident() {
      redirectToPage('page3.html', 'Confident');
    }

    function Excited() {
      redirectToPage('page3.html', 'Excited');
    }

    function Content() {
      redirectToPage('page3.html', 'Content');
    }

    function Happy() {
      redirectToPage('page3.html', 'Happy');
    }

    function Relaxed() {
      redirectToPage('page3.html', 'Relaxed');
    }

    function Bored() {
      redirectToPage('page3.html', 'Bored');
    }

    function Lazy() {
      redirectToPage('page3.html', 'Lazy');
    }

    function Nervous() {
      redirectToPage('page3.html', 'Nervous');
    }

    function Puzzled() {
      redirectToPage('page3.html', 'Puzzled');
    }

    function Hungry() {
      redirectToPage('page3.html', 'Hungry');
    }



    


   
    
    
