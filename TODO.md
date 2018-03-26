# Mentor Weekly T0-DO:

---

## Incomplete Tasks:

###Front-end:

###API:

###Auth:

###Testing:

## Complete Tasks:

###Front-end:

* complete front-end for landing page
* code shallow dashboard components
* center help form elements
* add cancel button to profile form
* split functions for close, save, and cancel buttons in profile form
* fix dashboard responsiveness
* link "change mentor" button to help page
* link profile modal to help page sidebar
* figure out why match-info photo is too low
* fix dashboard length
* autofill profile Form: mentor
* autofill profile Form: mentee
* try adding onClick={() =>} to buttons with no func yet
  (removed onClick from ButtonLinks)
* add "linkTo" buttonlink props
* condense mentor & mentee form styles
* photo url line on form
* build pick a mentee page (add map func for mentee list)
* add placeholders to signup Form
* create an empty dashboard message
* differentiate pick a mentee from my info page: darker bkgrnd?
* move profile modal buttons to forms
* change first & last name inputs/labels
* change wide inputs to textareas
* credit photos in popup button on footer
* responsive nav bar
* add portfolio question to mentor form, add all fields to dashboards, except mentor lookingFor in match-info
* create different props for default message for mentor or mentee
* add get req for help page
* make "are you sure?" alert for remove mentee button
* convert button conditionals into styles
* group matchinfo fields into "mentor" or "mentee"
* change email question to reflect login environments
* condense button styles
* add on hover: curser to buttons
* dashboard hidden overflow issue: add space to bottom of children
* add link to sign-in if no userInfo
* bug: all delete mentee buttons open at once
* fix NOW redirect for role dashboard redirect
* delete any console.logs that arent for (err)
* larger font for screen-width 1080 and under
* no modal in internet explorer?
* Message about signup process: form, Auth0, email verify, dashboard

###API:

* remove passport code from user router
* code Router
* test in postman
* switch to API branch
* code fetch calls:
  * Mentor-dashboard get user
  * Mentee-dashboard get user
  * Mentor-form put req
  * Mentee-form put req
  * Signup-form post req
  * Mentor remove-mentee delete req
  * Mentor add-mentee put req
  * add mentor PUT req to "add mentee" button
* install sendgrid
* configure sendgrid
* deploy on "now" (next)
* Get user req: once user is identified, redirect mentors from mentee dashboard and mentees from mentor dashboard to correct dash
* pick-a-mentee GET req should return apiReprs w/o contact(email) property
* change matchinfo to not show contact for pick-a-mentee
* send email using sendgrid to mentees & mentors when chosen? (introduction email, what to expect)
* is it safe to have a GET all users req in router? -no
* redesign signup form

###Auth:

* Read Auth0 tutorial
* configure logout
* add user authentication token to all fetch calls
* redirect to sign-in on "join mentor weekly" click, not POST req
* have mentor form save form to localStorage on button click, make post request in auth service file instead
* have mentee form save form to localStorage on button click
* have login and verification email auto redirect to dashboard
* make sure all urls outside config.js are API_URL, not localhost

###Testing:

* smoke test components
* smoke test pages
* deep tests
