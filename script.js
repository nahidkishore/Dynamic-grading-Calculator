


                      function gradeCheck(id,numberCount){
                        if(numberCount>=90 && numberCount<=100){
                          document.getElementById(id).innerText= "A";
                        

                        }
                        else if(numberCount>=87 && numberCount<=89){
                          document.getElementById(id).innerText= "A-";

                        }
                        else if(numberCount>=83 && numberCount<=86){
                          document.getElementById(id).innerText= "B+";

                        }
                        else if(numberCount>=80 && numberCount<=82){
                          document.getElementById(id).innerText= "B";

                        }
                        else if(numberCount>=77 && numberCount<=79){
                          document.getElementById(id).innerText= "B-";

                        }
                        else if(numberCount>=73 && numberCount<=76){
                          document.getElementById(id).innerText= "C+";

                        }
                        else if(numberCount>=70 && numberCount<=72){
                          document.getElementById(id).innerText= "C";

                        }
                        else if(numberCount>=67 && numberCount<=69){
                          document.getElementById(id).innerText= "C-";

                        }
                        else if(numberCount>=63 && numberCount<=66){
                          document.getElementById(id).innerText= "D+";

                        }
                        else if(numberCount>=60 && numberCount<=62){
                          document.getElementById(id).innerText= "D";

                        }
                        else{
                        document.getElementById(id).innerText='F'
                        }

                      }






              // Bangla Subject calculation

              const calculateBangla =document.getElementById('addNumber');
              calculateBangla.addEventListener('click', function (){

              const numberInput=document.getElementById('bangla-number').value;
              const numberCount=parseFloat(numberInput); 

                  gradeCheck('grade',numberCount);


                  const marks=document.getElementById('total-marks').innerText;
                  const marksCount=parseFloat(marks);
                  const totalMarks=numberCount+ marksCount;
                  document.getElementById('total-marks').innerText=totalMarks; 

                
                
                
                document.getElementById("bangla-number").value="";

              });

              // English grade calculate

              const calculateEnglish =document.getElementById('addNUmberEnglish');
              calculateEnglish.addEventListener('click', function (){

              const numberInput=document.getElementById('english-number').value;
              const numberCount=parseFloat(numberInput); 

                  gradeCheck('grade-english',numberCount);


                  const marks=document.getElementById('total-marks').innerText;
                  const marksCount=parseFloat(marks);
                  const totalMarks=numberCount+ marksCount;
                  document.getElementById('total-marks').innerText=totalMarks; 
                

                

                
                
                document.getElementById("english-number").value="";

              });

              //Ict grade calculation

              const calculateIct =document.getElementById('addNUmberIct');
              calculateIct.addEventListener('click', function (){

              const numberInput=document.getElementById('ict-number').value;
              const numberCount=parseFloat(numberInput); 

                  gradeCheck('grade-ict',numberCount);


                  const marks=document.getElementById('total-marks').innerText;
                  const marksCount=parseFloat(marks);
                  const totalMarks=numberCount+ marksCount;
                  document.getElementById('total-marks').innerText=totalMarks; 
                
                  
                
                
                document.getElementById("ict-number").value="";

              });


        //total Marks
              const grade= document.getElementById('grade-button');
              grade.addEventListener('click', function(){
              // const totalMark=document.getElementById('total-marks').innerText;
                // const gradeMarks=parseFloat(totalMark);
                  finalGrade();

              });

              function finalGrade(){
              const gradeMarks=document.getElementById("total-marks").innerText;

              if(gradeMarks>=270 && gradeMarks<=300){
              return document.getElementById('final-grade').innerText='A';
              }
              else if(gradeMarks>=261 && gradeMarks<=267){
              return document.getElementById('final-grade').innerText='A-';

              }
              else if(gradeMarks>=249 && gradeMarks<=258){
              return document.getElementById('final-grade').innerText='B+';

              }
              else if(gradeMarks>=240 && gradeMarks<=246){
              return document.getElementById('final-grade').innerText='B';

              }
              else if(gradeMarks>=231 && gradeMarks<=237){
              return document.getElementById('final-grade').innerText='B-';

              }
              else if(gradeMarks>=219 && gradeMarks<=228){
              return document.getElementById('final-grade').innerText='C+';

              }
              else if(gradeMarks>=210 && gradeMarks<=216){
              return document.getElementById('final-grade').innerText='C';

              }
              else if(gradeMarks>=201 && gradeMarks<=207){
              return document.getElementById('final-grade').innerText='C-';

              }
              else if(gradeMarks>=189 && gradeMarks<=198){
              return document.getElementById('final-grade').innerText='D+';

              }
              else if(gradeMarks>=180 && gradeMarks<=186){
              return document.getElementById('final-grade').innerText='D';

              }
              else{
              return document.getElementById('final-grade').innerText='F';

              }
              }