import { html, css, LitElement } from 'lit';

export class ProjectAbcButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
    }
  `;

  static properties = {
    enabled: { type: Boolean },
    label: { type: String },
    buttonName: { type: String },
    eventName: { type: String },
  };

  constructor() {
    super();
    // default button click event name
    this.eventName = 'clicked';
    this.buttonName = 'abc-button';
    this.label = 'Button';
    this.enabled = true;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  __button_clicked() {
    this.dispatchEvent(
      new CustomEvent(this.eventName, {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button
        type="button"
        name=${this.buttonName}
        ?disabled=${!this.enabled}
        @click=${this.__button_clicked}
      >
        ${this.label}
      </button>
    `;
  }
}
