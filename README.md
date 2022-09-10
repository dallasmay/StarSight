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
StarSight was built with React.js and Redux for the front-end, Node.js with Express.js for the server, and a PostgreSQL database. User passwords are hashed using Bcrypt. The UI was designed by me using Adobe Illustrator and Figma.
## UI Images
![Screenshot of landing page. Dark blue background with the words "Astronomy Made Easy" in the middle with illustrated stars, moon and the big dipper surrounding it.](/StarSightScreenshots/LandingPage.jpg?raw=true "Landing Page")
![Screenshot of Find Page. Heading stating "Find the moon, planets, and stars in the night sky". Four cards are shown with illustrations of the Moon, Mercury, Venus, and Mars along with brief descriptions of them](/StarSightScreenshots/FindPage.jpg?raw=true "Find Page")
![Screenshot of the results page after searching for a celestial body. The azimuth and altitude are listed, along with a brief description of how to read them. The azimuth has an accompanying diagram of a compass, with degree marks. North is 0/360 degrees, East is 90 degrees, South is 180 degrees, and so on. The altitude has an accompanying diagram of an illustration of a person standing next to a right angle, with zero degrees being the ground and 90 degrees being straight up, with various markings of degrees in between](/StarSightScreenshots/FindBodyResultsPage.jpg?raw=true "Find Body Results Page")
![Screenshot of the checklist page. There are five baby-blue cards with a title and a type. Two of them are greyed out. The cards include title: Andromeda with type: Galaxy and title: Sirius with type: Star amongst others](/StarSightScreenshots/CheckListPage.jpg?raw=true "Checklist Page")
