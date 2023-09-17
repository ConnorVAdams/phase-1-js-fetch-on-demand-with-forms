//Captures user input from a form and fetches the requested data from the JSON server.
const init = () => {
  const inputForm = document.querySelector('form'); //Assigns a variable to the form element so it can be targeted.

  inputForm.addEventListener('submit', (e) => { //Attaches an event listener to the form to be executed when input is submitted.
    e.preventDefault(); //Prevents default behavior of HTML form, which is to refresh the page.
    const input = document.querySelector('input#searchByID'); //Assigns input value to a variable for later use.

    console.log(input.value); //Logs the ID of the movie the user wants info about.

    fetch(`http://localhost:3000/movies/${input.value}`) //Fetches a promise Object from the server at the path specified by the input ID.
        .then(resp => resp.json()) //When the response arrives, converts it to JSON, returns the JSON Object, and passes it to the next .then.
        .then(data => { //Accepts the response as an argument for its data parameter, then provides it to the next function, which is to log the promise Object to the console.
            const movieTitle = document.querySelector('section#movieDetails h4'); //Assigns the h4 element in the summary box to a variable.
            const movieSum = document.querySelector('#movieDetails p'); //Assigns the p element in the summary box to a variable.

            movieTitle.textContent = data.title; //Displays requested movie title.
            movieSum.textContent = data.summary; //Displays requested movie summary.
        });
    });
};

document.addEventListener('DOMContentLoaded', init);