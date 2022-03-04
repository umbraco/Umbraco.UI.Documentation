import './layout/container.element';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-app')
export class App extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    .topnav {
      background-color: #4f4c4c;
      overflow: hidden;
      display: flex;
    }

    .topnav a {
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }

    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }

    .topnav a.active {
      background-color: #008CBA;
      color: white;
    }

    #container {
      display: flex;
      flex: 1;
    }

    @media (max-width: 600px) {
      .topnav {
        min-height: 50px;
      }
    }
  `;

  render() {
    return html`
      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/playground/basics">Playground</a>
        <a href="/about">About</a>
      </div>

      <main id="container">
        <slot></slot>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-app': App
  }
}
