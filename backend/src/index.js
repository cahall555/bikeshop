const Koa = require('koa');
const bodyParser = require('koa-body-parser');

const indexRoutes = require('./server/routes/index');
const rentalsRoutes = require('./server/routes/rentals');
const citiesRoutes = require('./server/routes/cities');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(rentalsRoutes.routes());
app.use(citiesRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;

