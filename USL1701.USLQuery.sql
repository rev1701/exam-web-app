CREATE TABLE [User](
UserPK int NOT NULL IDENTITY(1,1) PRIMARY KEY,
fname varchar(40),
lname varchar(40),
UserType int FOREIGN KEY REFERENCES UserType(UserTypePK),
email varchar(50) NOT NULL UNIQUE,
password varchar(25) NOT NULL
);

CREATE TABLE UserType(
UserTypePK int NOT NULL IDENTITY(1,1) PRIMARY KEY,
Role varchar(30)
);

CREATE TABLE Batch(
BatchPK int NOT NULL IDENTITY(1,1) PRIMARY KEY,
BatchID varchar(40) NOT NULL UNIQUE,
Name varchar(80),
StartDate Date,
LengthInWeeks int
);

CREATE TABLE Roster(
UserID int FOREIGN KEY REFERENCES [User](UserPK),
BatchID int FOREIGN KEY REFERENCES Batch(BatchPK),
Status int FOREIGN KEY REFERENCES StatusType(StatusTypeID)
);

CREATE TABLE StatusType(
StatusTypeID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
[Description] varchar(30)
);

CREATE TABLE ExamSettings(
ExamSettingsID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
StartTime datetime,
LengthOfExamInMinutes int,
ExamTemplateID varchar (50),
Editable bit
);

CREATE TABLE ExamAssessment(
ExamAssessmentID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
UserID int FOREIGN KEY REFERENCES [User](UserPK),
SettingsID int FOREIGN KEY REFERENCES ExamSettings(ExamSettingsID),
TimeRemaining time,
IsExamComplete bit,
Score decimal(5,2)
);

CREATE TABLE QuestionOrder(
QuestionNumber int,
QuestionID varchar(50),
ExamAssessmentFK int FOREIGN KEY REFERENCES ExamAssessment(ExamAssessmentID)
);

CREATE TABLE ExamSettings_Batch(
SettingID int FOREIGN KEY REFERENCES ExamSettings(ExamSettingsID),
BatchID int FOREIGN KEY REFERENCES Batch(BatchPK)
);

CREATE TABLE ExamSettings_User(
SettingID int,
UserID int FOREIGN KEY REFERENCES [User](UserPK)
);