// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

 let headerContainer = document.getElementsByClassName("header-container")[0];
 let headerDiv = document.createElement('div');
 headerDiv.classList.add('header'); 
 let newspanDate = document.createElement('span');
 newspanDate.classList.add('date');
 newspanDate.innerText = 'MARCH 28, 2019'; 
 let newTitle = document.createElement('h1');
 newTitle.innerText = 'Lambda Times';
 let newspanTemp = document.createElement('span');
 newspanTemp.classList.add('temp'); 
 newspanTemp.innerText = '98°';
 headerDiv.appendChild(newspanDate);
 headerDiv.appendChild(newTitle);
 headerDiv.appendChild(newspanTemp);

 headerContainer.appendChild(headerDiv);

}


Header();
    