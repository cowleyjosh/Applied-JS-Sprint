// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let url = 'https://lambda-times-backend.herokuapp.com/topics';

 // Data Function
function topicData (url) {

     // Get topics from url
    axios.get(url)
    .then( response => {

           // Get topics  
          let topicContent = []; 
          topicContent = response["data"]["topics"];

           // Create Topics
          for(i in topicContent){

                 CreateTabs(topicContent[i]);

           };                 

     })
     .catch( error => {
         console.log("Error:", error); // If there is an error, log it to the console.
     })

 };

 // Created Tabs
function CreateTabs(tabTopic){

     // Get the main tab DIV
    let mainTabDiv = document.getElementsByClassName("topics")[0];

     // Create a new DIV
    let newDiv = document.createElement('div');
    newDiv.classList.add('tab'); 
    newDiv.innerText = tabTopic;

     // Add the new DIV 
    mainTabDiv.appendChild(newDiv);

  };

topicData(url);
