const Bloger = require("./../model/blogerModel");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const blogers = await Bloger.findAll();
    res.status(400).json({
      status: "success",
      data: {
        blogers,
      },
    });
  })
  .post(async (req, res) => {
    try {
      const bloger = await Bloger.create(req.body);
      res.status(200).json({
        status: "success",
        data: {
          bloger,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "error",
        message: err.parent,
      });
    }
  });

module.exports = router;
