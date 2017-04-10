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

