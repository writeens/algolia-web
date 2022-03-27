# Algolia Restaurant

# Dev
To Start Development you need to:
1. Install all dependencies
   `npm install`
2. Start Development Mode
   Check the `.env.example` file for the list of supported environment variables and update the values in your environment accordingly
3. Run `npm start`, this runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
The project uses ESLint for linting so you may see any lint errors in the console.

# Build
To build entire application for a production ready release, make sure you are in the root then run
`npm run build`
This creates a build folder with all the compiled files.

# Application Structure
## src folder
    - contains all of the application's pieces including components, stylesheets, api's etc
## api folder
    - contains all of the apis used in the application leveraging the browser's fetch api
## components folder
    - This contains all the smaller components which were set up to complete specific tasks, including components set up to handle forms, navbar etc.
## constants folder
    - All constants used across the application are placed in this folder to avoid string mismatch when referencing items
## context folder
    - Contains a simple context state shared between components.
## functions folder
    - This contains all the Netlify functions handling indexing operations such as deleting an object from the index or adding an object to the index.
## helpers folder
    - helper functions used across the application to perform minor tasks such as string manipulation, timing, determining credit card types
## hooks folder
    - Contains all the custom React hooks used across the application to perform minor tasks such as synchronizing the URL with Instant-Search
## interfaces folder
    - Contains all the custom TypeScript interfaces used accross the application. It includes Props and Object interface definitions.
## modals folder
    - All the modals used across the application can be found in this folder
## styles folder
    - Contains all the global and component level stylesheet used accross the application. For every modular component exists a corresponding stylesheet.
## App.tsx
    - entry point of the application. Contains all the Wrapper components for modules such as Context Provider, React Instant Search component/provider etc.