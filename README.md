# **PreWithStrangers**

[Live Demo](https://prewithstrangers.herokuapp.com)

PreWithStrangers, inspired by TeaWithStrangers, is a website that helps connect athletes in a given city to help build community between them. PreWithStrangers was built with a Rails/PostgreSQL backend and a React.js and Redux frontend.

The project was designed and built within a two-week timeframe, though I plan to continue adding improvements over time.

## Features

- Secure frontend to backend user authentication using BCrypt.
- Users can set their hometown on registration but can also join events in other cities
- Users can view, create, update, and delete events (Pre Times).
- Users can join and leave events created by other Users.
- Dashboard adapts to display all joined and hosted events of a current user.

### Pre Times

The Pre Times feed renders all created events with a City Navigation Bar to scroll to the city's event. The anchor tag functionality will not work with React Router, so implementing React Route Hash Link solved the problem.

# INSERT PICTURE

# INSERT CODE BLOCK

Only cities with events will populate the city bar.

# INSERT PIC

### Dashboard

The Dashboard updates to display all events that the current logged-in user has joined or is hosting. From the Dashboardm the user can cancel a hosted event or can leave a joined event and the page will automatically render the new collection of Pre Times.

# INSERT IMAGE

To keep code DRY, the session form was shared between the sign up and sign in containers.

# INSERT CODE BLOCK

### Event Creating and Editing

Users can create events and edit them as well. Events require an event name, date, time, address, and description. The current user's user ID will be set as the event's host ID.

# INSERT GIF

## Project Design

PreWithStrangers was designed for functionality and simplicity. Produced in 2 weeks, the focus was on a few core features that ran smoothly. Keeping the code as simple as possible was chosen to help build the application in the future.

## Technologies

Rails was chosen due to its RESTful architecture and relational database support. This was a small-scale portfolio piece built in 2 weeks. Thus, Rails and Heroku were chosen to handle the load.

Frontend Redux states were set up such that there were separate reducers for users, events, cities, and RSVPs. This kept the state normalized which eased the task of keeping things updated when changes were made in the database.

### Additional Resources

#??????

## Possible Future Features

In the future, I would like to add:

- User Profiles
- Limit the number of attendees to an event to small groups of no more than 5 or 6
