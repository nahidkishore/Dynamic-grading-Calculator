






// Bangla Subject calculation

         const calculateBangla =document.getElementById('addNumber');
          calculateBangla.addEventListener('click', function (){
          
          const numberInput=document.getElementById('bangla-number').value;
          const numberCount=parseFloat(numberInput); 
              
  
 
                          if(numberCount>=90 && numberCount<=93){
                          document.getElementById('grade').innerText= "A";
                         

                        }
                        else if(numberCount>=87 && numberCount<=89){
                          document.getElementById('grade').innerText= "A-";

                        }
                        else if(numberCount>=83 && numberCount<=86){
                           document.getElementById('grade').innerText= "B+";

                        }
                        else if(numberCount>=80 && numberCount<=82){
                           document.getElementById('grade').innerText= "B";

                        }
                        else if(numberCount>=77 && numberCount<=79){
                          document.getElementById('grade').innerText= "B-";

                        }
                        else if(numberCount>=73 && numberCount<=76){
                          document.getElementById('grade').innerText= "C+";

                        }
                        else if(numberCount>=70 && numberCount<=72){
                          document.getElementById('grade').innerText= "C";

                        }
                        else if(numberCount>=67 && numberCount<=69){
                           document.getElementById('grade').innerText= "C-";

                        }
                        else if(numberCount>=63 && numberCount<=66){
                          document.getElementById('grade').innerText= "D+";

                        }
                        else if(numberCount>=60 && numberCount<=62){
                          document.getElementById('grade').innerText= "D";

                        }
                        else{
                         document.getElementById('grade').innerText='F'
                        }
 


                        const marks=document.getElementById('total-marks').innerText;
                        const marksCount=parseFloat(marks);
                        const totalMarks=numberCount+ marksCount;
                        document.getElementById('total-marks').innerText=totalMarks;
 
                      

                      
                      
                       document.getElementById("bangla-number").value="";

})


// English subject

const calculateEnglish =document.getElementById('addNUmberEnglish');
calculateEnglish.addEventListener('click', function (){
 

            const numberInput=document.getElementById('english-number').value;
            const numberCount=parseFloat(numberInput);

          



               if(numberCount>=90 && numberCount<=93){
                document.getElementById('grade-english').innerText= "A";
               

              }
              else if(numberCount>=87 && numberCount<=89){
                document.getElementById('grade-english').innerText= "A-";

              }
              else if(numberCount>=83 && numberCount<=86){
                 document.getElementById('grade-english').innerText= "B+";

              }
              else if(numberCount>=80 && numberCount<=82){
                 document.getElementById('grade-english').innerText= "B";

              }
              else if(numberCount>=77 && numberCount<=79){
                document.getElementById('grade-english').innerText= "B-";

              }
              else if(numberCount>=73 && numberCount<=76){
                document.getElementById('grade-english').innerText= "C+";

              }
              else if(numberCount>=70 && numberCount<=72){
                document.getElementById('grade-english').innerText= "C";

              }
              else if(numberCount>=67 && numberCount<=69){
                 document.getElementById('grade-english').innerText= "C-";

              }
              else if(numberCount>=63 && numberCount<=66){
                document.getElementById('grade-english').innerText= "D+";

              }
              else if(numberCount>=60 && numberCount<=62){
                document.getElementById('grade-english').innerText= "D";

              }
              else{
               document.getElementById('grade-english').innerText='F'
              }



              const marks=document.getElementById('total-marks').innerText;
              const marksCount=parseFloat(marks);
              const totalMarks=numberCount+ marksCount;
              document.getElementById('total-marks').innerText=totalMarks; 

            

            
             document.getElementById("english-number").value="";

})