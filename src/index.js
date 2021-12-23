import './css/style.css';
import Amibo from './scripts/amibo.js';
import { domVars } from './scripts/domvar.js';

const myAmiibo = new Amibo();

const displayTotalAmiibo = async () => {
  const data = await myAmiibo.getAmibo();
  domVars.counters.innerHTML = data.amiibo.length;
  return data.amiibo.length;
};

const displayAmibo = async () => {
  const data = await myAmiibo.getAmibo();
  for (let i = 0; i < 25; i += 1) {
    Amibo.renderer(data.amiibo[i], domVars.wrap);
  }
};

const logLikes = async () => {
  const likeData = await myAmiibo.getLikes();
  const likespan = document.querySelectorAll('.aime');
  likespan.forEach((spano) => {
    likeData.forEach((like) => {
      if (spano.dataset.id === like.item_id) {
        spano.innerHTML = `${like.likes} likes`;
      }
    });
  });
};

const likeAmiibo = async () => {
  const loves = document.querySelectorAll('.bxs-heart');
  for (let i = 0; i < loves.length; i += 1) {
    const unique = document.querySelectorAll('.unique');
    unique.forEach((unID) => {
      if (loves[i].dataset.id === unID.value) {
        loves[i].addEventListener('click', async () => {
          const res = await myAmiibo.newLike(unID.value);
          if (res) {
            logLikes();
          }
        });
      }
    });
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  await displayAmibo();
  likeAmiibo();
  logLikes();
  displayTotalAmiibo();
});