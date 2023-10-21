class ExperienceSection extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <div class="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h3>Staff of Curriculum & Developers</h3>
                        <p>Google Developer Student Clubs IT Telkom Purwokerto</p>
                        <p>September 2023 - Present</p>
                    </li>
                    <li>
                        <h3>Front-End Web And Back-End Developer</h3>
                        <p>Dicoding Indonesia</p>
                        <p>August 2023 - Present</p>
                        <p>This Independent Front-End Web and Back-End Developer Certified Study is conducted to produce high-standard talent that meets Industry standards in the field of Front-End Web and Back-End development.</p>
                    </li>
                    <li>
                        <h3>Project-Based Virtual Intern</h3>
                        <p>UX Researcher Telkom Digital Amoeba x Rakamin Academy </p>
                        <p>August 2023</p>
                        <p>Virtual Internship Experience UX Researcher Telkom Digital Amoeba Batch August 2023 by Rakamin Academy</p>
                    </li>
                </ul>
            </div>
        `;
    }
}
customElements.define('experience-section', ExperienceSection);
