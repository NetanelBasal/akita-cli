import { {{pascalCase name}}{{#if UIStore}}UI{{/if}}Store } from "./{{dashCase name}}.store";
import { {{pascalCase name}}Service } from "./{{dashCase name}}.service";
import { {{pascalCase name}}DataService } from "./{{dashCase name}}-data.service";
import { {{pascalCase name}}{{#if UIStore}}UI{{/if}}Query } from "./{{dashCase name}}.query";

export const {{camelCase name}}Providers = [
  {{pascalCase name}}Service,
  {{pascalCase name}}DataService,
  {{pascalCase name}}{{#if UIStore}}UI{{/if}}Store,
  {{pascalCase name}}{{#if UIStore}}UI{{/if}}Query
];
