document.querySelector('button').addEventListener('click',()=>{
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value
    let result = document.querySelector('#result')

    let bmi = Math.floor(weight/((height/100)*(height/100)))

    function setMessage(message){
        result.value=`BMI Value: ${bmi}    ${message}`
    }

    if(bmi<18.5){
        setMessage('Underweight')
    }
    else if(bmi>=18.5 && bmi<=24.9){
        setMessage('Normal weight')
    }
    else if(bmi>=25 && bmi<=29.9){
        setMessage('Overweight')
    }
    else if(bmi>=30 && bmi<=34.9){
        setMessage('Obesity Class I (Moderate obesity)')
    }
    else if(bmi>=35 && bmi<=39.9){
        setMessage('Obesity Class II (Severe obesity)')
    }
    else if(bmi>=40){
        setMessage('Obesity Class III (Very severe or morbid obesity)')
    }

})