class Database {
    static FindFilm(keyword) {
        return fetch(`http://www.omdbapi.com?apikey=587b0af0&s=${keyword}`)
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(`${keyword} Film tidak ditemukan!`);
            }
        })
    }
}

export default Database;