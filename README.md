# DB Simple Interface
----------------------------------------------------------

This is a simple database interface using:

   [Node.js](https://nodejs.org/en/)
   
   [Express.js](https://expressjs.com/)
   
   [Sequelize](http://docs.sequelizejs.com/)
   
   [PostgreSQL](https://www.postgresql.org/)
   
-----------------------------------------------------------------
   You need to have Nodejs and PostgreSQL installed to run this application
   
#### Enviornment
Start off by making a .env file:

          touch .env
   
This file needs to have our database information in it in this following format:

          DATABASE_URL=postgres://[username]:[password]@localhost:[port]/[database_name]
          
          
Where   
         
        "[username]" = the user of the databse

        "[password]" = password for this user
        
        "[port]" = the port number of the database (postgres defaults to port "5432")
        
        "[database_name]" = the name of the database (postgres defaults to "postgres")
        
You can edit the file manually or simply (example): 

         echo DATABASE_URL=postgres://razmikh:samplepass@localhost:5432/postgres >> .env



Once this is done now it is time to get our dependencies by running:
  
        npm install

To run the app run:

        npm run start
##### The app defaults to localhost:5000
