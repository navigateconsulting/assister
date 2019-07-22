import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'assister-fab',
  styleUrl: 'fab.css',
  shadow: true
})
export class Fab {
  @State() showChat = true;
  handleClick() {
      this.showChat = !this.showChat;
  }
  render() {
    return [
      <ion-fab-button class="fab" onClick={this.handleClick.bind(this)}>
        <ion-icon name="code-working"/>
      </ion-fab-button>,
      <assister-chat class="chat"
        style={{display: this.showChat ? 'block' : 'none'}}
      >
        <slot />
      </assister-chat>
    ];
  }
}
