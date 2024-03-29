# test_QATesters - work with orders

https://noak-sergey.github.io/test_QATesters/

## Install all packages... (yarn install ~ or ~ npm install)

yarn add -D eslint prettier
yarn add -D eslint-plugin-react => exclude writing anti-patterns
yarn add -D eslint-plugin-react-hooks => check valid hooks in react code
yarn add -D eslint-plugin-import => check all imports for correct work
yarn add -D eslint-plugin-prettier
yarn add -D eslint-plugin-jsx-a11y => check code for people with disabilities

## Full command:

yarn add -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-prettier

yarn add -D eslint-config-airbnb => airbnb config
yarn add -D eslint-config-prettier => prettier config, no conflict with airbnb
yarn add -D eslint-import-resolver-typescript => for correct work eslint-plugin-import package with typescript

## Full command:

yarn add -D eslint-config-airbnb eslint-config-prettier eslint-import-resolver-typescript

## Full command:

yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

## Create file

Create .env in your project folder.
Create .prettierrc file in your project folder.
Create .eslintrc.json file in your project folder.
Create .eslintignore in your project folder => eslint don't will analizing added files and
from package.json delete "eslintConfig"

### `yarn json-server -w db.json`

Start this command. And then open second window of terminal and start next command bellow.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
