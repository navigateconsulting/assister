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
  interface AppDemo {}
  interface AppProfile {
    'name': string;
  }
  interface AppRoot {}
  interface ChatCheckMark {
    'ticks': 'one' | 'two';
  }
  interface ChatConversation {
    'insertToBottom': (content: any) => Promise<unknown>;
    'insertToTop': (content: any) => Promise<void>;
  }
  interface ChatInput {}
  interface ChatMessage {
    'direction': MessageDirection;
    'footer': string;
    'state': MessageState;
    'triangle': MessageTriangle;
  }
  interface ChatMessageStatus {
    'state': MessageState;
  }
  interface ChatPane {
    'mapInputTextToHtml': (text: string) => any[];
    'send': (text: string) => Promise<any>;
    'triangle': MessageTriangle;
  }
  interface FabApp {}
}

declare global {


  interface HTMLAppDemoElement extends Components.AppDemo, HTMLStencilElement {}
  var HTMLAppDemoElement: {
    prototype: HTMLAppDemoElement;
    new (): HTMLAppDemoElement;
  };

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

  interface HTMLChatCheckMarkElement extends Components.ChatCheckMark, HTMLStencilElement {}
  var HTMLChatCheckMarkElement: {
    prototype: HTMLChatCheckMarkElement;
    new (): HTMLChatCheckMarkElement;
  };

  interface HTMLChatConversationElement extends Components.ChatConversation, HTMLStencilElement {}
  var HTMLChatConversationElement: {
    prototype: HTMLChatConversationElement;
    new (): HTMLChatConversationElement;
  };

  interface HTMLChatInputElement extends Components.ChatInput, HTMLStencilElement {}
  var HTMLChatInputElement: {
    prototype: HTMLChatInputElement;
    new (): HTMLChatInputElement;
  };

  interface HTMLChatMessageElement extends Components.ChatMessage, HTMLStencilElement {}
  var HTMLChatMessageElement: {
    prototype: HTMLChatMessageElement;
    new (): HTMLChatMessageElement;
  };

  interface HTMLChatMessageStatusElement extends Components.ChatMessageStatus, HTMLStencilElement {}
  var HTMLChatMessageStatusElement: {
    prototype: HTMLChatMessageStatusElement;
    new (): HTMLChatMessageStatusElement;
  };

  interface HTMLChatPaneElement extends Components.ChatPane, HTMLStencilElement {}
  var HTMLChatPaneElement: {
    prototype: HTMLChatPaneElement;
    new (): HTMLChatPaneElement;
  };

  interface HTMLFabAppElement extends Components.FabApp, HTMLStencilElement {}
  var HTMLFabAppElement: {
    prototype: HTMLFabAppElement;
    new (): HTMLFabAppElement;
  };
  interface HTMLElementTagNameMap {
    'app-demo': HTMLAppDemoElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'chat-check-mark': HTMLChatCheckMarkElement;
    'chat-conversation': HTMLChatConversationElement;
    'chat-input': HTMLChatInputElement;
    'chat-message': HTMLChatMessageElement;
    'chat-message-status': HTMLChatMessageStatusElement;
    'chat-pane': HTMLChatPaneElement;
    'fab-app': HTMLFabAppElement;
  }
}

declare namespace LocalJSX {
  interface AppDemo extends JSXBase.HTMLAttributes<HTMLAppDemoElement> {}
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'name'?: string;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface ChatCheckMark extends JSXBase.HTMLAttributes<HTMLChatCheckMarkElement> {
    'ticks'?: 'one' | 'two';
  }
  interface ChatConversation extends JSXBase.HTMLAttributes<HTMLChatConversationElement> {}
  interface ChatInput extends JSXBase.HTMLAttributes<HTMLChatInputElement> {
    'onSend'?: (event: CustomEvent<AssisterInputChangeEventDetail>) => void;
  }
  interface ChatMessage extends JSXBase.HTMLAttributes<HTMLChatMessageElement> {
    'direction'?: MessageDirection;
    'footer'?: string;
    'state'?: MessageState;
    'triangle'?: MessageTriangle;
  }
  interface ChatMessageStatus extends JSXBase.HTMLAttributes<HTMLChatMessageStatusElement> {
    'state'?: MessageState;
  }
  interface ChatPane extends JSXBase.HTMLAttributes<HTMLChatPaneElement> {
    'mapInputTextToHtml'?: (text: string) => any[];
    'triangle'?: MessageTriangle;
  }
  interface FabApp extends JSXBase.HTMLAttributes<HTMLFabAppElement> {}

  interface IntrinsicElements {
    'app-demo': AppDemo;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'chat-check-mark': ChatCheckMark;
    'chat-conversation': ChatConversation;
    'chat-input': ChatInput;
    'chat-message': ChatMessage;
    'chat-message-status': ChatMessageStatus;
    'chat-pane': ChatPane;
    'fab-app': FabApp;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


