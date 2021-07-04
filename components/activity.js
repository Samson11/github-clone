class GithubActivity extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="m-3 p-3 h4">
                All Activity

            <div class="container-lg clearfix">
                <div class="col-8 float-left">
                    <g-personalised></g-personalised>
                </div>

                <div class="col-4 float-left">
                    <g-explore></g-explore>
                </div>

            </div>
            </div>
        `;
    }
}

customElements.define('g-activity', GithubActivity)