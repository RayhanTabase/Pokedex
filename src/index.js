import './css/style.css';
import Amibo from './scripts/amibo.js';
import { domVars } from './scripts/domvar.js';

const myAmiibo = new Amibo();

const displayTotalAmiibo = async (counterElement) => {
  let data = await myAmiibo.getAmibo()
  counterElement.innerHTML = data.amiibo.length
}

const displayAmibo = async () => {
  let data = await myAmiibo.getAmibo()
  for (let i = 0; i < 5; i += 1) {
    Amibo.renderer(data.amiibo[i], domVars.wrap)
  }
}

const logLikes = async () => {
  let likeData = await myAmiibo.getLikes()
  let likespan = document.querySelectorAll('.aime')
  likespan.forEach((spano) => {
    likeData.forEach((like) => {
      if (spano.dataset.id === like.item_id) {
        spano.innerHTML = `${like.likes} likes`
      }
    })
  })
}

const likeAmiibo = async () => {
  let loves = document.querySelectorAll('.bxs-heart')
  for (let i = 0; i < loves.length; i += 1) {
    let unique = document.querySelectorAll('.unique')
    unique.forEach((unID) => {
      if (loves[i].dataset.id === unID.value) {
        loves[i].addEventListener('click', async () => {
          let res = await myAmiibo.newLike(unID.value)
          if (res) {
            logLikes()
          }
        })
      }
    })
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  await displayAmibo();
  likeAmiibo()
  logLikes()
  displayTotalAmiibo(domVars.counters)
})





