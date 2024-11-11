const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {authorizeRoles} = require("../middleware/auth");
const {
  getAllPendingPartners,
  approvePendingPartner,
  getAllActivePartners,
  deleteActivePartner,
  deletePendingPartner,
  getAllPendingEvents,
  updatePendingEvent,
  getAllActiveEvents,
  deletePendingEvent,
  deleteActiveEvent,
  getAllUsers,
  getTotalNoOfUsers,
  getTotalNoOfActivePartners,
  getAllNewsLetter,
  getAllContactUs,
  postActiveEvent,
  deleteAllNewsLetter,
  deleteContactUs
} = require("../controllers/adminController");

const {
  getAllPendingProducts,
  deletePendingProduct,
  updatePendingProduct,
  getAllActiveProducts,
  deleteActiveProduct,
  getAllPendingServices,
  deletePendingService,
  updatePendingService,
  getAllActiveServices,
  deleteActiveService,
  getAllActiveServicesNumber,
  getAllActiveProductsNumber,
  getAllPendingBlogs,
  deletePendingBlog,
  updatePendingBlog,
  getAllActiveBlogs,
  deleteActiveBlog,
  postActiveBlog
} = require("../controllers/postController");

// user count routes
router.route("/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUsers);
router.route("/total-users").get(isAuthenticatedUser,authorizeRoles("admin"),getTotalNoOfUsers);
router.route("/total-active-partners").get(isAuthenticatedUser,authorizeRoles("admin"),getTotalNoOfActivePartners);
router.route("/total-active-services").get(isAuthenticatedUser,authorizeRoles("admin"),getAllActiveServicesNumber);
router.route("/total-active-products").get(isAuthenticatedUser,authorizeRoles("admin"),getAllActiveProductsNumber);

// newsletter routes
router.route("/newsletters").get(isAuthenticatedUser,authorizeRoles("admin"),getAllNewsLetter);
router.route("/delete-newsletters").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteAllNewsLetter);

// contact us routes
router.route("/contact-us").get(isAuthenticatedUser,authorizeRoles("admin"),getAllContactUs);
router.route("/delete-contact/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteContactUs);


// partner routes
router.route("/pending-partners").get (isAuthenticatedUser,authorizeRoles("admin"),getAllPendingPartners);
router.route("/approve-partner/:id").put( approvePendingPartner);
router.route("/active-partners").get(getAllActivePartners);
router.route("/delete-partner/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteActivePartner);
router.route("/delete-pending-partner/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deletePendingPartner);

// events routes
router.route("/post-event").post(isAuthenticatedUser,authorizeRoles("admin"),postActiveEvent);
router.route("/pending-events").get(isAuthenticatedUser,authorizeRoles("admin"),getAllPendingEvents);
router.route("/update-event/:id").put(updatePendingEvent);
router.route("/active-events").get(getAllActiveEvents);
router.route("/delete-event/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deletePendingEvent);
router.route("/delete-active-event/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteActiveEvent);

// products routes
router.route("/pending-products").get(isAuthenticatedUser,authorizeRoles("admin"),getAllPendingProducts);
router.route("/delete-pending-product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deletePendingProduct);
router.route("/update-product/:id").put(updatePendingProduct);
router.route("/active-products").get(getAllActiveProducts);
router.route("/delete-active-product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteActiveProduct);

// services routes
router.route("/pending-services").get(isAuthenticatedUser,authorizeRoles("admin"),getAllPendingServices);
router.route("/delete-pending-service/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deletePendingService);
router.route("/update-service/:id").put(updatePendingService);
router.route("/active-services").get(getAllActiveServices);
router.route("/delete-active-service/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteActiveService);

// blogs routes
router.route("/pending-blogs").get(isAuthenticatedUser, authorizeRoles("admin"), getAllPendingBlogs);
router.route("/delete-pending-blog/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deletePendingBlog);
router.route("/update-blog/:id").put(updatePendingBlog);
router.route("/active-blogs").get(getAllActiveBlogs);
router.route("/delete-active-blog/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteActiveBlog);
router.route("/post-blog").post(isAuthenticatedUser, authorizeRoles("admin"), postActiveBlog);


module.exports = router;
