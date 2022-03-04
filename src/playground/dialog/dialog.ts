import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-dialog-example')
export class DialogExample extends LitElement {
    static styles = css`
        playground-ide {
            height: 100%;
        }
    `;

    render() {
        return html`
            <playground-ide line-numbers>
                <script type="sample/ts" filename="index.ts">
import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@umbraco-ui/uui-button';
import '@umbraco-ui/uui-dialog';
import '@umbraco-ui/uui-dialog-layout';

import './my-dialog.js';

@customElement('x-app')
export class App extends LitElement {

    @query('dialog', true)
    dialogElement: HTMLDialogElement;

    render() {
        return html\`
            <uui-button look="primary" @click="\${this.openDialog}">Click me</uui-button>

            <dialog id="dialog">
                <x-dialog></x-dialog>
            </dialog>
        \`;
    }

    openDialog() {
        this.dialogElement.showModal();
    }
}
                </script>

                <script type="sample/ts" filename="my-dialog.ts">
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('x-dialog')
export class Dialog extends LitElement {

    render() {
        return html\`
            <uui-dialog>
                <uui-dialog-layout headline="Short headline">
                <p>
                    Make a short description and <b>highlight</b> the affected data.<br /><br />
                    Keep actions concrete, if asking a question in headline make sure to
                    have actions that answers it.
                </p>
                <uui-button slot="actions">Cancel</uui-button>
                <uui-button slot="actions" look="positive">Action</uui-button>
                </uui-dialog-layout>
            </uui-dialog>
        \`;
    }
}
                </script>

                <script type="sample/html" filename="index.html">
<!doctype html>
<body>
    <x-app></x-app>
    <script type="module" src="./index.js">&lt;/script>
</body>
                </script>

            </playground-ide>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'x-dialog-example': DialogExample
    }
}