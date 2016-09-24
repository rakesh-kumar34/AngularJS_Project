// CUSTOME DIRECTIVES
myApp.directive("experienceDetail", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/experience-dir.html',
       replace: true,
       /*scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },*/
       link: function(scope, elements, attrs) {
                   
           /*console.log('Linking...');

           console.log(scope);

           if (scope.personObject.name == 'Jane Doe') {
                elements.removeAttr('class');
           }

           console.log(elements);*/
                   
        }           
   }
});