# StarSight
StarSight is an astronomy app designed to help users venture into the world of astronomy. StarSight helps you find celestial bodies in the night sky based off of your geographic location, allows you to keep track of everything you've seen, and lets you take notes related to your journey.
## Features
### Find
With the find feature, the users submits their target, their coordinates, and elevation. They're shown the location of their target in the night sky in the form of azimuth and altitude, as well as how to understand what both of those mean. When searching for Mars, users are also shown the latest weather forecast on the surface of Mars, courtesy of NASA's Curiosity Rover. 
### Track
With the track feature, users can create an account and login to keep track of their astronomy journey. Tracking takes two forms:
#### Checklist
The checklist allows users to add celestial bodies and events and check them off. The checklist is sorted based on checked status
#### Notes
Users can add general notes related to their astronomy journey. Notes are sorted based on date added.
## Tech Stack
StarSight was built with React.js and Redux for the front-end, Node.js with Express.js for the server, and a PostgreSQL database. User passwords are hashed using Bcrypt.
