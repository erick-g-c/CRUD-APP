import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    
    const nextButtom = document.createElement('button');
    nextButtom.innerText = 'Next >';

    const prevButtom = document.createElement('button');
    prevButtom.innerText = '< prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(prevButtom, currentPageLabel, nextButtom);

    nextButtom.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });

    prevButtom.addEventListener('click', async () => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    })

};