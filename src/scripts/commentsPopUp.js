import { addComment, getComments, countComments } from './CommentApi.js';

const mainPage = document.querySelector('main');
const footer = document.querySelector('footer');
const header = document.querySelector('#header');

const hideMainContent = (status) => {
  if (status) {
    mainPage.style.display = 'none';
    footer.style.display = 'none';
    header.style.display = 'none';
    return;
  }
  mainPage.style.display = 'block';
  footer.style.display = 'block';
  header.style.display = 'block';
};

const deletePopUps = () => {
  const prevContainer = document.querySelector('.container-pokemon-details');
  if (prevContainer) prevContainer.remove();
};

const createStructure = () => {
  hideMainContent(true);

  deletePopUps();
  const container = document.createElement('div');
  container.className = 'container-pokemon-details';

  container.innerHTML = `
  <div class="pokemon-details-box">
    <button type="button" class="closePopUp"> <i class="fas fa-times"></i> </button>

    <div class="poke-details">
    </div>

    <div class="poke-comments">
      <h3> Comments <span class="badge badge-dark comment-counter"></span> </h3>
      <ul class="container-comments"> </ul>
    </div>

    <div class="addCommentForm">
    </div>
  </div>
  `;
  const closebtn = container.querySelector('button');
  closebtn.addEventListener('click', () => {
    deletePopUps();
    hideMainContent(false);
  });
  document.body.appendChild(container);
};

const commentCounterChange = () => {
  const number = countComments();
  const commentCounter = document.querySelector('.comment-counter');
  commentCounter.innerHTML = `${number}`;
};

const displayDetails = (data) => {
  const container = document.querySelector('.poke-details');
  container.innerHTML = `
    <div class="image-conatiner"> 
      <img src="${data.image}" alt="pokemon">
    </div>

    <h2> ${data.name} </h2>

    <ul class='attributes'>
      <li> gameSeries: ${data.gameSeries} </li>
      <li> type: ${data.type} </li>
      <li> released in eu: ${data.release.eu} </li>
      <li> released in au: ${data.release.au} </li>
    </ul>
  `;
};

const displayComment = (data) => {
  const container = document.querySelector('.container-comments');
  const comment = document.createElement('li');
  comment.className = "userComment"
  comment.innerHTML = `
  <span class="date">${data.creation_date}</span> <br> <span class="name">${data.username}</span> <br> <span class="comment">${data.comment} </span>
  `;
  container.append(comment);
};

const displayComments = async (itemId) => {
  const allComments = await getComments(itemId);
  if (allComments) {
    allComments.forEach((comment) => {
      displayComment(comment);
    });
    commentCounterChange();
  }
};

const formErrorMessage = (display) => {
  const container = document.querySelector('.formErrorMessage')
  if (display) container.style.display = 'block';
  else container.style.display = 'none';
}

const displayCommentForm = (itemId) => {
  const container = document.querySelector('.addCommentForm');
  container.innerHTML = `
    <h3>Add a comment</h3>
    <form>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Your name" name="name" maxlength="50" required/>
    </div>
    <div class="form-group">
      <textarea name="comment" class="form-control" rows="6" placeholder="Your insights" maxlength="300" required></textarea>
    </div>
    <div class="form-group text-center">
      <p class="formErrorMessage">Input name and comment</p>
      <button class="btn btn-success" type="submit">Comment</button>
      <div class="fa-3x addingCommentSpinner">
          <i class="fas fa-spinner fa-spin"></i>
      </div>
    </div>
    </form>
  `;
  const form = container.querySelector('form');
  const formButton = form.querySelector('button');
  const loader = form.querySelector('.addingCommentSpinner');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formErrorMessage(false);
    formButton.disabled = true;
    loader.style.display = "block";
    const data = new FormData(form);
    const name = data.get('name');
    const comment = data.get('comment');
    const result = await addComment(itemId, name, comment);
    if (result) displayComment(result);
    else formErrorMessage(true);
    commentCounterChange();
    form.reset();
    formButton.disabled = false;
    loader.style.display = "none";
  });
};

const setupComments = async (data) => {
  let itemId = data.name + data.tail
  createStructure();
  displayDetails(data);
  await displayComments(itemId);
  displayCommentForm(itemId);
};

export default setupComments;