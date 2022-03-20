module.exports = (app) => {
  const restaurants = require("../controllers/restaurants");
  const router = require("express").Router();

  router.post("/", restaurants.create);

  router.put("/:id", restaurants.update);

  router.get("/", restaurants.findAll);

  app.use("/api/restaurants", router);
};
