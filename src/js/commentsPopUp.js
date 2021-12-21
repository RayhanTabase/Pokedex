import TestImage from '../images/logo/logo.png';
import { addComment, getComments } from './InvolvementAPI.js';

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

// Delete pop ups of pokemon details
const deletePopUps = () => {
  const prevContainer = document.querySelector('.container-pokemon-details');
  if (prevContainer) prevContainer.remove();
};

// Takes in pokemon details and displays them in a pop up
const displayDetails = () => {
  hideMainContent(true);

  deletePopUps();
  const container = document.createElement('div');
  container.className = 'container-pokemon-details';

  container.innerHTML = `
  <div class="pokemon-details-box">
    <button type="button" class="closePopUp"> <i class="fas fa-times"></i> </button>

    <div class="poke-details">
      <div class="image-conatiner"> 
        <img src="${TestImage}" alt="pokemon">
      </div>

      <h2> Name </h2>

      <ul class='attributes'>
        <li> Fuel: titanium </li>
        <li> Weight: 200 </li>
        <li> Height: 100 </li>
        <li> Color:black </li>
      </ul>
    </div>

    <div class="poke-comments">
      <h3> Comments <span class="comment-counter"></span> </h3>
      <ul class="container-comments"> </ul>
    </div>

    <div class="addCommentForm">
    </div>
  </div>
  `;
  const closebtn = container.querySelector('button');
  closebtn.addEventListener('click', deletePopUps);
  document.body.appendChild(container);
};

const displayComment = (data) => {
  const container = document.querySelector('.container-comments');
  let comment = document.createElement('li');
  comment.innerHTML = `
  <li>${data.creation_date} ${data.username} ${data.comment} <li>
  `;
  container.append(comment);
} 

const displayComments = async () => {
  let allComments = await getComments('testcase');
  allComments.forEach((comment) => {
    displayComment(comment); 
  });
}

const displayCommentForm = () => {
  const container = document.querySelector('.addCommentForm');
  container.innerHTML = `
    <h3>Add a comment</h3>
    <form>
      <input type="text" placeholder="Your name" name="name"/>
      <textarea name="comment" id="" cols="20" rows="10"></textarea>
      <button type="submit">Comment</button>
    </form>
  `
  let form = container.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    let name = data.get('name');
    let comment = data.get('comment');
    let result = await addComment("testcase",name,comment);
    if (result) displayComment(result)
    form.reset();
  });
} 

export {displayDetails, displayComments, displayCommentForm};