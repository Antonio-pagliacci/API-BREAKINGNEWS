const express = require('express');
const app =  require('./src/app.js')
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
