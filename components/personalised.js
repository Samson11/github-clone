class Personalised extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="h3">
                No activity recently, go and code...
            </div>
        `;
    }
}

customElements.define('g-personalised', Personalised)