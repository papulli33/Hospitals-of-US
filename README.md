# Hospitals of US

  This project was designed and created for you to get information about hospitals. Its purpose is to make people's lives easier. It allows you to open it before going to the hospital and check the status of the hospitals from this application, or when you go to a city you do not know, you get information about the address, type, status of the hospitals in that region.

  Although the project does not work with up-to-date data at the moment, we plan to develop it and bring it to that level in the future.

> **Website Link**: https://hospitals-hacettepe.herokuapp.com/

## Technologies used

<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="postgresql" width="200" height="200"/> </a> 
- ### PostgreSQL
**PostgreSQL** is an open source and completely free object-relational database system with powerful features and benefits. Taking advantage of the security, storability and scalability features of the SQL language, PostgreSQL is also used as a database manager in many areas.

> **Link of Dataset Used in the Project**: https://www.kaggle.com/andrewmvd/us-hospital-locations

<a href="https://www.postman.com/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="postman" width="200" height="200"/> </a> 
- ### Postman
**Postman** is a tool called "rest client" used to share, test, document, monitor APIs without the need for long codes.

<a href="https://dotnet.microsoft.com/en-us/apps/aspnet/apis" target="_blank" rel="noreferrer"> <img src="https://www.mshowto.org/images/articles/2019/10/1-2.jpg" alt="aspnet" width="300" height="200"/> </a> 
- ### ASP.NET WebAPI
**ASP.NET WebAPI** is a framework used to create services that can communicate over the HTTP protocol that can be consumed by numerous different types of clients (browsers, mobile phones, tablets, pc, etc.).

<a href="https://angular.io/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png" width="200" height="200"/> </a> 
- ### Angular
**Angular** is an open-source JavaScript based MVC library provided by Google and developers around the world. In summary, it is a structural framework for dynamic web applications.

<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode" width="200" height="200"/> </a> 
- ### Visual Studio Code
**Visual Studio Code** is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.

<a href="https://openlayers.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/OpenLayers_logo.svg/2048px-OpenLayers_logo.svg.png" alt="vscode" width="200" height="200"/> </a> 
- ### OpenLayers
**OpenLayers** is a simple open-source JavaScript library with no server-side dependencies that allows us to develop functional map applications to display map data in most modern web browsers.

## Back-End Setup 
> **Back-End Link**: https://github.com/dincer-ince/Hospitals-asp
> 
If you want to improve the project, the back-end will become much more important. But at the moment, there is not much to do back-end in the project. I added it because I wanted to improve the project.

### Setup
- You need to install Microsoft .NET SDK 3.1.0. <a href="https://dotnet.microsoft.com/en-us/download/dotnet/3.1" target="_blank" rel="noreferrer">Download Microsoft .NET SDK 3.1.0</a>
- ASP.NET Core Runtime 3.1.0 must be installed. In this, the relevant installation should be done from the link above.
- Then the project is opened via Visual Studio Code and "dotnet build" is written to the terminal.
- And to run the project "https://localhost:5001/", simply type "**dotnet watch run**" and run the project.


### Understanding The Project
<a><img src="https://i.imgur.com/AFyZ0ld.png" width="300" height="500"/></a>

- The Controllers folder is where the API manages the http requests
- Inside of it there is the hospitalController.cs file which controls the table in the database that holds the hospitals, as there is only one table in the database, there is only need for one controller at this moment.
- The Models folder hosts the model for the table which we interact with, the model file itself is just table columns as variables.
- There is also the context file which is what we interact with in the controller, It uses the model to make sense of the database table and helps to manipulate our data.


## Front-End Setup
For this project, we only need to install the front-end for this project. The back-end of the project and the database are for pulling static data.

### Technologies Required to Download to Install the Project
- Install Visual Stuio Code on your computer. <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">Download Visual Stuio Code</a>
- Install Node.js on your computer. <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Download Node.js</a>
> Select all the options that will appear during the Node.js installation.
- After installing Node.js, **npm** should be downloaded to your computer.
- To download Angular, you need to open terminal and type "**npm install -g @angular/cli**".

### Setup
- Clone the project from Github to your computer.
- Go to the directory of the cloned project and open it via Visual Studio Code.
- After opening the project open terminal and type "**npm install**".
- After the installation is finished, type "**ng update**" in the same way
- In the same way, type "**npm run build**" after installation and write "**ng build**" last.
- After the installation is finished, you can see the project on "http://localhost:4200/" after running it by typing "**ng serve --o**".

### Understanding The Project
<a><img src="https://i.imgur.com/QWnaTb1.png" width="300" height="500"/></a>

This is the project directory, the files and folders we are interested in order to understand the project briefly are in the **src** folder.

<a><img src="https://i.imgur.com/oH044NV.png" width="300" height="300"/></a>
- Inside the src folder,
- In the assets folder we have the assets that are used in the project,
- In the app folder we have the main part of the project
- The styles.css file includes the global css stylesheet of the project, however for components we mainly use the stylesheet that comes with the component.

<a><img src="https://i.imgur.com/eqH6EZ1.png" width="300" height="300"/></a>

- Inside the app folder we have,
- _services folder which has our hospital service which we use to hold our http request (You can look up angular services to understand more about its uses.)
- Spinner folder is the spinner component, which is what is displayed when the page is first loaded.
- Mainpage folder is the base component of the project, all the logic, template and most of the styles are included inside it.
- Inside mainpage folder there is mainpage.component.ts file which contains the logic of the component, this file is where to write the functions on.
- In the mainpage.component.html file, there is the template of the website, it contains all the html of the project except the spinner.
- The mainpage.component.css, includes the stylesheet of the component.

## Relationship between Back-End and Front-End

<a><img src="https://i.imgur.com/fU4HFpg.png" width="1000" height="150"/></a>



