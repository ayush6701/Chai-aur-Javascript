const marvel_heros = ["captainamerica", "thor", "ironman", "hulk"];
const dc_heros = ["superman", "batman", "flash", "wonderwoman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[4][2]);

// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

let allHeros2 = [...marvel_heros, ...dc_heros];
// console.log(allHeros2);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]]
let real_another_array = another_array.flat(1)
console.log(real_another_array)

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));

console.log(Array.from({name: "Ayush"})); //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));