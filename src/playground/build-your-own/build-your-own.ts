import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-build-your-own')
export class BuildYourOwn extends LitElement {
    render() {
        return html`
            <playground-ide line-numbers>
                <script type="sample/html" filename="index.html">
                    <!doctype html>
                    <body>
                        <x-button look="primary"></x-button>
                        <script type="module" src="./index.js">&lt;/script>
                    </body>
                </script>

                <script type="sample/ts" filename="index.ts">
                    import { html, LitElement } from 'lit';
                    import { customElement } from 'lit/decorators.js';
                    import { UUIButtonElement } from '@umbraco-ui/uui-button';

                    @customElement('x-button')
                    export class MyButton extends UUIButtonElement {
                        constructor() {
                            super();
                            this.label = 'Hello from the custom element';
                        }
                    }
                </script>
            </playground-ide>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-build-your-own': BuildYourOwn
    }
}