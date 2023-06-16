
let tasks = [
  { 
      taskName: "shopping", 
      image: "https://clipart-library.com/images/kiMnBkgrT.png", 
      description: "Shop for weekly groceries at Billa and Hofer.",
      location: "Austria",
      meeting: "2:00pm", 
      car:"Mustang",
      importance: ""
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
  importanceButton.className = 'importance btn btn-success mx-2 py-1';
  importanceButton.innerText = 0;

  // Event listener for the importanceButton
  importanceButton.addEventListener('click', function() {
    let currentImportance = parseInt(importanceButton.innerText);
    if(currentImportance < 5) {
        tasks.importance +=1;
        currentImportance += 1;
        importanceButton.innerText = currentImportance;
        tasks.importance= currentImportance;
        // Change color based on importance
        if(currentImportance <= 1) {
            importanceButton.className = 'importance btn btn-success mx-2 py-1';
        } else if(currentImportance <= 3) {
            importanceButton.className = 'importance btn btn-warning mx-2 py-1';
        } else {
            importanceButton.className = 'importance btn btn-danger mx-2 py-1';
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
 
    let deleteButtons = document.querySelectorAll('.delete');
    let doneButtons = document.querySelectorAll('.done');
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function(e) {
            let card = e.target.closest('.card');
            
            if (card) {
                let cardBody = card.querySelector('.card-body');
                let cardImage = card.querySelector('.card-img-top');
    
                if (cardBody && cardImage) {
                    cardBody.innerText = 'DELETED';
                    cardBody.classList.add('bg-danger', 'text-white', 'text-center');
                    cardImage.src = "https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg";
                }
            }
        });
    }
    for(let i = 0; i < doneButtons.length; i++) {
      doneButtons[i].addEventListener('click', function(e) {
          let card = e.target.closest('.card');
          
          if (card) {
              let cardBody = card.querySelector('.card-body');
              let cardImage = card.querySelector('.card-img-top');
  
              if (cardBody && cardImage) {
                  cardBody.innerText = 'done';
                  cardBody.classList.add('bg-success', 'text-white', 'text-center');
                  cardImage.src = "https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg";
              }
          }
      });
  }




  
  }



  

  
 document.getElementById('sortAscending').addEventListener('click', function() {
  tasks.sort((a, b) => a.importance - b.importance); 
  // 
  updateTasksDisplay();
});


document.getElementById('sortDescending').addEventListener('click', function() {
  tasks.sort((a, b) => b.importance - a.importance); 
  
  updateTasksDisplay();
});

  