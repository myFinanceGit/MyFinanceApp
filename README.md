### Getting Started

1. Clone this repository
2. cd into directory 
3. run `npm install`
4. run `npm start` to start server locally
5. run `npm build` to transcompile TypeScript code and bundle react application to static assets into `dist` folder
6. run `docker build -t my-finance-app:v1 .` to build image
6. run `docker run --name my-finance-dev -d -p 127.0.0.1:3000:3000 my-react-app` to start server in container
7. Go to your browser and navigate to `localhost:3000`


Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
