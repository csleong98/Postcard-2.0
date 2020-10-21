class ColorBox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="selection-box">
            <div class="colors">
                <span class="color-dot"></span>
                <span class="color-dot"></span>
                <span class="color-dot"></span>
                <span class="color-dot"></span>
            </div>
            <span class="color-name">Vintage Pop</span>
        </div>
        `;
    }
}




customElements.define('color-box', ColorBox)