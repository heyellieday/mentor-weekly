# Mentor Weekly T0-DO:

---

## Incomplete Tasks:

###Front-end:

* dashboard hidden overflow issue: add space to bottom of children
* add on hover: curser to buttons
* bug: all delete mentee buttons open at once
* change email question to reflect login environments
* add link to sign-in if no userInfo
* condense button styles
* render pages without user if no auth token

###API:

###Auth:

* pick-a-mentee GET req should return apiReprs w/o email property

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

###Auth:

* Read Auth0 tutorial
* configure logout
* add user authentication token to all fetch calls
* redirect to sign-in on "join mentor weekly" click, not POST req
* have mentor form save form to localStorage on button click, make post request in auth service file instead
* have mentee form save form to localStorage on button click
* have auth page auto redirect to dashboard
