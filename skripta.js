

function updateTime() {
    var now = new Date();
    var day = now.getDate().toString().padStart(2, '0');
    var month = now.getMonth().toString().padStart(2, '0');
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var timeString = day + month + '-' + hours + ':' + minutes;
    document.getElementById('time').textContent = timeString;

    setInterval(updateTime, 1000); }


    document.addEventListener("DOMContentLoaded", function() {
       
        function generateRGBColor(R, G, B) {
            if (R < 0 || R > 255 || G < 0 || G > 255 || B < 0 || B > 255) {
                return "";
            }
            return "rgb(" + R + ", " + G + ", " + B + ")";
        }
    
  
        var colorForm = document.getElementById("colorForm");
        var redInput = document.getElementById("red");
        var greenInput = document.getElementById("green");
        var blueInput = document.getElementById("blue");
        var generateButton = document.getElementById("generateButton");
        var colorResult = document.getElementById("colorResult");
    
       
        generateButton.addEventListener("click", function() {
          
            var R = parseInt(redInput.value);
            var G = parseInt(greenInput.value);
            var B = parseInt(blueInput.value);
    
         
            var generatedColor = generateRGBColor(R, G, B);
    
          
            colorResult.textContent = "Generated Color: " + generatedColor;
            colorResult.style.color = generatedColor; 
        });
    });
    


    function toggleText() {
        var text = document.getElementById("demo");
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }