const Heroes = ["Ironman", "Batman", "Spiderman", "Black Widow", "Captain Marvel", "Black Panther"
];

const result = Heroes[0]
Heroes.push("Black Widow", "Yousif")
Heroes.shift()
Heroes.unshift("Quick Silver")
const Avengers = Heroes.slice(1)

Heroes.splice(0, 2, "Ironman")


console.log(Avengers)
console.log(Heroes)
