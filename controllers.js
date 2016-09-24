// CONTROLLERS

myApp.controller('homeController', ['$scope', '$log', function ($scope, $log, $routeParams) {
    $scope.name = 'RAKESH KUMAR';
}]);

myApp.controller('aboutController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    $scope.name = 'Rakesh Kumar';
    $scope.description = 'Web/Front-End Developer';
    $scope.about = 'I have a strong passion for front-end design and developement. I have around four years of software development experience working with the Information Technology Industry. I am currently pursuing my masters in Management Information Systems at Texas A&M University, College Station. I’m looking for a summer internship opportunity as a front-end developer or a database analyst. I am very interested in using my experience and building my skills in these areas.';
}]);

myApp.controller('contactController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    $scope.contactInfo = {
                mobile: '(979) 739-6319',
                email: 'rakeshgat@gmail.com',
                linkedin: 'https://www.linkedin.com/in/rakesh-kumar34',
                github: 'https://github.com/rakesh-kumar34',
                address: '3902 College Main St., Bryan, TX 77801'
    }
}]);

myApp.controller('educationController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    $scope.educationList = [
			{
				degree : 'Master of Science in Management Information Systems',
				school : 'Texas A&M University, College Station',
				gradDate : 'May, 2018',
				comments : '3.5'
			},
            {
				degree : 'Bachelor of Engineering in Electronics and Communication',
				school : 'Visvesvaraya Technological University, Belgaum',
				gradDate : 'August, 2011',
				comments : '3.3'
			}
		]    
}]);

myApp.controller('experienceController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    $scope.experienceList = [
                {
                    companyName: 'Accenture',
                    location: 'Bangalore, India',
                    timePeriod: 'September 2014 – January 2015',
                    designation: 'Software Engineering Analyst',
                    workDetails: ['Facilitated design and development of cross-platform web applications for client, steered a team of 3 associate software engineers               to design, code and implement application.',
                                  'Designed, wrote and debugged front-end JavaScript code for a manufacturing client using JavaScript frameworks like React.js and jQuery.',
                                  'Conducted initial feasibility review, requirement identification, design and implementation of web applications.']
                },
                {
                    companyName: 'Infosys',
                    location: 'Chennai, India',
                    timePeriod: 'October 2013 – August 2014',
                    designation: 'Senior Systems Engineer',
                    workDetails: ['Specialized in web site makeovers, increasing interactivity, dynamic elements, and personalization. Received several awards and                  nominations recognizing innovative designs.',
                                  'Facilitated design and development of web applications with J2EE, Apache Struts 2.0, SQL and iBatis for a major telecom client as  part of communications media and entertainment business unit.',
                                  'Designed user-interface of web applications with jQuery, AngularJS and JavaScript, collaborated with team leads and mentored 4 juniors to develop responsive web applications and implement designs. Evaluated and analyzed competing technologies to meet business needs; obtained approval for recommended technology from leaders, led implementation of technology into a client project.']
                },
                {
                    companyName: 'Infosys',
                    location: 'Chennai, India',
                    timePeriod: 'August 2011 – September 2013',
                    designation: 'Systems Engineer',
                    workDetails: ['Trained in Java, C, J2EE and Software Engineering Practices as part of Infosys Foundation Program at Mysore, India and worked as                 part of financial services business unit.',
                                  'Developed mobile applications for a major banking client using J2EE and Web Services. Created and managed relational database for applications on MS SQL Server.',
                                  'Led team’s efforts to complete the revamping of user interface of a telecom client’s website; resulted in 25% increase in sales for client.'] 
                }
    ]
}]);

myApp.controller('skillsController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    //$scope.num = $routeParams.num || 1;
    $scope.skillList = [
        {skillName: 'Java', skillCompetency: '80%'},
        {skillName: 'JavaScript', skillCompetency: '85%'},
        {skillName: 'HTML', skillCompetency: '80%'},
        {skillName: 'CSS', skillCompetency: '80%'},
        {skillName: 'AngularJS', skillCompetency: '40%'},
        {skillName: 'ReactJS', skillCompetency: '30%'},
        {skillName: 'SQL', skillCompetency: '80%'}
    ]
}]);
