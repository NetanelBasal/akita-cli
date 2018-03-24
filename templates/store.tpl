import { Injectable } from "@angular/core";
import { {{#if isEntityStore}}EntityState, getInitialState, {{/if}}{{storeClassPostfix storeType}} } from '@datorama/akita';
import { {{pascalCase name}} } from "./{{dashCase name}}.model";

{{#switch storeType}}
{{#case "Store"}}
export interface State {

}
{{/case}}
{{#case "Entity Store"}}
export interface State extends EntityState<{{pascalCase name}}> {}
{{/case}}
{{/switch}}

export const initialState: State = {
  {{#if isEntityStore}}...getInitialState(){{/if}}
};

@Injectable()
export class {{pascalCase name}}{{#if UIStore}}UI{{/if}}Store extends {{storeClassPostfix storeType}}<State{{#if isEntityStore}}, {{pascalCase name}}{{/if}}> {

  constructor() {
    super(initialState);
  }

}

