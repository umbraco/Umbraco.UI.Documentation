import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('x-home')
export class Home extends LitElement {
    static styles = css`
        :host {
            flex: 1;
        }
    `;

    render() {
        return html`
        <x-container headline="Umbraco UI Library">
            <p>This is a demo of the UI Library from Umbraco HQ!</p>
            <p>
                <a href="/playground/basics">Hurry up and try the Playground</a>
            </p>
        </x-container>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-home': Home
    }
}
