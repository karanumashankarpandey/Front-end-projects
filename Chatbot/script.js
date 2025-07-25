// Make sure to include these imports:
const { GoogleGenerativeAI } = require ("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "where is India located in ";

let response;
const generate = async()=>{
try{
const result = await model.generateContent(prompt);
response = result.response.text();
console.log(response);
}
catch(err){
    
}
}

generate();

console.log(response)