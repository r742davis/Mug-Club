# Mug Club

## Current Development Stage - April 3, 20202

The app's design and functionality is essentially complete at this stage. Much of the work now involves minor details, unit testing, authentication, and developing the CSV-to-JSON conversion algorithm. 

Version 1.0 is expected to roll out by next week (April 6th)!

#### CSV-to-JSON Algorithm
I am currently using Papaparse to parse the CSV file that will be sent from the Madison Bear Garden main computer. I need to develop an algorithm that will automatically generate the customer database using my schema design. The number of customer datapoints numbers at about 15,000. This will only be a one-time operation, so time and space complexity aren't a huge issue.


## Motivation

A full stack, mobile-responsive React web app that checks you into Mug Club at the Madison Bear Garden. The Bear currently uses an Excel spreadsheet and laptop computer to look through over 14,000 names in order to find out whether someone has completed their series of challenges and is officially in their Mug Club. What I plan to do is create a web application so the customer can quickly pull up their ID and the Bear employees can check the ID as well as add customers via the companion website.

## Tech Stack:
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Express.js](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)

## Versioning
#### Version 1.0 - Backend Suite with React UI (In Development)

## Authors
* Richard Davis

## License
This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
