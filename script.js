const user = document.querySelector('#user')
const randomizer = document.querySelector('#randomizer')
const generate = document.querySelector('#generate')
const winlose = document.querySelector('#winlose')

const randomGanerate = () => {
   let randomSum =  randomizer.innerHTML = Math.floor(Math.random() * 10) + 1

   if ( randomSum == user.value){
      winlose.innerHTML = 'you win!!!'
   } else {
      winlose.innerHTML = 'you lose ((('
   }
}
generate.addEventListener('click', event => {
   randomGanerate()
})

