var bio = {
    "name": "Andrea Moschella",
    "role": "Front End Development",
    "contacts": {
        "mobile": "+390836011",
        "email": "andrea.moschella@gmail.com",
        "github": "https://github.com/andreaPortfolio",
        "twitter": "https://twitter.com/Musk78",
        "location": "Italy"
    }
    ,
    "welcomeMessage": "Hello, I'm Andrea and this is my resume!",
    "skills": [
        "HTML Language Programming",
        "CSS Language Programming",
        "Javascript Language Programming"
    ],
    "biopic": "images/cutmypic.png",
    display: function () {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedName + formattedRole);

        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#topContacts").before(formattedWelcome);


        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


        $("#topContacts").before(HTMLskillsStart);
        for (var skill in bio.skills) {
            $('#skills').append(HTMLskills.replace("%data%", bio.skills[skill]))
        }

        $("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
        $("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);


    }
};


var projects = {
    "projects": [
        {
            "title": "Front End Nanodegree Project 0",
            "dates": "2015",
            "description": "It's the firts project of Nanodegree Front End development, it's a little presentation of me making in html and css",
            "images": [
                "images/project01.jpg"
            ]
        },
        {
            "title": "Front End Nanodegree Project 1",
            "dates": "2015",
            "description": "In this project I make a respinsitive website resume",
            "images": [
                "images/project02.jpg"
            ]
        }
    ],
    display: function () {

        for (project in projects.projects) {

            // add a new div for projects
            $("#projects").append(HTMLprojectStart);

            var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(projectTitle);

            var progectData = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(progectData);

            var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(projectDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                }
            }
            var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
            $(".project-entry:last").append(projectImage);


        }


    }
};


var education = {
    "schools": [
        {
            "name": "Teresio Olivelli",
            "location": "Darfo Boario Terme (Bs)",
            "degree": "High school leaving qualification in surveyor",
            "major": [
                "Topography",
                "Construction engineering"
            ],
            "dates": 2001,
            "url": "http://www.itcgolivelli.it/"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Road Trip Part 2",
            "school": "Code School",
            "date": 2015,
            "url": "https://www.codeschool.com/courses/javascript-road-trip-part-2"
        },
        {
            "title": "JavaScript Road Trip Part 1",
            "school": "Code School",
            "date": 2015,
            "url": "https://www.codeschool.com/courses/javascript-road-trip-part-1"
        },
        {
            "title": "Real-time Web with Node.js",
            "school": "Code School",
            "date": 2015,
            "url": "https://www.codeschool.com/courses/real-time-web-with-node-js"
        }
    ],
    display: function () {


        for (var entry in education.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace('%data%', education.schools[entry].name);
            var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[entry].degree);
            $('.education-entry:last').append(formattedName + formattedDegree);
            var formattedDate = HTMLschoolDates.replace('%data%', education.schools[entry].dates);
            $('.education-entry:last').append(formattedDate);
            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[entry].location);
            $('.education-entry:last').append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[entry].major);
            $('.education-entry:last').append(formattedMajor);

        }

        $('.education-entry').append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
            var formattedOnlineScholl = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
            $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineScholl);

            var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
            $('.education-entry:last').append(formattedOnlineDates);
            var formattedOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
            formattedOnlineUrl = formattedOnlineUrl.replace('#', education.onlineCourses[course].url);
            //formattedOnlineUrl.att('src', education.onlineCourses[course].url);
            $('.education-entry:last').append(formattedOnlineUrl);

        }

    }
};


var work = {
    "jobs": [
        {
            "employer": "Trombini Group",
            "title": "System Administrator",
            "location": "Brescia",
            "dates": "April 2006- May 2015",
            "description": "I was a system administrator of many server, I did help desk of all computer user "
        },
        {
            "employer": "SDL Centrostudi",
            "title": "System Administrator",
            "location": "Brescia",
            "dates": "November  2014- February 2015",
            "description": "I arranged the intranet and the server, I taught to the system administrator how use windows 2008 server and its services"
        }

    ],
    display: function () {
        $("#workExperience").append(HTMLworkStart);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#workExperience").before(formattedPic);
        for (job in work.jobs) {

            //create a new div for workExperience


            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $('.work-entry:last').append(formattedLocation);

            var formattedData = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $('.work-entry:last').append(formattedData);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);


        }

    }
};


bio.display();
education.display();
work.display();
projects.display();

$("main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

//


