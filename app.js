// get input fields
const nameInput = document.getElementById("name");
const Btn = document.getElementById('btn');

// add event
form.addEventListener('submit',getName);

// execute function
function getName(e){

   console.log(nameInput.value);

 e.preventDefault();
}