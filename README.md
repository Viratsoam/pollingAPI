# pollingAPI
node based polling-API which can be used for the Question and answer based polling result like Quiz App.

# DEPENDENCY
  1."dotenv": "^8.2.0",
  2."express": "^4.17.1",
  3."mongoose": "^5.9.10",
  4."populate": "^5.0.1",
  5."nodemon"
  
# PROJECT SETUP
    Note:- npm should be there in your System
Steps:-

1. clone the repository
2. cd pollingAPI
3. npm install
4. npm install // if not nodemon there, than please install:- npm install nodemon
5. npm start

# API ROUTES
1. /questions/create -> To create a question
2. /questions/:id/options/create -> To add options to a question
3. /questions/:id/delete -> To delete a question
4. /options/:id/delete -> To delete an option
5. /options/:id/add_vote -> To increment the count of votes
6. /questions/:id -> To view a question and it's options


Important Note:- There can be any bug, I'm working on it for more improvements and to make it secure.

#WORK IN PROGRESS....
