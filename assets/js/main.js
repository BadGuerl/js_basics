// prompt se usa para pedir cosas, es una funcion que esta en los navegadores
const userEmail = prompt("Insert a user email", "harry_potter@mail.com");

console.log(`The user email is ${userEmail}`);

if (userEmail.endsWith("@ironhack.com") && !userEmail.includes(" ")) {
  let kind;
  switch (userEmail) {
    case 'carlos@ironhack.com':
      kind = 'teacher';
    case 'julio@ironhack.com':
      kind = 'teacher';
    case 'moi@ironhack.com':
      kind = 'TA';
    default:
      kind = 'student';
  }
alert(`The user is ${kind}`);
} else {
  alert(`Invalid email ${userEmail}`);
}


