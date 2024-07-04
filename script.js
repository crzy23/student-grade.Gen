
//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

       // A > 79, B - 60 to 79,C -  59 to 49,  D - 40 to 49,  E - less 40.

    


          function assignLettersGrade(average) {
            if (average === 79) {
                console.log("assignLettersGrade: A")
            }
            if (average >= 60) {
                console.log("assignLettersGrade: B")
            }
            if (average <= 59) {
                console.log("assignLetterGrade: C")
            }
            if (average <=49) {
                console.log("assignLetterGrade: D")
            }
            if (average <=40) {
                console.log("assignLetterGrade: E")
            }

        }
        const average = assignLettersGrade("")
        console.log(average[79]);
        console.log(average[60]);
        console.log(average[59]);
        console.log(average[49]);
        console.log(average[40]);