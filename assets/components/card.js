class characterCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    //Añadimos un observador de los atributos
    static get observedAttributes() {
        return ["name", "image","status","id"];
    }

    render() {
        let child = this.getTemplate().content.cloneNode(true)//Creamos la copia del template
        this.shadowRoot.appendChild(child);    //lo añadimos al shadow root
    }

    getTemplate() {
        let template = document.createElement("template");
        template.innerHTML = `
            <div class="card-container" id="${this.id}">
                <div class="wrapper">
                    <img src="" loading="lazy" alt="${this.name}-image"/>
                </div>
                <div class="card-info-container">
                <h3>${this.name}</h3>
                <span>${this.status}</span>
                </div>
            </div>
            ${this.setStyles()}
        `;
        return template;
    }

    setStyles() {
        let styles = `
        <style>
        :host{
            --main-green: #6fc41c;
            --dark-green: #448a32;
            --secondary-green: #9ecb0e;
            --tiny-green: #92c752;
        }

        .wrapper{
            height: 300px; 
            width: 300px; 
            background-color:grey; 
            border-radius: 12px;
        }
        .card-container {
            border: solid 1px;
            background: var(--tiny-green);
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 12px;
            margin: 8px 4px;
            text-align: center;
            width: 300px;
            height: 480px;
            justify-content:space-between;
          }

          .card-info-container{
            display:flex;
            flex-direction:column;
            height:180px;
            align-items: center;
            justify-content:space-between;
          }
          
          .card-container img {
            height: 300px;
            border-radius: 12px;
            background-size: contain;
          }</style>`;
        return styles;
    }

    attributeChangedCallback(current, oldValue, newValue) {
        //Escuchamos si los atributos cambian
        if(oldValue !== newValue){
            this[current] = newValue;
        }
      }

      connectedCallback(){
        //Aca llamamos al render
        this.render();
      }
    
      disconnectedCallback(){
        console.log('El elemento ha sido removido con exito!');
        //Aca removemos las referencias y eventos para liberar memoria 
      }
}

customElements.define("character-card",characterCard);