const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) 
//console.log(marvel_heros)
//output --> here tottal ement is 4 as it taken other array as element
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

  const  allHero = marvel_heros.concat(dc_heros); //it addds two string
//console.log(allHero)

// concate method is best  method to add two or more arrays


const all_new_hero = [...marvel_heros, ...dc_heros]
console.log(all_new_hero)