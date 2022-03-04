import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('x-playground')
export class Playground extends LitElement {
    render() {
        return html`
        <h1>Basic examples</h1>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-playground': Playground
    }
}
