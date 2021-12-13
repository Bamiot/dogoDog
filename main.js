const root = document.querySelector('#root')
const end = document.querySelector('#end')

const dogAPI = ['https://dog.ceo/api/breeds/image/random', 'https://random.dog/woof.json']

document.querySelector('#refresh').addEventListener('click', () => {
  window.location.reload()
})

// get image from api and display it in the root
const getImage = async () => {
  const response = await fetch(dogAPI[Math.floor(Math.random() * dogAPI.length)])
  const data = await response.json()
  const img = document.createElement('img')
  img.src = data.message
  root.appendChild(img)
  // getImage()
}

// when the end element is visible, get a new image
const checkEnd = () => {
  if (end.getBoundingClientRect().top < window.innerHeight) {
    getImage()
  }
}

setInterval(checkEnd, 50)
