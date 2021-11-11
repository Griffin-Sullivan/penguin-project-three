import { LitElement, html, css } from 'lit';

export class FlashCard extends LitElement {
  static get tag() {
    return 'flash-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    setTimeout(() => {
      import('./AnswerBox.js');
      import('./promptImg.js');
    }, 0);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  // updated(changedProperties) {
  //   changedProperties.forEach((oldValue, propName) => {
  //   });
  // }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  // firstUpdated(changedProperties) {
  //   if (super.firstUpdated) {
  //     super.firstUpdated(changedProperties);
  //   }
  // }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  // connectedCallback() {
  //   super.connectedCallback();
  // }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  // disconnectedCallback() {
  //   super.disconnectedCallback();
  // }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
        border: 2px solid;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <image-prompt><slot name='back'></slot></image-prompt>
      <p><slot name='front'></slot></p>
      <answer-box><slot name='back'></slot></answer-box>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/flash-card.haxProperties.json`, import.meta.url)
      .href;
  }
}
