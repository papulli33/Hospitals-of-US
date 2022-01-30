# Hospitals of US

  This project was designed and created for you to get information about hospitals. Its purpose is to make people's lives easier. It allows you to open it before going to the hospital and check the status of the hospitals from this application, or when you go to a city you do not know, you get information about the address, type, status of the hospitals in that region.

  Although the project does not work with up-to-date data at the moment, we plan to develop it and bring it to that level in the future.

## Technologies used

<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> <img src="https://icon-library.com/images/postgresql-icon/postgresql-icon-12.jpg" alt="postgresql" width="300" height="200"/> </a> 
- ### PostgreSQL
**PostgreSQL** is an open source and completely free object-relational database system with powerful features and benefits. Taking advantage of the security, storability and scalability features of the SQL language, PostgreSQL is also used as a database manager in many areas.

<a href="https://www.postman.com/" target="_blank" rel="noreferrer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF45jyWte9UduavN70GHcaNrrctqhKDFC1mIdo2mVVxn4C_mEhgMx5kqw3jMeZem5t9A0&usqp=CAU" alt="postman" width="200" height="200"/> </a> 
- ### Postman
**Postman** is a tool called "rest client" used to share, test, document, monitor APIs without the need for long codes.

<a href="https://dotnet.microsoft.com/en-us/apps/aspnet/apis" target="_blank" rel="noreferrer"> <img src="https://www.mshowto.org/images/articles/2019/10/1-2.jpg" alt="aspnet" width="300" height="200"/> </a> 
- ### ASP.NET WebAPI
**ASP.NET WebAPI** is a framework used to create services that can communicate over the HTTP protocol that can be consumed by numerous different types of clients (browsers, mobile phones, tablets, pc, etc.).

<a href="https://angular.io/" target="_blank" rel="noreferrer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiTvC39iFN0YPwziixoRGxJrqdTmYH-YoqbylrmCi_Tfv88xqz2gEqN73AH-yJQ5on-c&usqp=CAU" width="200" height="200"/> </a> 
- ### Angular
**Angular** is an open-source JavaScript based MVC library provided by Google and developers around the world. In summary, it is a structural framework for dynamic web applications.

<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode" width="200" height="200"/> </a> 
- ### Visual Studio Code
**Visual Studio Code** is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.

<a href="https://openlayers.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/OpenLayers_logo.svg/2048px-OpenLayers_logo.svg.png" alt="vscode" width="200" height="200"/> </a> 
- ### OpenLayers
**OpenLayers** is a simple open-source JavaScript library with no server-side dependencies that allows us to develop functional map applications to display map data in most modern web browsers.

## Back-End Setup 
<p><a href="https://github.com/dincer-ince/Hospitals-asp" target="_blank" rel="noreferrer"> Back-End Link </a></p>
Eğer projeyi geliştirmek isterseniz back-end çok daha önemli hale gelecektir. Fakat şu anlık projede back-end olmasa da olurdu.Ben projeyi geliştirmek istediğim için ekledim.

### Setup
- Microsoft .NET SDK 3.1.0 kurmanız gerekmektedir. <a href="https://dotnet.microsoft.com/en-us/download/dotnet/3.1" target="_blank" rel="noreferrer">Download Microsoft .NET SDK 3.1.0</a>
- ASP.NET Core Runtime 3.1.0 kurulmalıdır. Bunun içinde yukarıdaki linkten ilgili kurulum yapılmalıdır.
- Daha sonra Visual Studio Code üzerinden proje açılır ve terminaline "dotnet build" yazılır.
- Ve projeyi "https://localhost:5001/" çalıştırmak için "**dotnet watch run**" yazıp projeyi çalıştırmanız yeterli olacaktır.

## Front-End Setup
Bu proje için sadece front-end kurmamız bu proje için yeterlidir. Projenin back-end'i ve veritabanı statik veri çekmek içindir.

### Projenin Kurulması İçin İndirilmesi Gereken Teknolojiler
- Visual Stuio Code'u bilgisayarınıza kurun. <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">Download Visual Stuio Code</a>
- Node.js'i bilgisayarınıza kurun. <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Download Node.js</a>
> Node.js kurulumu sırasında karşınıza çıkacak olan tüm seçenkleri seçin.
- Node.js kurduktan sora bilgisayarınıza **npm** de indirilmiş olması lazımdır.
- Angular'ı indirmek için terminali açıp "**npm install -g @angular/cli**" yazmanız gerekmektedir. 

### Setup
- Github'tan projeyi bilgisayarınıza clone'layın.
- Clone'lenmiş projenin directory'sini gidin ve Visual Studio Code üzerinden açın.
- Projeyi açtıktan sonra terminali açın ve "**npm install**" yazın.
- Kurulum bittikten sonra yine aynı şekilde "**ng update**" yazın 
- Yine aynı şekilde kurulumdan sonra "**npm run build**" yazın ve en son "**ng build**" yazın.
- Daha sonra kurulum bittikten sonra "**ng serve --o**" yazarak çalıştırdıktan sonra projeyi "http://localhost:4200/" üzerinden görebilirsiniz. 

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


