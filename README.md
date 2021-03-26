# URLShortening
Shorten the regular URL link

Run the code:

1. Install NodeJs
2. Go to the project location.
3. Type "npm i" command to install node modules.
4. run "npm run start" command.
5. open "http://localhost:5000/" on your browser




Questions

1. How would you test this service?

- I do the testing using jest. I will check the following test cases:
  
  - Regular link is valid or not.
  - Whether short link is being generated.
  - Check if short link is working
  - Check if both links are being stored in a table.

2. What DB models would need to change to support multiple users?

- Add a new User collection with UserId attribute and add this UserId to the links collection.


3. How can this service support 1000 concurrent requests?

- It can be achieved with the help of AWS auto-scaling after we deploy it.


4. What kind of database models do you think would cause an issue? And why?

- I cannot think of any issues since it will consist of only 2 databse models.


5. Which parts of the service do you think are most likely to fail? And why?

- Regular links when they are invalid. 
