// bio
var bio = {
    "name": "monsieur bill",
    "role": "web developer",
    "contacts": {
        "mobile": "999.999.9999",
        "email": "wa3449@gmail.com",
        "github": "wa3449",
        "twitter": "@wa3449",
        "location": "Atlanta"
    },
    "welcomeMessage": "dream until your dream comes true",
    "skills": [
        "doctor",
        "lawyer",
        "indian chief",
        "architect"
    ],
    "biopic": "images/usagi.jpg",
    // displayBio function
    "displayBio": function() {
      // name & role
      var formattedName = HTMLheaderName.replace("%data%", this.name);
      var formattedRole = HTMLheaderRole.replace("%data%", this.role);

      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);

      // contacts
      var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
      var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
      var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

      // header contacts
      $("#topContacts").append(formattedMobile);
      $("#topContacts").append(formattedEmail);
      $("#topContacts").append(formattedTwitter);
      $("#topContacts").append(formattedGitHub);
      $("#topContacts").append(formattedLocation);
      // footer contacts
      $("#footerContacts").append(formattedMobile);
      $("#footerContacts").append(formattedEmail);
      $("#footerContacts").append(formattedTwitter);
      $("#footerContacts").append(formattedGitHub);
      $("#footerContacts").append(formattedLocation);

      // biopic
      var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);

      $("#topContacts").after(formattedBioPic);

      // welcome message
      var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

      $(".biopic").after(formattedWelcomeMsg);

      //skills
      $(".welcome-message").after(HTMLskillsStart);

      var skill;
      var formattedSkill = "";

      for (skill in this.skills) {
        formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }
};

// work
var work = {
    "jobs": [
        {
            "employer": "now-here",
            "title": "Principle Technical Engineer",
            "location": "Atlanta, GA",
            "dates": "2010 - future",
            "description": "Deliver innovative, cost-effective, and efficient IT solutions."
        },
        {
            "employer": "XAX",
            "title": "Software Engineer",
            "location": "Sarasota, FL",
            "dates": "2005 - 2010",
            "description": "Develops information systems by designing, and developing software solutions."
        }
    ],
    // displayWork function
    "displayWork": function() {
      // work
      var job;
      var formattedEmployer = "";
      var formattedTitle = "";
      var formattedEmployerTitle = "";
      var formattedLocation = "";
      var formattedDates = "";
      var formattedDescription = "";

      for (job in this.jobs) {
        $("#workExperience").append(HTMLworkStart);
        formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
        formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
      }
    }
};

// projects
var projects = {
    "projects": [
        {
            "title": "reddandelion",
            "dates": "2014",
            "description": "Empower human beings to be Toltec Warriors.",
            "images": [
                "images/petroglyph-animal.png",
                "images/petroglyph-swirl.png"
            ]
        },
        {
            "title": "bluedandelion",
            "dates": "2012",
            "description": "Empower human beings to assume personal responsibility.",
            "images": [
              "images/petroglyph-bear.jpg"
            ]
        },
        {
            "title": "purpledandelion",
            "dates": "2010",
            "description": "Empower human beings to be the best they can be.",
            "images": []
        }
    ],
    // displayProjects function
    "displayProjects": function() {
      var project;
      var image;
      var formattedTitle = "";
      var formattedDates = "";
      var formattedDescription = "";
      var formattedImage = "";

      if (this.projects.length > 0) {
        for (project in this.projects) {
          $("#projects").append(HTMLprojectStart);
          formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
          formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
          formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
          $(".project-entry:last").append(formattedTitle);
          $(".project-entry:last").append(formattedDates);
          $(".project-entry:last").append(formattedDescription);

          if (this.projects[project].images.length > 0) {
            for (image in this.projects[project].images) {
              formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
              $(".project-entry:last").append(formattedImage);
            }
          }
        }
        // set the project image size to be consistent
        var imgList = $("#projects").find('img');
        imgList.width("100px");
        imgList.height("74px");
      }
    }
};

// education
var education = {
    "schools": [
        {
            "name": "Bullwinkle University",
            "location": "Asheville, NC",
            "degree": "BA",
            "majors": [
                "English Literature"
            ],
            "dates": 2005
        },
        {
            "name": "Professor Peabody University",
            "location": "Manitou, CO",
            "degree": "BS",
            "majors": [
                "Computer Science"
            ],
            "dates": 2000
        }
    ],
    "onlineCourses": [
        {
            "title": "How to use Git and GitHub",
            "school": "Udacity",
            "date": 2015,
            "url": "udacity.com/course/nd001"
        }
    ],
    "displayEducation": function() {
      var institution;
      var major;
      var formattedName = "";
      var formattedLocation = "";
      var formattedDegree = "";
      var formattedMajor = "";
      var formattedDates = "";
      var formattedTitle = "";
      var formattedUrl = "";
      var formattedTitleSchool = "";
      // education
      if (this.schools.length > 0) {
        for (institution in this.schools) {
          $("#education").append(HTMLschoolStart);
          formattedName = HTMLschoolName.replace("%data%", this.schools[institution].name);
          formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[institution].degree);
          formattedDates = HTMLschoolDates.replace("%data%", this.schools[institution].dates);
          formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[institution].location);

          $(".education-entry:last").append(formattedName);
          $(".education-entry:last").append(formattedDegree);
          $(".education-entry:last").append(formattedDates);
          $(".education-entry:last").append(formattedLocation);

          if (this.schools[institution].majors.length > 0) {
            for (major in this.schools[institution].majors) {
              formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[institution].majors[major]);

              $(".education-entry:last").append(formattedMajor);
            }
          }

        }
      }
      // online courses
      if (this.onlineCourses.length > 0) {
        for (institution in this.onlineCourses) {
          $(".education-entry:last").append(HTMLonlineClasses);
          formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[institution].title);
          formattedName = HTMLonlineSchool.replace("%data%", this.onlineCourses[institution].school);
          formattedTitleSchool = formattedTitle + formattedName;
          formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[institution].date);
          formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[institution].url);

          $(".education-entry:last").append(formattedTitleSchool);
          $(".education-entry:last").append(formattedDates);
          $(".education-entry:last").append(formattedUrl);
        }
      }
    }

};

// call display functions for the resume sections
bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();
$("#mapDiv").append(googleMap);
