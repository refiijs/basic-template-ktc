class ProfileDetails extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <div class="profile-details">
                <h2>Refi Junitasari</h2>
                <p>Front-End & Back-End Dev</p>
                <p>Email: refijunita3@gmail.com</p>
            </div>
        `;
    }
}
customElements.define('profile-details', ProfileDetails);
