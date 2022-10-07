class FilmItems extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set film(film) {
        this._film = film;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            margin-bottom: 18px;
            background-color:white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            
        }
       
        .poster {
            padding:20px;
            width: 330px;
            max-height: 330px;
            object-fit: cover;
            object-position: center;
            box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.1);

        }
       
        .film-info {
            padding: 24px;
        }
       
        .film-info > h2 {
            font-weight: lighter;
        }
       
        .film-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            text-align: left;
            padding: 10px;
        }
        
        th{
            background-color: #F2C94C;
            color: black;
        }

        td{
            background-color: #F2C94C;
            color: black;
        }

        </style>

        
        <center><img class="poster" src="${this._film.Poster}" alt="Poster"></center>

        <div class="film-info">
        <table>
        <tr>
            <th width="5px">Title</th>
            <th>:</th>
            <td><h2>${this._film.Title}</h2></td>
            
        </tr>
        <tr>
            <th>Year</th>
            <th>:</th>
            <td><p>${this._film.Year}</p></td> 
        </tr>
        <tr>
            <th>ImdbId</th>
            <th>:</th>
            <td><p>${this._film.imdbID}</p></td> 
        </tr>
        <tr>
            <th>Type</th>
            <th>:</th>
            <td><p>${this._film.Type}</p></td> 
        </tr>
        
        </table>
        </div>

        `;
    }


}

customElements.define("film-items", FilmItems);