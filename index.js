const express = require('express');
const bodyParser = require('body-parser');
const pdfParse = require('pdf-parse');

const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = "AIzaSyC4Dy4_p9aVpXd3app_Hv7W-kwC4ubNC2c"
const genAI = new GoogleGenerativeAI(API_KEY);


async function run(notes) {
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt = `Generate 10 very difficult multiple 
    choice questions in json format{question:string,options:[,,,],answer:integer(0 to 3)} 
    while giving the correct answer from the following prompt: 
${notes}
    `
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }


const app = express();
app.use(bodyParser.json({ limit: '50mb' })); // Increase the limit for larger files

app.post('/extract-text', async (req, res) => {
  const { fileContent, fileName } = req.body;
//   console.log(fileContent)

  if (!fileContent) {
    return res.status(400).send('No file content was uploaded.');
  }

  const pdfBuffer = Buffer.from(fileContent, 'base64');

  try {
    const data = await pdfParse(pdfBuffer);
    console.log(data.text)
    run(data.text)
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

const PORT = process.env.PORT || 5600;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
