const Router = require('koa-router');
const queries = require('../db/queries/cities');

const router = new Router();
const BASE_URL = `/api/v1/cities`;

module.exports = router;


  
router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
      const city = await queries.getSingleCity(ctx.params.id);
      if (city.length) {
        ctx.body = {
          status: 'success',
          data: city
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That city does not exist.'
        };
      }
    } catch (err) {
      console.log(err)
    }
  })

  router.get(BASE_URL, async (ctx) => {
    try {
      const cities = await queries.getAllCities();
      ctx.body = {
        status: 'success',
        data: cities
      };
    } catch (err) {
      console.log(err)
    }
});

  router.post(`${BASE_URL}`, async (ctx) => {
    try {
      const city = await queries.addCity(ctx.request.body);
      if (city.length) {
        ctx.status = 201;
        ctx.body = {
          status: 'success',
          data: city
        };
      } else {
        ctx.status = 400;
        ctx.body = {
          status: 'error',
          message: 'Something went wrong.'
        };
      }
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  })

  router.put(`${BASE_URL}/:id`, async (ctx) => {
    try {
      const city = await queries.updateCity(ctx.params.id, ctx.request.body);
      if (city.length) {
        ctx.status = 200;
        ctx.body = {
          status: 'success',
          data: city
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That city does not exist.'
        };
      }
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  })

  router.delete(`${BASE_URL}/:id`, async (ctx) => {
    try {
      const city = await queries.deleteCity(ctx.params.id);
      if (city.length) {
        ctx.status = 200;
        ctx.body = {
          status: 'success',
          data: city
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That city does not exist.'
        };
      }
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    }
  })
  
  
  
  
  
  