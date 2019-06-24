const app = require('express')();

app.get('/', (req, res) => {
  res.send('Viva Madrid!!!');
});

app.listen(3000, () => console.log('Server running'));