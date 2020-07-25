
// Bangla Subject calculation

         const calculate =document.getElementById('addNumber');
          calculate.addEventListener('click', function (){
          
          const numberInput=document.getElementById('bangla-number').value;
          const numberCount=parseFloat(numberInput);

          /* const grade=document.getElementById('grade').innerText
          const gradeNumber=parseFloat(grade); */
  
   /* let numberCount=0; */
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



                        const Marks=document.getElementById('total-marks').innerText;
                        const marksCount=parseFloat(Marks);
                        const totalMarks=numberCount+ marksCount;
                        document.getElementById('total-marks').innerText=totalMarks;



                  document.getElementById('bangla-number').value="";
})