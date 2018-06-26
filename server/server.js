let express = require('express');

let app = express();
const PORT = 4000;

app.use(express.static('server/public'));

app.listen(PORT, ()=>{
  console.log('node is running on port' + PORT);
});
