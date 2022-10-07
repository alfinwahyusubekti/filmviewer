class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
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
            height: 90px;
            width: 100%;
            background: #000000;
            background: -webkit-linear-gradient(to right, #434343, #000000);
            background: linear-gradient(to right, #434343, #000000);
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        
        .jumbotron {
            background: #fe8c00;
            background: -webkit-linear-gradient(to top, #f83600, #fe8c00);
            background: linear-gradient(to top, #f83600, #fe8c00);
            color: #fff;
            height:555px;
        }
    
        h1 {
            padding:5px;
        }

        h2{
            padding:30px;           
        }
        img {
            width:150px;
            height:150px;
        }
        .zoom {
            transition: transform .2s;
            width: 180px;
            height: 180px;
            margin: 0 auto;
        }
        .zoom:hover {
            transform: scale(1.3);
        }
        

        </style>
        <h2>Film Viewer</h2>

        <div class="jumbotron" align="center">
        <h1>Film Viewer International</h1> 
        <p>Anything else looking recomended film?</p> 
        <img src="../../logo/image.jpg" class="zoom">
        </div>

        `;




    }
}

customElements.define("app-bar", AppBar);