console.log("hello JS")

const draw = document.querySelector('#draw')
const shuffle = document.querySelector('#shuffle')
const output = document.querySelector('#outputList')
count = document.querySelector('#cardCount')

let deckId = ""
let currentCard = ""

function shuffleDeck(){
    const resp = axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    resp.then(n=> deckId = n.data.deck_id).catch(err => console.log(err))
    count.innerHTML="Cards remaining in deck: 52/52"
}

function renderCard(img){
    output.innerHTML=""
    const newImg = document.createElement('img')
    newImg.src = img
    output.append(newImg)

}

shuffle.addEventListener("click", function(e){
    e.preventDefault()
    shuffleDeck()
    output.innerHTML=""
    
})

draw.addEventListener("click", function(e){
    e.preventDefault()
    drawCard(deckId)
})

function drawCard(deckId){
    const resp = axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    resp.then(function(n){renderCard(n.data.cards[0].image)
        count.innerHTML=(`Cards remaining in deck: ${n.data.remaining}/52`)}).catch(function(err){console.log(err)})
}

shuffleDeck()