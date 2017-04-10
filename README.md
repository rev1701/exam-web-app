# Exam Assessment web application
Web app to create and take exams, using Angular and Bootstrap.

---
# technologies
- Angular 1.5
- Bootstrap
- CSS
- HTML
- JavaScript


---
# teams
(USL) User Scores Login
- Alain Bruno
- Erik May
- Michael Furlow
- Stephen Kirkland

(EA) Exam Assessment
- Devonte Holmes
- Paul Stanton
- Stephen Osei-Owusu
- Summer Wilkens

---
# license
Apache 2.0 (https://github.com/rev1701/exam-web-app/blob/master/LICENSE)

---
# coda
</>

# Database Info
Microsoft SQL Server Management Studio
db1701project3.ccadpnws7azu.us-west-1.rds.amazonaws.com
Databases
UserScoresLogin
Tables

# Documentation

## Primary Navigation Bar
The primary navigation bar is in the index.html file. This primary navigation bar will stay at the top unless an assocaite is taking an exam. The state is examinprogress, which can be found in the app.js file.
### Included files:
- index.html


## Login Screen
The first view is the login screen. A user is prompted to enter their email and password. If incorrect, there is a service called AuthenticationService that fires a response to display "Email or password is incorrect. Please try again."
### Included files:
- app.js
- ctrl/ctrl.js
- services.js
- login.html


## Associate's Welcome
Once an associate is granted authorization after authentication, they will see their welcome screen. It provides the associate's status (whether or not the associate is doing well or not), the current batch's name in which the user is in, and the trainer of the same batch. This page also calls the associate by name and gives them a more personal feel.
To be added, under the associate's name and type will be a list of exams available to the batch they are apart of. If an associate has already taken the exam, they will be able to review their answers and the score in which they received. If the exam time is not open yet, the only way they can interact with the exam is when the date and timeframe of the exam settings are met. 
### Included files:
- views/associateview_intro.html
- app.js
- ctrl/ctrl.js
- services.js


## Exam Settings
When an associate clicks an exam in which they haven't taken yet, it provides the day and time in which the exam officially opens and closes. This view also shows the length of the exam in minutes. The test could be open for 2 hours, but once the associate starts the exam, they don't have all 2 hours to take the test; that is what the length of the exam variable accounts for. If either the close time is met or the timer reaches zero, then the question that the associate is on will be saved, and the entire exam will be submitted.
This information is retrieved from the ExamSettings_Batch table.
- views/associateview_examsettings.html
- app.js
- ctrl/ctrl.js
- services.js


## Exam in Progress
This is the meat and butter of this project; where the two teams come together.
An associate is able to log into their account and select an exam. From this exam, each question corresponds with a number on the left side of the screen. For each associate in the batch, the exam should genereate the questions in random orders.
- views/associateview_examsettings.html
- views/examnavbar.html
- app.js
- ctrl/ctrl.js
- services.js
