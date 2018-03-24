import { Injectable } from '@angular/core';
import { {{queryClassPostfix storeType}} } from '@datorama/akita';
import { {{pascalCase name}}{{#if UIStore}}UI{{/if}}Store } from './{{dashCase name}}.store';
import { {{pascalCase name}} } from './{{dashCase name}}.model';
import { State } from './{{dashCase name}}.store';

@Injectable()
export class {{pascalCase name}}{{#if UIStore}}UI{{/if}}Query extends {{queryClassPostfix storeType}}<State{{#if isEntityStore}}, {{pascalCase name}}{{/if}}> {

  constructor(protected store: {{pascalCase name}}{{#if UIStore}}UI{{/if}}Store) {
    super(store);
  }

}
