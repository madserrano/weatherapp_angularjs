[![Build Status](https://travis-ci.com/madserrano/SoftwareTools.svg?branch=master)](https://travis-ci.com/madserrano/SoftwareTools)

# **Team Rocket Weather App**
Software Tools and Emerging Tools for AI and ML Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## To set-up in your local machine

1. Run `ng serve` for a dev server. The app will automatically reload if you change any of the source files.
2. If you get dependency error, install devkit by running: `npm install @angular-devkit/build-angular`
3. Navigate to `http://localhost:4200/`. 

## To build and deploy to Firebase
**Pre-requisite:** 
Set-up Firebase account and project from firebase console <br>

1. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
2. Ensure that all the static files (e.g index.html) are placed inside the dist/folder.
3. Install firebase tools including cli by running `npm install -g firebase-tools`
4. Login to Firebase by running `firebase login --interactive`
5. Initiate firebase by running `firebase init hosting`
6. Answer all the required items correcttly.
7. Edit firebase.json file and ensure that the public line shows `public:dist` given that step-2 is confirmed.
8. Run `npm run build`
9. Run `firebase deploy`

FIREBASE URL (Prod): https://team-rocket-swt.web.app/<br>
HEROKU URL (Dev): https://weather-swt.herokuapp.com/ 

## Additional Info: 

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). 

#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
