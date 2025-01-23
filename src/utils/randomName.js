const namesData = {
  names: [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Elijah",
    "Sophia",
    "Lucas",
    "Amelia",
    "Mason",
    "Isabella",
    "Ethan",
    "Mia",
    "James",
    "Harper",
    "Benjamin",
    "Evelyn",
    "Jack",
    "Charlotte",
    "Henry",
    "Ella",
    "Alexander",
    "Scarlett",
    "William",
    "Chloe",
  ],
};


export function getRandomName() {
  const randomIndex = Math.floor(Math.random() * namesData.names.length);
  return namesData.names[randomIndex];
}



