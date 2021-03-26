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

- I do the testing using jest. I will test the following test cases:
  
  - Regular link is valid or not.
  - Whether short link is being generated.
  - Check if short link is working
  - 

2. What DB models would need to change to support multiple users?

- Add a new User table and add a UserId column to the links table


3. How can this service support 1000 concurrent requests?

- It can be achieved with the help of AWS auto-scaling after we deploy it.


4. What kind of database models do you think would cause an issue? And why?

- 


5. Which parts of the service do you think are most likely to fail? And why?

- Regular links when they are invalid. 
