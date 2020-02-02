/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Container,
} from 'inversify';
import {
  Activity,
  ActivityDefinition,
  Workflow,
} from './models';
import {
  ActivityUpdatedArgs,
} from './components/activity-editor/activity-editor';
import {
  AddActivityArgs,
  EditActivityArgs,
} from './components/designer/designer';

export namespace Components {
  interface ElsaActivityEditor {
    'activity'?: Activity;
    'container': Container;
    'showModal': boolean;
  }
  interface ElsaActivityPicker {
    'activityDefinitions': Array<ActivityDefinition>;
    'container': Container;
    'showModal': boolean;
  }
  interface ElsaContextMenu {
    'getContext': () => Promise<any>;
    'show': (e: MouseEvent, context?: any) => Promise<void>;
  }
  interface ElsaContextMenuItem {
    'text': any;
  }
  interface ElsaDesigner {
    'activityDefinitions': Array<ActivityDefinition>;
    'addActivity': (activity: Activity) => Promise<void>;
    'container': Container;
    'getActivity': (id: string) => Promise<Activity>;
    'getTransform': () => Promise<{ x: number; y: number; scale: number; }>;
    'getWorkflow': () => Promise<Workflow>;
    'registerService': (action: (container: Container) => void) => Promise<void>;
    'updateActivity': (activity: Activity) => Promise<void>;
    'workflow': Workflow | string;
  }
  interface ElsaDesignerHost {
    'container': Container;
  }
}

declare global {

  // Adding a global JSX for backcompatibility with legacy dependencies
  export namespace JSX {
    export interface Element {}
  }


  interface HTMLElsaActivityEditorElement extends Components.ElsaActivityEditor, HTMLStencilElement {}
  var HTMLElsaActivityEditorElement: {
    prototype: HTMLElsaActivityEditorElement;
    new (): HTMLElsaActivityEditorElement;
  };

  interface HTMLElsaActivityPickerElement extends Components.ElsaActivityPicker, HTMLStencilElement {}
  var HTMLElsaActivityPickerElement: {
    prototype: HTMLElsaActivityPickerElement;
    new (): HTMLElsaActivityPickerElement;
  };

  interface HTMLElsaContextMenuElement extends Components.ElsaContextMenu, HTMLStencilElement {}
  var HTMLElsaContextMenuElement: {
    prototype: HTMLElsaContextMenuElement;
    new (): HTMLElsaContextMenuElement;
  };

  interface HTMLElsaContextMenuItemElement extends Components.ElsaContextMenuItem, HTMLStencilElement {}
  var HTMLElsaContextMenuItemElement: {
    prototype: HTMLElsaContextMenuItemElement;
    new (): HTMLElsaContextMenuItemElement;
  };

  interface HTMLElsaDesignerElement extends Components.ElsaDesigner, HTMLStencilElement {}
  var HTMLElsaDesignerElement: {
    prototype: HTMLElsaDesignerElement;
    new (): HTMLElsaDesignerElement;
  };

  interface HTMLElsaDesignerHostElement extends Components.ElsaDesignerHost, HTMLStencilElement {}
  var HTMLElsaDesignerHostElement: {
    prototype: HTMLElsaDesignerHostElement;
    new (): HTMLElsaDesignerHostElement;
  };
  interface HTMLElementTagNameMap {
    'elsa-activity-editor': HTMLElsaActivityEditorElement;
    'elsa-activity-picker': HTMLElsaActivityPickerElement;
    'elsa-context-menu': HTMLElsaContextMenuElement;
    'elsa-context-menu-item': HTMLElsaContextMenuItemElement;
    'elsa-designer': HTMLElsaDesignerElement;
    'elsa-designer-host': HTMLElsaDesignerHostElement;
  }
}

declare namespace LocalJSX {
  interface ElsaActivityEditor {
    'activity'?: Activity;
    'container'?: Container;
    'onActivity-updated'?: (event: CustomEvent<ActivityUpdatedArgs>) => void;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'showModal'?: boolean;
  }
  interface ElsaActivityPicker {
    'activityDefinitions'?: Array<ActivityDefinition>;
    'container'?: Container;
    'onActivity-selected'?: (event: CustomEvent<any>) => void;
    'onHidden'?: (event: CustomEvent<any>) => void;
    'showModal'?: boolean;
  }
  interface ElsaContextMenu {
    'onContext-menu'?: (event: CustomEvent<any>) => void;
  }
  interface ElsaContextMenuItem {
    'text'?: any;
  }
  interface ElsaDesigner {
    'activityDefinitions'?: Array<ActivityDefinition>;
    'container'?: Container;
    'onAdd-activity'?: (event: CustomEvent<AddActivityArgs>) => void;
    'onEdit-activity'?: (event: CustomEvent<EditActivityArgs>) => void;
    'workflow'?: Workflow | string;
  }
  interface ElsaDesignerHost {
    'container'?: Container;
  }

  interface IntrinsicElements {
    'elsa-activity-editor': ElsaActivityEditor;
    'elsa-activity-picker': ElsaActivityPicker;
    'elsa-context-menu': ElsaContextMenu;
    'elsa-context-menu-item': ElsaContextMenuItem;
    'elsa-designer': ElsaDesigner;
    'elsa-designer-host': ElsaDesignerHost;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'elsa-activity-editor': LocalJSX.ElsaActivityEditor & JSXBase.HTMLAttributes<HTMLElsaActivityEditorElement>;
      'elsa-activity-picker': LocalJSX.ElsaActivityPicker & JSXBase.HTMLAttributes<HTMLElsaActivityPickerElement>;
      'elsa-context-menu': LocalJSX.ElsaContextMenu & JSXBase.HTMLAttributes<HTMLElsaContextMenuElement>;
      'elsa-context-menu-item': LocalJSX.ElsaContextMenuItem & JSXBase.HTMLAttributes<HTMLElsaContextMenuItemElement>;
      'elsa-designer': LocalJSX.ElsaDesigner & JSXBase.HTMLAttributes<HTMLElsaDesignerElement>;
      'elsa-designer-host': LocalJSX.ElsaDesignerHost & JSXBase.HTMLAttributes<HTMLElsaDesignerHostElement>;
    }
  }
}

