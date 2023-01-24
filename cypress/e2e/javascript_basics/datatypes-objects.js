/*
variable naming rules: same as java
differences - Primitive data types
numbers: 123 or 120.50
String : 'apple' 
Boolean: true, false
Undefined : variable does not have a value yet
Null :  
*/

/**
 * There are 3 different types of variables
 * var : abbreviation of variable
         if there is globally - scope is a variable definition method.
         You can change it's value again
 * let: equal to
        block - scope variable definition method
        the structure we call blocks are the place between the curly prackets
        the value of variables defined with "let" can be changed later
        but you can not define the same value
    const: short for constant, 
           as soon as the value of the variable is constant, like thenumber PI
 */

           var name= 'Mike'
           var name= 36;
           var name_object={firstname:'Mike',lastname:'Masters'}
           var truth= true
           var skills=["HTML","CSS", "JS"]
           var a =null;

           //object
           var student={
            firstname:"Jake",
            lastname:"Masters",
            age:30,
            height:180,

            fullName: function (){
                return this.firstname+ " " + this.lastname
            }
           }

           
           const ageValue=student.age
           //to run in console
           console.log(ageValue)
           console.log(student.firstname)
           console.log(student.fullName())

           /**
            * code run to console
            * first should save your script or choose auto save from file menu
            * 1- The class in which this directory is located is accessed from the terminal
            * PS C:\Users\User\OneDrive\Desktop\B4Cypress\cypress\e2e\javascript_basics> 
            * 2. Type full name of file
            * PS C:\Users\User\OneDrive\Desktop\B4Cypress\cypress\e2e\javascript_basics> node .\datatypes-objects.js
            * 
            */