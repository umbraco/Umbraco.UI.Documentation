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
    <uui-button look="primary">Click me</uui-button>
    <script type="module" src="./index.js">&lt;/script>
</body>
                </script>

                <script type="sample/ts" filename="index.ts">
import '@umbraco-ui/uui-button';
                </script>
            </playground-ide>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-basics': Basics
    }
}