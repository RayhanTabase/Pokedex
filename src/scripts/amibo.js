export default class Amibo {

  baseUrl = 'https://www.amiiboapi.com/api/amiibo/';

  getAmibo = async () => {
    const response = await fetch(this.baseUrl, {
      method: 'GET',
      mode: 'cors',
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

  static renderer = (data, container) => {
    let parent = '';
    parent += `
      <div class="card">
        <div class="card-image">
          <img src="${data.image}" alt="Amiibo image"/>
        </div>
        <div class="card-info">
          <span>${data.name}</span>
          <span class="likes">
            <i class='bx bxs-heart bx-sm'></i>
            <p>2 likes</p>
          </span>
        </div>
        <div class="card-action">
          <button class="comment" type="button">Comment</button>
        </div>
      </div>
      `;
    container.innerHTML += parent;
  }

}