DROP DATABASE IF EXISTS nodegame; -- Delete previous mygamedb 
CREATE DATABASE nodegame; -- Create the database
USE nodegame; -- Use the db we just created

-- Create the table to store the user data
CREATE TABLE userdata (
  username VARCHAR(12) PRIMARY KEY NOT NULL,
  password_hash VARCHAR(40) NOT NULL,
  registered TIMESTAMP DEFAULT NOW()
);
