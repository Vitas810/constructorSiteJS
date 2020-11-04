import { model } from './model';
import { Sidebar } from './classes/sidebar';
import { Site } from './classes/site';
import './styles/main.css';

const site = new Site('#site');
site.render(model);

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

new Sidebar('#panel', updateCallback);
