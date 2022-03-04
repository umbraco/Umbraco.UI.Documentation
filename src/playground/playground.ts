import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-playground')
export class Playground extends LitElement {
    static styles = css`
        #container {
            display: grid;
            grid-template-columns: 200px 1fr;
        }

        #header {
            background: gray;
            text-align: center;
        }

        #topnav-content {
            background: blue;
        }

        #sidenav {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column
        }

        #sidenav a {
            padding: 0.5rem;
            margin: 0.5rem;
        }
    `;

    async connectedCallback() {
        super.connectedCallback();
        await import('../../node_modules/playground-elements/playground-ide.js');
    }

    render() {
        return html`
            <div id="topnav">
            </div>
            <div id="container">
                <header id="header">
                    <h2>Playground</h2>
                </header>
                <div id="topnav-content"></div>
                <div id="sidenav">
                    <a href="/playground/basics">Basics</a>
                    <a href="/playground/build-your-own">Build Your Own</a>
                </div>

                <div id="content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-playground': Playground
    }
}
