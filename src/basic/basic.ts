import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('x-basic')
export class Basic extends LitElement {
    render() {
        return html`
        <h1>Basic examples</h1>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-basic': Basic
    }
}
