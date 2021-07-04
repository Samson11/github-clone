class GithubBody extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="Layout">
                <div class="Layout-main">
                    <g-activity></g-activity>
                </div>
        
            <div class="Layout-sidebar">
                <g-sidebar />
            </div>

        </div>
    `;
    }
}

customElements.define('g-body', GithubBody);