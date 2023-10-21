class BioSection extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <div class="bio">
                <h2>Biography</h2>
                <p>
                    Hi, I'm Refi, Informatics Engineering student in Institut Teknologi Telkom Purwokerto who learns about data processing, software design and 
                    development, as well as learning about the concept of programming languages using java for OOP, C++, and Python.
                </p>
            </div>
        `;
    }
}
customElements.define('bio-section', BioSection);

