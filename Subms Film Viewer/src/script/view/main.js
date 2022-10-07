import '../component/film-list.js';
import '../component/find-bar';
import Database from '../data/database.js';

const main = () => {
    const searchElement = document.querySelector("find-bar");
    const FilmListElement = document.querySelector("film-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await Database.FindFilm(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        FilmListElement.film = results;
    };

    const fallbackResult = message => {
        FilmListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;