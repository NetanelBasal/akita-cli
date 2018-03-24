import { Injectable } from "@angular/core";
import { ID } from '@datorama/akita';
import { {{pascalCase name}}{{#if UIStore}}UI{{/if}}Store } from "./{{dashCase name}}.store";

@Injectable()
export class {{pascalCase name}}Service {

  constructor( private {{camelCase name}}Store: {{pascalCase name}}Store) {
  }

  add({{camelCase name}}) {
    this.{{camelCase name}}Store.add({{camelCase name}});
  }

  update(id: ID, newState) {
    this.{{camelCase name}}Store.update(id, newState);
  }

  delete(id: ID) {
     this.{{camelCase name}}Store.remove(id);
  }

}
