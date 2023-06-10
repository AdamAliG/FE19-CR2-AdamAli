
let tasks = [
  { 
      taskName: "shopping", 
      image: "https://clipart-library.com/images/kiMnBkgrT.png", 
      description: "Shop for weekly groceries at Billa and Hofer.",
      location: "Austria",
      meeting: "2:00pm", 
      car:"Mustang",
      importance: 3
  },
  { 
    taskName: "shopping", 
    image: "https://clipart-library.com/images/kiMnBkgrT.png", 
    description: "Shop for weekly groceries at Billa and Hofer.",
    location: "Austria",
    meeting: "2:00pm", 
    car:"Mustang",
    importance: 2
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 1
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 2
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 4
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 5
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 4
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 3
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 2
},
{ 
  taskName: "shopping", 
  image: "https://clipart-library.com/images/kiMnBkgrT.png", 
  description: "Shop for weekly groceries at Billa and Hofer.",
  location: "Austria",
  meeting: "2:00pm", 
  car:"Mustang",
  importance: 2
},
];




let cards = document.querySelectorAll('.card');

// Select all span priority
let priority = document.querySelectorAll('.priority');

// Iterate over each card
priority.forEach(cardBody => {

  // Create importance button
  let importanceButton = document.createElement('button');
  importanceButton.className = 'btn btn-success mx-2 py-1';
  importanceButton.innerText = '0';

  // Event listener for the importanceButton
  importanceButton.addEventListener('click', function() {
    let currentImportance = parseInt(importanceButton.innerText);
    if(currentImportance < 5) {
        currentImportance += 1;
        importanceButton.innerText = currentImportance;

        // Change color based on importance
        if(currentImportance <= 1) {
            importanceButton.className = 'btn btn-success mx-2 py-1';
        } else if(currentImportance <= 3) {
            importanceButton.className = 'btn btn-warning mx-2 py-1';
        } else {
            importanceButton.className = 'btn btn-danger mx-2 py-1';
        }
    }
  });

  
  // Append Importance Button to Card Body
  cardBody.appendChild(importanceButton);


});
// Loop over each card
for(let i = 0; i < cards.length; i++) {
  let card = cards[i];
  let task = tasks[i];  

  
  // Find elements to update
  let cardTitle = card.querySelector('.card-title');
  let cardText = card.querySelector('.card-text');
  let cardImage = card.querySelector('.card-img-top');
  let cardBody = card.querySelector('.small-body');
 
  // Update elements with task data
  cardTitle.innerText = task.taskName;
  cardText.innerText = task.description;
  cardImage.src = task.image;
  cardBody.innerText = 
    "Location: " + task.location + "\n" +
    "Meeting: " + task.meeting + "\n" +
    "Car: " + task.car + "\n";
    

   // Create delete button
  document.querySelectorAll('.delete').forEach(function(deleteButton) {
    deleteButton.addEventListener('click', function(e) {
        e.preventDefault();
        let cardBody = card.querySelector('.card-body');
        // Reset the card body
        cardBody.innerText = 'DELETED';
        // Change card background color to red
        card.classList.add('bg-danger', 'text-white', 'text-center');
        let cardImage = card.querySelector('.card-img-top');
        cardImage.src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg";
        
    });
});
document.querySelectorAll('.done').forEach(function(doneButton) {
  doneButton.addEventListener('click', function(e) {
      e.preventDefault();
      // Change card background color to green
      card.classList.add('bg-success', 'text-white', 'text-center');
      let smallBody = card.querySelector('.small-body');
      smallBody.innerText = 'DONE';
      let cardImage = card.querySelector('.card-img-top');
      importanceButton.innerText = '0';
        importanceButton.className = 'btn btn-success mx-2 py-1 importance';
        cardImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWGnvtiVaYV7poI89Rj6aJJImbpnZdToZcQ&usqp=CAU";
  });
});
 


};





document.getElementById('sortAscending').addEventListener('click', () => sortCards(true));
document.getElementById('sortDescending').addEventListener('click', () => sortCards(false));


