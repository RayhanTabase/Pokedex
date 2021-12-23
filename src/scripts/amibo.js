import setupComments from "./commentsPopUp.js";

export default class Amibo {
  baseAmiUrl = 'https://www.amiiboapi.com/api/amiibo/';

  baseLikeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PPNxNau41cY6yOFKoL3b/likes';

  newLike = async (id) => {
    const data = { item_id: id };
    const response = await fetch(this.baseLikeUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const finalResponse = response.ok;
    if (response.status === 201) {
      return finalResponse;
    }
    return null;
  }

  getAmibo = async () => {
    const response = await fetch(this.baseAmiUrl, {
      method: 'GET',
      mode: 'cors',
      cache: 'force-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const finalResponse = await response.json();
    if (response.status === 200) {
      return finalResponse;
    }
    return null;
  }

  getLikes = async () => {
    const response = await fetch(this.baseLikeUrl);
    const finalResponse = await response.json();
    if (response.status === 200) {
      return finalResponse;
    }
    return null;
  }

  static renderer = (data, container) => {
    const parent = document.createElement('div');
    parent.className = 'cardo'
    parent.innerHTML = `
      <div class="cardo-image">
        <img src="${data.image}" alt="Amiibo image"/>
      </div>
      <div class="cardo-info">
        <span>${data.name}</span>
        <div class="likes">
          <i class="bx bxs-heart bx-sm" id="merci" data-id="${data.tail}"></i>
          <span class="aime" data-id="${data.tail}"></span>
        </div>
      </div>
      <input type="hidden" class="unique" value="${data.tail}"
      <div class="cardo-action">
        <button class="comment" type="button">Comment</button>
      </div>
      `;

    // Add comment feature
    let commentBtn = parent.querySelector('button');
    commentBtn.addEventListener('click', ()=> setupComments(data))
    container.appendChild(parent);
    return container;
  }
}