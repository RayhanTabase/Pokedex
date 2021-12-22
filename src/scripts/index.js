import '../style.css';
import Amibo from './amibo.js';
import { domVars } from './domvar.js';

const pokeData = new Amibo();

pokeData.getAmibo()
  .then((data) => {
    for (let i = 0; i < 150; i += 1) {
      Amibo.renderer(data.amiibo[i], domVars.wrap);
    }
  });