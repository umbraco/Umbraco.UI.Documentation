import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('x-about')
export class About extends LitElement {
    render() {
        return html`
      <slot></slot>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-about': About
    }
}
