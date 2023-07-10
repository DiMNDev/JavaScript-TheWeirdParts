function greet(firstName, lastName, language) {
  language = language || "english";
  if (language === "english") {
    console.log(`Hello, ${firstName} ${lastName}`);
  }
  if (language === "spanish") {
    console.log(`Hola, ${firstName} ${lastName}`);
  }
}

function greetEnglish(firstName, lastName) {
  greet(firstName, lastName, "english");
}

function greetSpanish(firstName, lastName) {
  greet(firstName, lastName, "spanish");
}

greet("Josh", "Arnold");
greet("Josh", "Arnold", "spanish");
greetEnglish("John", "Doe");
greetSpanish("Juan", "Espinoza");
