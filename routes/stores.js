const express = require('express');
const router  = express.Router();
const moment  = require("moment");

// Beach model
// const Store   = require("../models/store");

router.get("/", (req, res, next) => {
  res.render("pages/stores");
});

router.post("/save", (req, res, next) => {
  let name = req.body.name;
  let flag = req.body.color;

  // Seach.findOne({ name }, (err, store) => {
  //   if (err) { res.status(500).send(err); }

  //   if (!store) {
  //     var newStore = Store({ name, flag });

  //     newStore.save((err) => {
  //       if (err) { res.stats(500).send(err); }
  //       res.status(201).send("Added to collection");
  //     });
  //   } else {
  //     store.flag = flag;
  //     store.save((err) => {
  //       if (err) { res.stats(500).send(err); }
  //       res.status(201).send("Updated item");
  //     });
  //   }
  // });
});

router.post("/store", (req, res, next) => {
  let name = req.body.name;

  // Store.findOne({ name }, (err, store) => {
  //   if (err) { res.stats(500).send(err); }

  //   if (store === null) { res.status(200).send(null); }
  //   else {
  //     let formattedDate = moment(store.updated_at).format("DD-MM-YYYY");
  //     res.status(200).send({flag: store.flag, date: formattedDate});
  //   }
  // });
});

module.exports = router;