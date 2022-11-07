// prompt se usa para pedir cosas, es una funcion que esta en los navegadores
const userEmail = prompt("Insert a user email", "harry_potter@mail.com");

console.log(`The user email is ${userEmail}`);

if (userEmail.endsWith("@ironhack.com") && !userEmail.includes(" ")) {
  let kind;
  switch (userEmail) {
    case 'carlos@ironhack.com':
    case 'julio@ironhack.com':
      kind = 'teacher';
      break;
    case 'moi@ironhack.com':
      kind = 'TA';
      break;
    default:
      kind = 'student';
  }

// if (useEmail === 'carlos@ironhack.com' || userEmail === 'julio@ironhack.com') {
//   kind = 'teacher';
// } else if (userEmail === 'moi@ironhack.com') {
//   kind = 'TA';
// } else{
//   kind = 'student';
// } 


  alert(`The user is ${kind}`);
} else {
  alert(`Invalid email ${userEmail}`);
}


