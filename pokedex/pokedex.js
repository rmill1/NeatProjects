// FUTURE MODIFICATIONS
//  --> add spell-check and display image of a professor looking confused if no match
//  --> update abilities to moves?
//  --> display strengths and weaknesses for both types if pokemon has two types

console.log("pokedex script running")

// SELECT ELEMENTS ON PAGE

const textField = document.querySelector("#input")
const typeButton = document.querySelector("#type-button")
const abilitiesButton = document.querySelector("#abilities-button")
const strengthButton = document.querySelector("#strength-button")
const weaknessButton = document.querySelector("#weakness-button")

const pokeName = document.querySelector("#pokeName")
const pokeInfo = document.querySelector("#pokeInfo")
const pokeImage = document.querySelector("#pokeImage")

// will display pokemon image and type if enter key is pressed - eventually change to description?
const pressEnter = (e) => {
  if (e.keyCode == 13) {
    let userChoice = textField.value.toLowerCase()
    fetchImage(userChoice)
    displayName(userChoice.toUpperCase())
  }
}



// EVENT LISTENERS

// display pokemon image if enter key pressed
textField.addEventListener("keypress", pressEnter)

typeButton.addEventListener("click", e => {
  console.log("type button clicked")
  let userChoice = textField.value.toLowerCase()
  fetchType(userChoice)
  fetchImage(userChoice)
  // textField.value = ""
})

abilitiesButton.addEventListener("click", e => {
  console.log("abilities button clicked")
  let userChoice = textField.value.toLowerCase()
  fetchImage(userChoice)
  fetchAbilities(userChoice)
  // textField.value = ""
})

strengthButton.addEventListener("click", e => {
  console.log("strength button clicked")
  let userChoice = textField.value.toLowerCase()
  fetchImage(userChoice)
  fetchStrength(userChoice)
})

weaknessButton.addEventListener("click", e=> {
  console.log("weakness button clicked")
  let userChoice = textField.value.toLowerCase()
  fetchImage(userChoice)
  fetchWeakness(userChoice)
  // textField.value = ""
})



// FUNCTIONS CALLING TO POKEAPI

async function fetchImage(userChoice) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userChoice}/`)
  .then(response => response.json())
   // console.log(response)
  
  let pokemon = response.sprites.front_default
  // console.log(pokemon)
  
  displayImage(pokemon)
}

async function fetchType(userChoice) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userChoice}/`)
  .then(response => response.json())
  // console.log(response)
  
  let pokemon = response.types
  //console.log(pokemon)
  
  let types = []
  //console.log(pokemon[0].type.name)  <-- gets the first type only
  pokemon.forEach(slot => {
    // console.log(slot.type.name)
    types.push(slot.type.name)
  })
  
  types = types.join('<br>')
  displayTypes(types)
}

async function fetchAbilities(userChoice) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userChoice}/`)
  .then(response => response.json())
  // console.log(response)
  
  let pokemon = response.abilities
  let abilities = []
  
   pokemon.forEach(slot => {
    // console.log(slot.ability.name)
    abilities.push(slot.ability.name)
   })
   
  abilities = abilities.join('<br>')  // removes commas and separates array items on new lines
  displayAbilities(abilities)
}

async function fetchStrength(userChoice) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userChoice}/`)
  .then(response => response.json()).then(function(response){
    // console.log(response)
    let type1 = response.types[0].type.name
    let type2 = ""
    if (response.types.length == 2){
      type2 = response.types[1].type.name
    }
    actuallyFetchStrength(type1)
  })
}

async function actuallyFetchStrength(type1) {
  let response = await fetch(`https://pokeapi.co/api/v2/type/${type1}/`)
  .then(response => response.json())
  
  let strengthType1 = response.damage_relations.double_damage_to
  let strengths = []
  
  strengthType1.forEach(slot => {
    strengths.push(slot.name)
  })
  strengths = strengths.join('<br>')
  displayStrength(strengths)
  
}

async function fetchWeakness(userChoice) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userChoice}/`)
  .then(response => response.json()).then(function(response){
     
     let type1 = response.types[0].type.name
     let type2 = ""  //may or may not be a type 2
     // console.log(type1)
     if (response.types.length == 2){
      type2 = response.types[1].type.name
     }
     // console.log(type2)
     actuallyFetchWeakness(type1, type2)    //Idk if there was a better way to get this all in one function... 
  }) 
}

async function actuallyFetchWeakness(type1, type2) {
  let response = await fetch(`https://pokeapi.co/api/v2/type/${type1}/`)
  .then(response => response.json())
  // console.log(response)
  
  let weaknessType1 = response.damage_relations.double_damage_from
  let weaknesses = []
  let weaknesses2 = []
  
  weaknessType1.forEach(slot => {
    weaknesses.push(slot.name)
  })
  // console.log(weaknesses)
  
  weaknesses = weaknesses.join('<br>')

 
//  Get  a list of weaknesses for Pokemon's 2nd type - not super necessary, esp if there's a bunch in type1
//   if (type2 != "") {
//     let response2 = await fetch(`https://pokeapi.co/api/v2/type/${type2}/`)
//     .then(response2 => response2.json())
//     // console.log(response2)
    
//     let weaknessType2 = response2.damage_relations.double_damage_from
//     weaknessType2.forEach(slot => {
//       weaknesses2.push(slot.name)
//     })
//     console.log(weaknesses2)
    
//   }
  
  displayWeakness(weaknesses)
}




// THE FUN STUFF TO UPDATE HTML ON PAGE

function displayName(pokemon) {
  pokeName.innerHTML = `<h2><b>${pokemon}</b></h2>` 
  pokeInfo.innerHTML = ``
}

function displayImage(image) {
  // console.log(image)
  pokeImage.innerHTML = `<img src="${image}"/>`
}

function displayTypes(types) {
  // console.log(types)
  pokeName.innerHTML = `<h2><b>TYPE</b></h2>`
  pokeInfo.innerHTML = `<h4>${types}</h4>`
}

function displayAbilities(abilities) {
  pokeName.innerHTML = `<h2><b>ABILITIES</b></h2>`
  pokeInfo.innerHTML = `<h4>${abilities}</h4>`
}

function displayStrength(strengths) {
  pokeName.innerHTML = `<h2><b>STRONG AGAINST</b></h2>`
  pokeInfo.innerHTML = `<h4>${strengths}</h4>`
}

function displayWeakness(weaknesses) {
  pokeName.innerHTML = `<h2><b>WEAK AGAINST</b></h2>`
  pokeInfo.innerHTML = `<h4>${weaknesses}</h4>`
}
 
 
// USEFUL RESOURCES I USED FOR THIS PROJECT
// PokeAPI: https://pokeapi.co/docs/v2
// PokeAPI Guide: https://pokeapi-how.appspot.com/