import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('x-about')
export class About extends LitElement {
    render() {
        return html`
        <x-container headline="About">
          <p>The library was created by Umbraco HQ - the author behind popular products like the Umbraco CMS.</p>
          <p><a target="_blank" rel="noopener noreferer" href="https://umbraco.com/">Read more here.</a></p>
        </x-container>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-about': About
    }
}
