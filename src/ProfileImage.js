class ProfileImage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <div class="profile-image">
                <img src="../asset/refi.png" alt="My Photo">
            </div>
        `;
    }
}
customElements.define('profile-image', ProfileImage);
