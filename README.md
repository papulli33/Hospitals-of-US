# PROJECT AND TUTORIAL

## Introduction:

- ### Context - why this project?
In recent days, pandemic and COVID-19 have become one of the normals of our lives. Hospitals have become much more important since this disease entered our lives. That's why we wanted to do this project that will make life easier for people both in COVID-19 days and in normal life. For this, we chose United States, which is one of the countries where the disease is most common.
- ### Project Aim & Goals
 This project was designed and created for you to get information about hospitals. Its purpose is to make people's lives easier. It allows you to open it before going to the hospital and check the status of the hospitals from this application, or when you go to a city you do not know, you get information about the address, type, status of the hospitals in that region.
 
 Although the project does not work with up-to-date data at the moment, we plan to develop it and bring it to that level in the future.
 
> **Website Link**: https://hospitals-hacettepe.herokuapp.com/

## Technologies used

- ### PostgreSQL
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="postgresql" width="200" height="200"/> </a> 

**PostgreSQL** is an open source and completely free object-relational database system with powerful features and benefits. Taking advantage of the security, storability and scalability features of the SQL language, PostgreSQL is also used as a database manager in many areas.

> **For Download PostgreSQL**: https://www.youtube.com/watch?v=RAFZleZYxsc

> **Link of Dataset Used in the Project**: https://www.kaggle.com/andrewmvd/us-hospital-locations

- ### Postman
<a href="https://www.postman.com/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="postman" width="200" height="200"/> </a> 

**Postman** is a tool called "rest client" used to share, test, document, monitor APIs without the need for long codes.

> **For Download Postman**: https://www.youtube.com/watch?v=MCPdfuzmyxY

- ### ASP.NET WebAPI
<a href="https://dotnet.microsoft.com/en-us/apps/aspnet/apis" target="_blank" rel="noreferrer"> <img src="https://www.mshowto.org/images/articles/2019/10/1-2.jpg" alt="aspnet" width="300" height="200"/> </a> 

**ASP.NET WebAPI** is a framework used to create services that can communicate over the HTTP protocol that can be consumed by numerous different types of clients (browsers, mobile phones, tablets, pc, etc.).
 
- ### Angular
<a href="https://angular.io/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png" width="200" height="200"/> </a>

**Angular** is an open-source JavaScript based MVC library provided by Google and developers around the world. In summary, it is a structural framework for dynamic web applications.

- ### Visual Studio Code
<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode" width="200" height="200"/> </a> 

**Visual Studio Code** is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.

> **For Download Visual Studio Code**: https://www.youtube.com/watch?v=V3o57MU5eoE

- ### OpenLayers
<a href="https://openlayers.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/OpenLayers_logo.svg/2048px-OpenLayers_logo.svg.png" alt="vscode" width="200" height="200"/> </a> 

**OpenLayers** is a simple open-source JavaScript library with no server-side dependencies that allows us to develop functional map applications to display map data in most modern web browsers.

## Back-End Setup 
> **Back-End Link**: https://github.com/papulli33/Back-End-Hospitals-of-US
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

<a><img src="https://i.imgur.com/fU4HFpg.png" width="800" height="150"/></a>

## Project Description

- **Screenshots of the application**
<p><a><img src="https://i.imgur.com/t4ZOL7y.png" width="700" height="400"/></a></p>
<p><a><img src="https://i.imgur.com/fNBMU0T.png" width="700" height="400"/></a></p>
<p><a><img src="https://i.imgur.com/pjoEm4E.png" width="700" height="400"/></a></p>
<p>Visualized the data in the latitude and longitude columns in the dataset and on the map using OpenLayers.</p>
<p><a><img src="https://i.imgur.com/s3W9pIa.png" width="300" height="300"/></a></p>
<p>We paid great attention to the user-oriented interface of the website. The user should be able to comprehend what he can do only as far as he sees while using the site. However, since it is an application that appeals to all age ranges, we have added a small usage for filtering.</p>
<p><a><img src="https://i.imgur.com/fOeo2a7.png" width="300" height="300"/></a></p>
<p>You can see a hospital icon at some points on the map, and red circles with a number at some points. The reason for this was that if all of the more than 7500 hospitals were displayed with icons, the user would not be able to press the icon they wanted comfortably at the nearby points and there would be confusion. We found the solution to this by connecting the dots and as the user zooms in, the dots will appear on the map.</p>

- **Before:**
<p><a><img src="https://i.imgur.com/Pws0UVE.png" width="400" height="300"/></a></p>

- **After:**
<p><a><img src="https://i.imgur.com/TuT4ai8.png" width="500" height="400"/></a></p>
<p>Since only seeing the data on the map does not make much sense for the user, we have also added the features of the hospitals to the site. In order for the user to find it easily, when he clicks on the relevant hospital icon, he will be able to find the information easily.</p>
<p>User can change the map to be displayed from the button in navigation bar, the layers that can be selected are “Open Street Maps”, and “Bing Maps”.</p>
<p><a><img src="https://i.imgur.com/bYTPGAa.png" width="150" height="50"/></a></p>
<p><a><img src="https://i.imgur.com/wWSd0KI.png" width="250" height="150"/></a></p>
<p><a><img src="https://i.imgur.com/plQJ1QW.png" width="300" height="300"/></a></p>
<p>As described above, we added a filtering feature as it may take hours for the user to find the hospital with the desired feature.</p>
<p><a><img src="https://i.imgur.com/gHhqmR2.png" width="300" height="300"/></a></p>
<p>They can use the above features related to hospitals as follows.</p>

> **1.Name:** If you know the name of the hospital, you can access information about it on the map by directly typing its name.</p>
<p><a><img src="https://i.imgur.com/dlcwkbD.png" width="200" height="100"/></a></p>
<p><a><img src="https://i.imgur.com/xDe3epZ.png" width="200" height="200"/></a></p>

> **2.State:** We do not want the user to enter input for states. We list the states in the dataset and the user chooses one of them.</p>
<p><a><img src="https://i.imgur.com/9fulJAB.png" width="250" height="400"/></a></p>

> **3.Type:** It keeps the hospital types in Type. As in State, the user is expected to select from the list.</p>
<p><a><img src="https://i.imgur.com/IqNhYdl.png" width="200" height="300"/></a></p>

> **4.Status:** It inquires whether the hospital is open or closed.</p>
<p><a><img src="https://i.imgur.com/wyMvsMF.png" width="250" height="150"/></a></p>

<p>You do not have to apply just one of these filters. Because, for example, you can filter for women hospitals in Texas that are open. That's why you can search for more than one feature.</p>
<p><a><img src="https://i.imgur.com/UINAMJH.png" width="300" height="150"/></a></p>

**Warning:** The only point you should pay attention to here is that you can apply a filter on top of a filter. If you are done with the filter, you can say “Reset Filters” and do a new action.
<p><a><img src="https://i.imgur.com/9Nt0ark.png" width="200" height="70"/></a></p>

<p>When there is too much data after filtering, it will take a lot of time to click on the icons on the map one by one to see them. Instead, you can click the "Filter Result in Table" button on the top right of the site and see the data on the table.</p>
<p><a><img src="https://i.imgur.com/QLvlgcw.png" width="150" height="50"/></a></p>
<p><a><img src="https://i.imgur.com/CsH1mZW.png" width="400" height="300"/></a></p>
<p>We have added error messages indicating that the user has made an incorrect operation during the transactions and describing the solution of the error.</p>

- **1.Multiple hospital click error**
<p><a><img src="https://i.imgur.com/NA9zaUR.png" width="250" height="100"/></a></p>

- **2.Error if the new filter results in an empty set.**
<p><a><img src="https://i.imgur.com/VSlMlRj.png" width="250" height="100"/></a></p>

<p>No warning messages just for error messages. What the site is doing at that moment, for example, the information that the site is loading, or the information that the filter you have done is working successfully is displayed to the user.</p>

- **a.** Loading icon</p>
<p><a><img src="https://i.imgur.com/NTLBZ3j.png" width="100" height="130"/></a></p>

- **b.** Data successfully retrieved.</p>
<p><a><img src="https://i.imgur.com/xC5mZbe.png" width="200" height="100"/></a></p>

- **c.** Filters reset</p>
<p><a><img src="https://i.imgur.com/5JuOK7e.png" width="200" height="100"/></a></p>

- **d.** Filters successfully applied.</p>
<p><a><img src="https://i.imgur.com/ZD79Lwo.png" width="200" height="100"/></a></p>
