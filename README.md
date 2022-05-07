# CourseSearch-Frontend

* Check-out the site here: https://go-course-search.herokuapp.com/

> Back-end link of project can be found here: https://github.com/Chrislee1996/CourseSearch-API

# User story

* The main inspiration of this project came back when I was in undergrad and I wanted to take some online courses for credits so I could graduate in time. However, I had trouble looking up if certain certain classes information while also, having to research beyond the class itself such as looking up the material taught and how the professor was in terms of teaching. This app will allow users to search up courses and determine if they want to take the course. This app will also allow users to find courses that will just simply help their general knowledge outside of college courses (such as courses from Udemy)

* As a user, I want to be able to sign-up or login if I already have an account

* As a user, I want to see a list of courses and what material is taught. From this, when clicking on the course info, I want more detailed information regarding the course such as if it is remote or online, the professor, what they teach and the amount credits offered.

* As a user, I want there to be a external link if I want to take the course and the link will re-direct me to the course page

* As a user, I want to be able to add a course to the website to help other students, adding a course will include details such as again, remote/online and the professor info. 

* As a user, I want to be able to update a course I added in case of any material change or professor change

* As a user, I want to be able to add comments to the course page to give my thoughts on the course and professor.

* As a user, I want to be able to delete my own course that I added just in case the course is no longer offered. 

* As a user, I want to be able to click on the course I am interested in and add it to my profile to save for later


## MVPs of this project

* Users should be able to sign-up, login and logout

* See all courses added so far with details regarding the course

* Users can create a course and also add a link to the course itself

* Creator of the course and update/delete the course

* Users can comment on the course regarding their thoughts of the course/professor(s)

* Users can filter courses that they added themselves

* Users can filter out if the courses are from a college insitute or not

* A tag bar that will filter courses by subject (ex. math, arts, buisness, etc..)

* Users of the course should be able to leave a review and other users can comment on the review if they argree or not




# Stretch goals 

* Users being able to upload pictures proof that they attended the course via comments

* Search bar that will filter courses by school


# Installation Guide:

* Fork and Clone this repo

* Run npm install to install dependencies

* Run npm seed for seeded data

# Route Tables

|   Endpoint   | Component | Authenticated Route? |
|------------------|-------------------|--|
|/sign-up           | SignUp           |No |
|/sign-in           | SignIn           |No |  
|/change-password    | ChangePassword           |Yes |  
|/sign-out           | SignOut           |Yes |
|/course           | IndexCourses           |No |  
|/course/:id           | ShowCourse           |No |
|/course/mine         | MineCourses           |Yes |  
|/course/collegecourses           | IndexCollegeCourses           |No |
|/course/subject           | input subject          |No |
|/course/tag           | input tag           |No |  
|/attendingcourses           | IndexAttendingCourses           |Yes |  
|/addcourse           | CreateCourse           |Yes |  





# Wire-frames

* Signup page

![](images/wireframes/signup.PNG)

* Login Page

![](images/wireframes/login.png)

* Index Page

![](images/wireframes/indexpage.png)

* Show Page

![](images/wireframes/showpage.png)

* Updating course

![](images/wireframes/updatepage.PNG)

* My courses

![](images/wireframes/minecourses.PNG)



# Tech Stack 

* Mongoose 

* Express.js

* React.js

* Node.js

* CSS

* Bootstrap

