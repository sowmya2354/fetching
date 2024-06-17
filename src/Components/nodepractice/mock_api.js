const express = require('express')
const fs = require('fs')
const path=require('path')
const app=express()
const jsonFilePath=path.join(__dirname,"db.json")
const jsonData=JSON.parse(fs.readFileSync(jsonFilePath,'utf-8'))
app.get('/mock_api', (req, res) => {
  try {
    // Your response code here
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
