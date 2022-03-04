import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-basics')
export class Basics extends LitElement {
    render() {
        return html`
            <playground-ide line-numbers>
                <script type="sample/html" filename="index.html">
                    <!doctype html>
                    <body>
                        Hello
                        <script type="module" src="./index.js">&lt;/script>
                    </body>
                </script>

                <script type="sample/ts" filename="index.ts">
                    document.body.appendChild(document.createTextNode("World!"))
                </script>
            </playground-ide>
        `;
    }
}