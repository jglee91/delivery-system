# delivery-api-server

## 참고
```plaintext
# Set up Base Project Structure
- https://dev.to/ornio/node-js-express-with-typescript-eslint-jest-prettier-and-husky-part-1-1lin
- https://www.jeansnyman.com/Node/Express/Node-Express-with-TypeScript

```

## 01. Set up Project

1. create project directory and initialize project
    ```bash
    $ npm init -y
    ```

2. install dependencies
    ```bash
    $ npm i express
    $ npm i -D typescript ts-node-dev @types/node @types/express
    $ npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```

3. create typescript config file
    ```bash
    $ npx tsc --init
    ```

4. create follow project structure
    ```plaintext
    \
    ├─ node_modules
    ├─ src
    │   ├─ App.ts
    │   └─ index.ts
    ├─ .gitignore
    ├─ package-lock.json
    ├─ package.json
    ├─ README.md
    └─ tsconfig.json
    ```

5. modify package.json
    ```json
    {
      "main": "dist/app.js",
      "scripts": {
        "build": "tsc",
        "dev": "ts-node-dev --poll src/app.ts"
      }
    }
    ```

6. set up eslint and prettier
    ```bash
    $ npx eslint --init
    
    # To check syntax, find problems, and enforce code style
    # JavaScript modules (import/export)
    # None of these
    # Does your project use TypeScript? >> Yes
    # Where does your code run? >> Node
    # How would you like to define a style for your project? >> Use a popular style guide
    # Which style guide do you want to follow? >> Airbnb: https://github.com/airbnb/javascript
    # What format do you want your config file to be in? >> JavaScript
    # Would you like to install them now with npm? >> Yes

    # Then, it will generate the .eslint.js file
    ```

7. add prettier.config.js
    ```js
    // there are som default options that prettier does not override...
    module.exports = {
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
    };
    ```

