const { app } = require('./core/app');

app.listen(process.env.PORT, () => console.log('app listening on port', process.env.PORT))