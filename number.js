console.log("Hello its JS")

const button = document.querySelector('#button')
const input = document.querySelector('#favNumber')
const output = document.querySelector('#outputList')



function appendTrivia(triv){
    const newLi = document.createElement('li')
        newLi.innerHTML = triv
        output.append(newLi)

}

function getNumTrivia(number){
    let PromiseArr = []
    let factArr = []

    for (let i =0; i <4; i++){
        PromiseArr.push(
            axios.get(`http://numbersapi.com/${number}/trivia?json`)
        )
    }

    Promise.all(PromiseArr).then(array => array.forEach(n => appendTrivia(n.data.text))).catch(err => console.log("Sorry something went wrong", err))
    
}

button.addEventListener("click", function(e){
    e.preventDefault()
    output.innerHTML=""
    getNumTrivia(input.value)
  
 

})



