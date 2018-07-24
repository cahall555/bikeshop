const Router = require('koa-router');
const queries = require('../db/queries/rentals');

const router = new Router();
const BASE_URL = `/api/v1/rentals`;

module.exports = router;


  
router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
      const rental = await queries.getSingleRental(ctx.params.id);
      if (rental.length) {
        ctx.body = {
          status: 'success',
          data: rental
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That rental does not exist.'
        };
      }
    } catch (err) {
      console.log(err)
    }
  })

  router.get(BASE_URL, async (ctx) => {
    try {
      const rentals = await queries.getAllRentals();
      ctx.body = {
        status: 'success',
        data: rentals
      };
    } catch (err) {
      console.log(err)
    }
});

  router.post(`${BASE_URL}`, async (ctx) => {
    try {
      const rental = await queries.addRental(ctx.request.body);
      if (rental.length) {
        ctx.status = 201;
        ctx.body = {
          status: 'success',
          data: rental
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
      const rental = await queries.updateRental(ctx.params.id, ctx.request.body);
      if (rental.length) {
        ctx.status = 200;
        ctx.body = {
          status: 'success',
          data: rental
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That rental does not exist.'
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
      const rental = await queries.deleteRental(ctx.params.id);
      if (rental.length) {
        ctx.status = 200;
        ctx.body = {
          status: 'success',
          data: rental
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That rental does not exist.'
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
  
  
  
  
  
  