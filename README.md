# Respresso Angular demo.

You'll need java installed on your machine.

## Configuration

In *respresso.json* you can customize:
- projectToken: Change it to you project's token
- targetDirectory: optional, defaults to *respresso*
- resources: only import what you need and you can change the version number, too

## Include resources into your web application

To start using Respresso in your app takes almost zero time and effort. After configuring your Respresso project, just issue `npm run sync` and you can start using your resources.

### Localization

This demo uses [@ngx-translate](https://github.com/ngx-translate/core), so you can find all relevant info there. Respresso files are imported in *src/app/app.module.ts*.

### SASS

You need to import the color definitions in every scss files :( You can find a sample in *src/app/app.component.scss*.

### Images

Find a sample use of svg in *src/app/app.component.ts*.

### Fonts

TBD


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
