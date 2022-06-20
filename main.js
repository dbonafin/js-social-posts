// MILESTONE 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-dd-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// Create the array that will contains all the posts with their details
const postsArray = [
    {
        id: 1,
        name: "Phil Mangione",
        userpic: "https://unsplash.it/300/300?image=15",
        date: "4 mesi fa",
        text: "lorem ipsum dolor sit amet with some extra text ecc ecc",
        img: "https://unsplash.it/600/300?image=171",
        likes: 80
    },
    {
        id: 2,
        name: "Sofia Perlari",
        userpic: "https://unsplash.it/300/300?image=432",
        date: "06/20/2022",
        text: "Beautiful day!",
        img: "https://unsplash.it/600/300?image=671",
        likes: 130
    },
    {
        id: 3,
        name: "Giulio Bot",
        userpic: "https://unsplash.it/300/300?image=132",
        date: "Appena pubblicato",
        text: "Who wants to take a coffee in the new starbucks of Turin?",
        img: null,
        likes: 05
    }
];


// MILESTONE 2 
// Prendendo come riferimento il layout di esempio presente nell'html
// stampiamo i post del nostro feed.

// Select the DOM element that will get the new elements
const postList = document.querySelector('.posts-list');

// For each post create a dynamic card
for(let i = 0; i < postsArray.length; i++) {
    const thisPost = postsArray[i];

    // Create the post with the different details
    const postCard = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${thisPost.userpic}" alt="user profile pic">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${thisPost.name}</div>
                    <div class="post-meta__time">${thisPost.date}</div>
                </div>                    
            </div>
        </div>

        <div class="post__text">
            ${thisPost.text}
        </div>

        <div class="post__image">
            <img src="${thisPost.img}" alt="">
        </div>

        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${thisPost.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;

    // Append the new post to the post list in the DOM
    postList.innerHTML += postCard;
}


// MILESTONE 3 
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone
// ed incrementiamo il counter dei likes relativo.

// Select the like-button and his relative likes-counter in the DOM
const likeButton = document.querySelectorAll('.js-like-button');
const likesCounter = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i < likeButton.length; i++) {
    const thisLikeBtn = likeButton[i];

    // Function that increases the likes number after the click on the like button
    thisLikeBtn.addEventListener('click', function(event) {
        // Reset the default scroll-up of the browser 
        event.preventDefault();

        // Just if the button is not alreay clicked
        if(!this.classList.contains('like-button--liked')) {
            this.classList.add('like-button--liked');
            // Select the DOM element that will be changed after the click
            const relativeCounterNumber = likesCounter[i];
            let relativeLikesNumber = parseInt(relativeCounterNumber.innerHTML);
            // Increase the likes number and write in the DOM the new number of likes
            relativeLikesNumber++;
            relativeCounterNumber.innerHTML = relativeLikesNumber;
        }
    }
    );
}
