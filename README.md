# Mentor Weekly

[Mentor Weekly](https://mentor-weekly.now.sh/) is a free platform that connects tech mentors to up-and-coming engineers.

Try the live demo at https://mentor-weekly-demo.now.sh/.


## Technologies Used

Mentor Weekly was built with React, NodeJS, and Express. The project also uses images created in Adobe Illustrator, emails using SendGrid, authorization with Auth0, and tested with Enzyme, Jest, and Mocha/Chai libraries.

This project uses [Next.js](https://github.com/zeit/next.js/) and was deployed with [now](https://zeit.co/now).

Landing page photos courtesy of [WOCinTech](https://www.wocintechchat.com/) CC BY 4.0.

## Development Setup:

* npm install
* source .env
* npm run dev

## Mentor Weekly API:

* POST /api/users/ - creates a new user
* GET /api/users/:authId - fetches user data based on Auth0 sign-in ID
* GET /api/users/pick-a-mentee - gets list of mentees looking for a mentor
* DELETE /api/users/:authId - delete user account
* DELETE /api/users/:mentorId/:menteeId - mentor clears 1 mentor/mentee connection from their own and a mentee's account
* PUT /api/users/:userId - updates user data
* PUT /api/users/:mentorId/:menteeId - mentor adds a mentor/mentee connection to their own and a mentee's account.  This request also triggers an introduction email being sent to both parties via SendGrid.
* POST /api/help - Sends the user's help request email to a Mentor Weekly admin member via SendGrid.

## Mockups

### Landing Page:

![Mentor Weekly landing page mockup](./mockups/mentor-mockups-landingpage.jpg)

### Mentee Dashboard:

![Mentor Weekly mentee dashboard mockup](./mockups/mentor-mockups-mentee-dashboard.jpg)

### Mentor Dashboard:

![Mentor Weekly mentor dashboard mockup](./mockups/mentor-mockups-mentor-dashboard.jpg)

### Help Page:

![Mentor Weekly help page mockup](./mockups/mentor-mockups-help.jpg)
