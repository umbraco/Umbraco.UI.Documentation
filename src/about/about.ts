import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('x-about')
export class About extends LitElement {
    render() {
        return html`
        <article>
          <h1>About</h1>
          <p>This is a demo of the UI Library from Umbraco HQ!</p>
        </article>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-about': About
    }
}
