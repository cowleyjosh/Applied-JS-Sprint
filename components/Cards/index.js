// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let getUrl = 'https://lambda-times-backend.herokuapp.com/articles';

 function getArticleData (getUrl) {

     // Get articles url
    axios.get(getUrl)
    .then( response => {

           // Get articles  
          let articleContent = []; 
          articleContent = response["data"]["articles"];      

           let articleName = "javascript";

           newArticle(articleContent,articleName);

           articleName = "bootstrap";

           newArticle(articleContent,articleName);

           articleName = "technology";

           newArticle(articleContent,articleName);

           articleName = "jquery";

           newArticle(articleContent,articleName);

           articleName = "node.js";

           newArticle(articleContent,articleName);

        })
     .catch( error => {
         console.log("Error:", error); // Logs error
     })


 };

 function newArticle(articleContent,articleName) {

     let y = "headline";  
    let z = "authorName";
    let p = "authorPhoto";

     for(i in articleContent[articleName]) {       

         // Gets the card-container DIV 
        let mainCardDiv = document.getElementsByClassName("cards-container")[0];

         // Create 4 DIVS and assign Class Names
        let newDivCard = document.createElement('div');
        newDivCard.classList.add('card'); 

         let newDivHL = document.createElement('div');
        newDivHL.classList.add('headline'); 
        newDivHL.innerText = articleContent[articleName][i][y];

         let newDivAuthor = document.createElement('div');
        newDivAuthor.classList.add('author'); 
        newDivAuthor.innerText = articleContent[articleName][i][z];

         let newDivImg = document.createElement('div');
        newDivImg.classList.add('img-container');

         // Create a SPAN
        let newSpan = document.createElement('span');
        // Create an IMG
        let newImg =  document.createElement('img');
        newImg.src = articleContent[articleName][i][p];    

        // Add the image to div
        newDivImg.appendChild(newImg);

         // Add image  and the span to author        
        newDivAuthor.appendChild(newDivImg);
        newDivAuthor.appendChild(newSpan);

         // add author to headline
        newDivHL.appendChild(newDivAuthor);

         // add headline to card
        newDivCard.appendChild(newDivHL);

         // add card to cards-container
        mainCardDiv.appendChild(newDivCard);

        }


 }


 getArticleData(getUrl);