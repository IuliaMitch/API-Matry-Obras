const router = require("express").Router();
const controllerObras = require("../controllers/obras.controller");
const controllerCart = require("../controllers/cart.controller");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const { validId, validObjectBody } = require("../middlewares/obra.middleware");

// Rotas Swagger

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

// Rotas do website
router.get("/all-obras", controllerObras.findAllObrasController);
router.get("/one-obra/:id", validId, controllerObras.findByIdObraController);
router.post(
  "/create-obra",
  validObjectBody,
  controllerObras.createObraController
);
router.put(
  "/update-obra/:id",
  validId,
  validObjectBody,
  controllerObras.updateByIdObraController
);
router.delete(
  "/delete-obra/:id",
  validId,
  controllerObras.deleteByIdObraController
);
router.get("/all-cart", controllerCart.findAllCartController);
router.post("/create-cart", controllerCart.createManyItemsCartController);
router.delete("/finish-cart", controllerCart.deleteAllItemsCartController);

module.exports = router;
