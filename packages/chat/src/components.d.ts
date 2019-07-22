/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  AssisterInputChangeEventDetail,
  MessageDirection,
  MessageState,
  MessageTriangle,
} from './interfaces';


export namespace Components {
  interface AppProfile {
    'name': string;
  }
  interface AppRoot {}
  interface AppTest {}
  interface AssisterChat {
    'mapInputTextToHtml': (text: string) => any[];
    'triangle': MessageTriangle;
  }
  interface AssisterCheckmark {
    'ticks': 'one' | 'two';
  }
  interface AssisterConversation {
    'insertToBottom': (content: any) => Promise<unknown>;
    'insertToTop': (content: any) => Promise<void>;
  }
  interface AssisterFab {}
  interface AssisterInput {}
  interface AssisterMessage {
    'direction': MessageDirection;
    'state': MessageState;
    'triangle': MessageTriangle;
  }
  interface AssisterMessageStatus {
    'state': MessageState;
  }
}

declare global {


  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppTestElement extends Components.AppTest, HTMLStencilElement {}
  var HTMLAppTestElement: {
    prototype: HTMLAppTestElement;
    new (): HTMLAppTestElement;
  };

  interface HTMLAssisterChatElement extends Components.AssisterChat, HTMLStencilElement {}
  var HTMLAssisterChatElement: {
    prototype: HTMLAssisterChatElement;
    new (): HTMLAssisterChatElement;
  };

  interface HTMLAssisterCheckmarkElement extends Components.AssisterCheckmark, HTMLStencilElement {}
  var HTMLAssisterCheckmarkElement: {
    prototype: HTMLAssisterCheckmarkElement;
    new (): HTMLAssisterCheckmarkElement;
  };

  interface HTMLAssisterConversationElement extends Components.AssisterConversation, HTMLStencilElement {}
  var HTMLAssisterConversationElement: {
    prototype: HTMLAssisterConversationElement;
    new (): HTMLAssisterConversationElement;
  };

  interface HTMLAssisterFabElement extends Components.AssisterFab, HTMLStencilElement {}
  var HTMLAssisterFabElement: {
    prototype: HTMLAssisterFabElement;
    new (): HTMLAssisterFabElement;
  };

  interface HTMLAssisterInputElement extends Components.AssisterInput, HTMLStencilElement {}
  var HTMLAssisterInputElement: {
    prototype: HTMLAssisterInputElement;
    new (): HTMLAssisterInputElement;
  };

  interface HTMLAssisterMessageElement extends Components.AssisterMessage, HTMLStencilElement {}
  var HTMLAssisterMessageElement: {
    prototype: HTMLAssisterMessageElement;
    new (): HTMLAssisterMessageElement;
  };

  interface HTMLAssisterMessageStatusElement extends Components.AssisterMessageStatus, HTMLStencilElement {}
  var HTMLAssisterMessageStatusElement: {
    prototype: HTMLAssisterMessageStatusElement;
    new (): HTMLAssisterMessageStatusElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'app-test': HTMLAppTestElement;
    'assister-chat': HTMLAssisterChatElement;
    'assister-checkmark': HTMLAssisterCheckmarkElement;
    'assister-conversation': HTMLAssisterConversationElement;
    'assister-fab': HTMLAssisterFabElement;
    'assister-input': HTMLAssisterInputElement;
    'assister-message': HTMLAssisterMessageElement;
    'assister-message-status': HTMLAssisterMessageStatusElement;
  }
}

declare namespace LocalJSX {
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'name'?: string;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppTest extends JSXBase.HTMLAttributes<HTMLAppTestElement> {}
  interface AssisterChat extends JSXBase.HTMLAttributes<HTMLAssisterChatElement> {
    'mapInputTextToHtml'?: (text: string) => any[];
    'triangle'?: MessageTriangle;
  }
  interface AssisterCheckmark extends JSXBase.HTMLAttributes<HTMLAssisterCheckmarkElement> {
    'ticks'?: 'one' | 'two';
  }
  interface AssisterConversation extends JSXBase.HTMLAttributes<HTMLAssisterConversationElement> {}
  interface AssisterFab extends JSXBase.HTMLAttributes<HTMLAssisterFabElement> {}
  interface AssisterInput extends JSXBase.HTMLAttributes<HTMLAssisterInputElement> {
    'onSend'?: (event: CustomEvent<AssisterInputChangeEventDetail>) => void;
  }
  interface AssisterMessage extends JSXBase.HTMLAttributes<HTMLAssisterMessageElement> {
    'direction'?: MessageDirection;
    'state'?: MessageState;
    'triangle'?: MessageTriangle;
  }
  interface AssisterMessageStatus extends JSXBase.HTMLAttributes<HTMLAssisterMessageStatusElement> {
    'state'?: MessageState;
  }

  interface IntrinsicElements {
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'app-test': AppTest;
    'assister-chat': AssisterChat;
    'assister-checkmark': AssisterCheckmark;
    'assister-conversation': AssisterConversation;
    'assister-fab': AssisterFab;
    'assister-input': AssisterInput;
    'assister-message': AssisterMessage;
    'assister-message-status': AssisterMessageStatus;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


