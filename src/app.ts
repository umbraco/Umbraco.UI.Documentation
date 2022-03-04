import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-app')
export class App extends LitElement {
  static styles = css`
    .header {
      padding: 20px;
      font-size: 25px;
      text-align: center;
      background: white;
    }

    .topnav {
      background-color: #4f4c4c;
      overflow: hidden;
    }

    .topnav a {
      float: left;
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
  `;

  render() {
    return html`
      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/basic">Basic</a>
        <a href="/about">About</a>
      </div>
      <div class="header">
        <h2>UI Library Demo</h2>
      </div>

      <main>
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
