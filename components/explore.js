class Explore extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <h4>Explore repositories</h4>
            <g-repository name="Derin/Web Components" description="Made by Aderinsola" language="JavaScript" stars="1K"></g-repository>
            <g-repository name="Nabil/React" description="Made by Nabil" language="JavaScript" stars="100,000"></g-repository>
            <g-repository name="John Doe/Vue-svelte" description="Made by John Doe" language="JavaScript" stars="100"></g-repository>
            <g-repository name="Teni/Angular-curves" description="Made by Teni" language="TypeScript" stars="50,000"></g-repository>
            <g-repository name="Samson/Flutter-packets" description="Made by Samson11" language="Dart" stars="2M"></g-repository>

            <p class="space">
            <button class="btn-link" type="button">Explore more</button>
        `;
    }
}

customElements.define('g-explore', Explore);