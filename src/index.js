import './css/style.css';
import setupComments from './js/commentsPopUp.js';
import Amibo from './scripts/amibo.js';
import { domVars } from './scripts/domvar.js';
import Icon from '../testImage.jpg'

const pokeData = new Amibo();

pokeData.getAmibo()
  .then((data) => {
    for (let i = 0; i < 150; i += 1) {
      Amibo.renderer(data.amiibo[i], domVars.wrap);
    }
  });

let data = {name:"Test",gameSeries:"gameSeries",type:"type",release:{eu:"100",au:"200"}, image:Icon}
setupComments(data);