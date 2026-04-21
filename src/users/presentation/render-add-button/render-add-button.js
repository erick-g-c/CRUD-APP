import { showModal } from '../render-modal/render-modal';
import './render-addbutton.css';

export const renderAddButton = (element, callback) => {
    
    const fabButon = document.createElement('button');
    fabButon.innerText = '+';
    fabButon.classList.add('fab-button');

    element.append(fabButon);

    //TODO
    fabButon.addEventListener('click', () => {
        showModal();
    })

};