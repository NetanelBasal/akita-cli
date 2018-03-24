const promptDirectory = require('inquirer-directory');
const path = require('path');

module.exports = function (plop) {

  plop.setWelcomeMessage(`💪 Welcome to Akita - The Store for Enterprise Applications 💪`);

  const basePath = process.cwd();

  plop.setPrompt('directory', promptDirectory);

  const chooseDirAction = {
    type: 'directory',
    name: 'directory',
    message: 'Where do you want to create the component?',
    basePath: basePath
  };

  function needToQueryForType(options) {
    const types = ['The Whole Shebang', 'Query', 'Store'];
    return types.some((t) => options.includes(t));
  }

  plop.setGenerator('Akita', {
    description: 'Create a new Service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Give me a name, please 😀'
      },
      {
        type: 'list',
        name: 'storeType',
        choices: ['Store', 'Entity Store'],
        message: 'What store do u need? 😊'
      },
      {
        type: 'confirm',
        default: false,
        name: 'UIStore',
        message: 'It\'s UIStore? 🍭'
      }
    ].concat(chooseDirAction),
    actions: function (data) {
      const {
        storeType,
        directory,
        UIStore,
        akita
      } = data;
      const isOneFile = akita !== 'The Whole Shebang';
      data.isStore = storeType === 'Store';
      data.isEntityStore = storeType === 'Entity Store';
      const dataService = {
        type: 'add',
        skipIfExists: true,
        path: buildPath("{{'dashCase' name}}-data.service.ts", directory),
        templateFile: './templates/data-service.tpl'
      };

      const index = {
        type: 'add',
        skipIfExists: true,
        path: buildPath("index.ts", directory),
        templateFile: './templates/index.tpl'
      };

      const model = {
        type: 'add',
        skipIfExists: true,
        path: buildPath("{{'dashCase' name}}.model.ts", directory),
        templateFile: './templates/model.tpl'
      };

      const providers = {
        type: 'add',
        skipIfExists: true,
        path: buildPath("{{'dashCase' name}}.providers.ts", directory),
        templateFile: './templates/providers.tpl'
      };

      const query = {
        type: 'add',
        skipIfExists: true,
        path: buildPath("{{'dashCase' name}}.query.ts", directory),
        templateFile: './templates/query.tpl'
      };

      const service = {
        type: 'add',
        skipIfExists: true,
        path: buildPath("{{'dashCase' name}}.service.ts", directory),
        templateFile: './templates/service.tpl'
      };

      const store = {
        type: 'add',
        skipIfExists: true,
        path: buildPath("{{'dashCase' name}}.store.ts", directory),
        templateFile: './templates/store.tpl'
      };

      const WholeShebang = [dataService, model, providers, query, service, store, index];

      return WholeShebang;
    }
  });


  plop.setHelper("storeClassPostfix", function (type, options) {
    switch (type) {
      case "Store":
        return `Store`;
      case "Entity Store":
        return `EntityStore`;
      default:
        return `Store`;
    }
  });

  plop.setHelper("queryClassPostfix", function (type, options) {
    switch (type) {
      case "Store":
        return `Query`;
      case "Entity Store":
        return `QueryEntity`;
      default:
        return `Query`;
    }
  });

  plop.setHelper("switch", function (value, options) {
    this._switch_value_ = value;
    var html = options.fn(this); // Process the body of the switch block
    delete this._switch_value_;
    return html;
  });

  plop.setHelper("case", function (value, options) {
    if (value == this._switch_value_) {
      return options.fn(this);
    }
  });


  function genPath(directory, file) {
    return path.resolve(basePath, directory, file);
  }

  function buildPath(name, baseLocalPath) {
    return `${basePath}/config/${baseLocalPath}/${name}`;
  }

};