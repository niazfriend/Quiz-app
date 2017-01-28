 var main_page = document.getElementById("main_page");
          var button = document.getElementById("start");
          var question_one = document.getElementById("q1");
          var question_two = document.getElementById("q2");
          var question_three = document.getElementById("q3");
          var next = document.getElementById("next");
          var next3 = document.getElementById("next3");
          //  getting result div
          var result = document.getElementById("result");
          var resulting = document.getElementById("progress");
          var corect_ans = 0;
          //it is click start section gone you questioning segment...
          button.onclick = function() {
            main_page.className = "hide";
            question_one.className = "visible";
        }
          //first question checking .....
        next.onclick = function() {
            var question_1 = document.getElementsByName("q1_option");
            for (var i = 0; i < question_1.length; i++) {
                if (question_1[i].checked){
                    if (question_1[i].value === "liaquat ali khan"){
                    corect_ans++;
                    question_one.className = "";
                    question_two.className = "visible2";
                    break;
                }
                }
                else{
                    question_one.className = "";
                    question_two.className = "visible2";
                }
            }
        }
        // second Question section;
        next3.onclick = function() {
            var question_2 = document.getElementsByName("q2_options");
            for (var i = 0; i < question_2.length; i++){
                if (question_2[i].checked){
                    if(question_2[i].value === "islamabad"){
                        corect_ans++;
                        question_two.className = "";
                        question_three.className = "visible3";
                        break;
                    }
                }
                else{
                        question_two.className = "";
                        question_three.className = "visible3";
                }
            } 
        }
    
        //question three & result  
        result.onclick = function(){
        var question_3 = document.getElementsByName("q3_options");
          for (var i = 0; i < question_3.length; i++){
              if(question_3[i].checked){
                  if(question_3[i].value === "nawaz sharif"){
                      corect_ans++;
                      question_three.className = "";
                      resulting.className = "show_result";
                  }
                  else{
                      question_three.className = "";
                      resulting.className = "show_result";
                  }
              }
          }
            //generate the result of this preety simple quiz.....
            var answeres = document.getElementById("cor_ans").innerHTML = corect_ans; 
            var find_per = (100 / 3) * answeres;
            var fixed = find_per.toFixed(2);
            var show_the_per = document.getElementById("percent").innerHTML = fixed + "%";
            //genarating remarks ...
            if (corect_ans === 1){
                document.getElementById("remarks").innerHTML = "Poor Work please keep try again";
            }
             if (corect_ans === 2){
                document.getElementById("remarks").innerHTML =  "very Good";
            }
             if (corect_ans === 3){
                document.getElementById("remarks").innerHTML = "Exelent you are pro!";
            }
        }
            
                     