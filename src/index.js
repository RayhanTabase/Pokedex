import './css/style.css';
import setupComments from './js/commentsPopUp.js';
import Amibo from './scripts/amibo.js';
import { domVars } from './scripts/domvar.js';

const pokeData = new Amibo();

pokeData.getAmibo()
  .then((data) => {
    for (let i = 0; i < 150; i += 1) {
      Amibo.renderer(data.amiibo[i], domVars.wrap);
    }
  });


setupComments('Test');