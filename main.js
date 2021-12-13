const root = document.querySelector('#root')
const end = document.querySelector('#end')

const dogAPI = ['https://dog.ceo/api/breeds/image/random', 'https://random.dog/woof.json']

document.querySelector('#refresh').addEventListener('click', () => {
  window.location.reload()
})

document.querySelector('.up-button').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// get image from api and display it in the root
const getImage = async () => {
  const response = await fetch(dogAPI[Math.floor(Math.random() * dogAPI.length)])
  const data = await response.json()
  const img = document.createElement('img')
  img.src = data.message
  root.appendChild(img)
  checkEnd()
  // if root is heighter than 5000px, remove the first image
  // if (root.getBoundingClientRect().height > 5000) {
  //   root.removeChild(root.firstChild)
  // }
}

// when the end element is visible, get a new image
const checkEnd = () => {
  if (end.getBoundingClientRect().top < window.innerHeight) {
    getImage()
  }
}

document.addEventListener('scroll', checkEnd)

for (let i = 0; i < 5; i++) {
  getImage()
}
