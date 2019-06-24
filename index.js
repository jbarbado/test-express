const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.listen(3000, () => console.log('Server running'));