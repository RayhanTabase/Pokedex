import TestImage from '../images/logo/logo.png';

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
  </div>
  `;
  const closebtn = container.querySelector('button');
  closebtn.addEventListener('click', deletePopUps);
  document.body.appendChild(container);
};

export default displayDetails;