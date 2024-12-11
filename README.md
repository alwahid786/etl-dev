# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- ================================================= how to run this project -->

How To run this project , clone this project and save it in your pc
open project in VS Code
after open VS code open terminal of VS code , and write command 'npm i' to install node modules
after installing node modules , run the project by write command in terminal "npm run dev"

Congratulations! you have run your project

<!-- ================================================= how to show your data of API -->

first of all you should analyze the code structure for integrating api, so follow this path to open destination in VS code

you can see the list of folder/files on the left bar in vs code

open

src --> pages

in pages you can see two folder ,first one is auth which contain the login page, and second one is main which contain the user dashboard and dashboard showing the stepper.

your main work integrate api in pages folder and auth pages folder

the index file dashboard folder is Dashboard.jsx, open this file
in this file you can see the code , find <Stepper /> from the code, drag the cursor on this typo, then press ctrl + click, you will redirect to stepper.jsx code ,

in stepper.jsx

you can see this code which is mention below

      case 0:
        return <First setCurrentStep={setCurrentStep} />;
      case 1:
        return <Second setCurrentStep={setCurrentStep} />;
      case 2:
        return <Third setCurrentStep={setCurrentStep} />;
      case 3:
        return <Last setCurrentStep={setCurrentStep} />;





    these are the four steps of stepper

    you can open every component by click on it with (ctrl+click)

open these file i m commenting in respective files for what you need to do , and where you need to integrate API (export)
