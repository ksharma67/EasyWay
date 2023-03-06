# EasyWay

## File Structure

Our application is structured as follows:

| File Name   | Description                                                            |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ProjectDocs      | This folder contains all the Project Deliverable files featured on the project Wiki page.    
| TeamPhotos   | This folder contains the photos of each team member that are used on the project Wiki page.   
| client   | This folder contains the codes for Front End.   
| db   | This folder contains the database schema and dummy data.   
| server   | This folder contains the codes for Back End server.  

## Technology Stack:
* Framework : Angular
* Backend : GoLang
* Database : MySQL (GORM Library)
* Version Control: Git
* Code Editor : Visual Studio Code

## Project Board:

Link : https://github.com/users/ksharma67/projects/2

## API Documentation:

Link : https://github.com/ksharma67/EasyWay/blob/main/API%20Documentation.md

## Running Backend Server:

* Clone the repository
```
git clone https://github.com/ksharma67/EasyWay.git
```
* Make sure you have mysql installed and correctly set up.
* Create a new database in MySQL using:
```
mysql -u root -p
```
Enter mysql password, then run:
```
create database easyWay;
```
* Goto config.go and update your mysql password
```
cd server/config/
code config.go
```
* Now navigate to server folder and run go server:
```
cd ./server/
go run main.go
```
Ignore any errors as it will check for required datatables (show the error), then automatically creates the datatables.

## Running Frontend Server:

Link : https://easywayapp.netlify.app

* Clone the repository
```
git clone https://github.com/ksharma67/EasyWay.git
```
* Install NodeJS LTS version from https://nodejs.org/en/ for your Operating System.
* Navigate to client folder and install required libraries:
```
cd ./client/
npm install
```
* In case of any error run audit and install once more:
```
npm audit fix --force && npm install
```
* Run the Angular Server:
```
npm start
```
