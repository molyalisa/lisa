const firstName = document.getElementById("firstName");  
const startingBid = document.getElementById("startingbid"); 
const education = document.getElementById("education");
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("age"); 
const button = document.getElementById("submit"); 
const love_letter = document.getElementById("love_letter");

function education (){
    const education = document.getElementById("education").value;
    if (education == "1.5") {
        result = result * 1.5;
    } else if (education == "1.2") {
        result = result * 1.2;
    } else if (education == "1.05") {
        result = result * 1.05;
    } else if (education == "0.9") {
        result = result * 0.9;
    }
}
function networth() {
  const networth = document.getElementById("networth").value;
    if (networth == "2") {
        result *= 2;
    } else if (networth == "1.5") {
        result *= 1.5;
    } else if (networth == "1.2") {
        result *= 1.2;
    }
}
function skills() {
    const skills = document.getElementByClassName("skills").value;
    if (skills == "100") {
        result = result + 100
    }
    else if (skills == "200") {
        result = result + 200;
    }
    else if (skills = "150") {
        result = result + 150;
    }
    else if (skills = "100") {
        result = result + 100;
    }
}
function age {
    const age = document.getElementByClassName("age").value;
    if (age = "1.5") {
        result *= 1.5;   
    }
    else if (age = "1.2") {
        result *= 1.2;
    }
    else if (age = "0.95") {
    result *= 0.95; 
    }
}
function reputation {
    const reputation = document.getElementsByClassName("reputation").value;
    if (reputation = "0.85") {
        result *= 0.85;
    }
    else if (reputation = "0.9") {
        result *= 0.9;
    }
    else if (reputation = "200") {
        result = result - 200;}
    }
 
    const calculate = () => { 
        let name = firstName.value; 
        let price = Number(startingbid.value); 
        let letter = love_letter.value; 
        if (name != "") {  
            price = getNewPrice(price, education);

            
        }   
            let person = { 
                fullName: name, 
                finalPrice: price, 
                loveLetter: letter 
            } 
            document.getElementById("result").innerHTML = The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}; 
        } 
        else { 
            alert("Calculate"); 
        } 
    } 
     
    const getNewPrice = (price, criteria) => { 
        return price * Number(criteria.value); 
    } 
     
    const getCheckboxValuesForLoop = (html_collection, price) => {
     for (let i=0; i < html_collection.length; i++) {   
      if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) { 
       price = price + Number(html_collection[i].value) 
      } 
      else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) { 
       price = price * Number(html_collection[i].value) 
      } 
     } 
     return price; 
    } 
     
    const getCheckboxValuesFilterReduce = (html_collection, price)  {
        let list = Array.from(html_collection).filter(filteration) 
        let result = list.reduce(reducer, price) 
        return result; 
    } 
     
    const reducer = (accumulator, item) { 
        return accumulator + Number(item.value); 
    } 
    const filteration = (item) => { 
        return item.checked; 
    } 
     
    const getRadioValue = (node_list, price) {   
        node_list.forEach(item => { 
            if (item.checked) { 
                price = price * Number(item.value) 
            } 
        }) 
        return price; 
    } 
     
    button.addEventListener("click", calculate)
    function calculate() {
        var amount = 500;
        if (check_errors()){
          amount = calculate_education(amount);
          amount = calculate_networth(amount);
          amount = calculate_skills(amount);
          amount = calculate_age(amount);
          amount = calculate_reputation(amount);
          alert('$' + amount);
        }
      }
      
      function check_errors(){
        var errors = []
        var education = document.getElementById("education").value;
        var networth = document.getElementById("networth").value;
        var age1 = document.getElementById("age1").checked;
        var age2 = document.getElementById("age2").checked;
        var age3 = document.getElementById("age3").checked;
        if(education == 0){
          errors.push('Education level')
        }
        if(networth == 0){
          errors.push('Family networth')
        }
        if(!(age1 || age2 || age3)){
          errors.push('Age range')
        }
        if(errors.length > 0){
          alert('Please select: ' + errors.join(', ') + '.')
          return false;
        }
        else {
          return true;
        }
      }
      
      function calculate_education(amount) {
        var education = [1.5, 1.2, 1.05, 0.9]
        var education_index = parseInt(document.getElementById("education").value) - 1
        if(education_index > -1){
          amount *= education[education_index]
        }
        return amount;
      }
      
      function calculate_networth(amount) {
        var networth = [2.0, 1.5, 1.2]
        var networth_index = parseInt(document.getElementById("networth").value) - 1
        if(networth_index > -1){
          amount *= networth[networth_index]
        }
        return amount;
      }
      
      function calculate_skills(amount) {
        if(document.getElementById("dombra").checked){
          amount += 100
        }
        if(document.getElementById("cook").checked){
          amount += 200
        }
        if(document.getElementById("easygoing").checked){
          amount += 150
        }
        if(document.getElementById("sing").checked){
          amount += 100
        }
        return amount;
      }
      
      function calculate_age(amount) {
        var coefficient = 1;
        if(document.getElementById("age1").checked){
          coefficient = 1.5;
        }
        else if(document.getElementById("age2").checked){
          coefficient = 1.2;
        }
        else if(document.getElementById("age3").checked){
          coefficient = 0.95;
        }
        return amount * coefficient;
      }
      
      function calculate_reputation(amount) {
        if(document.getElementById("rep1").checked){
          amount *= 0.85;
        }
        if(document.getElementById("rep1").checked){
          amount *= 0.9;
        }
        if(document.getElementById("rep1").checked){
          amount -= 200;
        }
        return amount;
      }
      
