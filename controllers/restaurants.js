const Restaurant = require("../models/restaurants");

exports.create = (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    city: req.body.city,
    img: req.body.img,
    rating: req.body.rating,
    star: req.body.star,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
  });

  restaurant
    .save()
    .then((restaurant) => {
      res.send(restaurant);
    })
    .catch((error) => {
      res.status(500).send(err);
    });
};

exports.findAll = (req, res) => {
  Restaurant.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

exports.update = (req, res) => {
  console.log(req.body.star);
  Restaurant.findByIdAndUpdate(req.params.id, { star: req.body.star })
    .then((data) => res.send(data))
    .catch((error) => console.log(error));
};
