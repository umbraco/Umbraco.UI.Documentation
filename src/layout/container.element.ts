import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('x-container')
export class Container extends LitElement {
    static styles = css`
        :host {
            flex: 1;
            text-align: center;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
    `;

    @property()
    headline?: string;

    render() {
        return html`
            <article class="container">
                ${this.headline ? html`<header class="header"><h1>${this.headline}</h1></header>` : ''}
                <slot></slot>
            </article>
        `;
    }
}