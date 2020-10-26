/**
 * User controller : All business logic goes here
 */
const ContactV2 = require("../models/contactsV2");


// router.post('/', secured(), (req, res) => {
//   // todo: if (invalid) res.status(400).send(dsar, 'Invalid DSAR');
//   Dsar.create(req.body, (err, dsar) => {
//     if (err) return res.status(500).json('Error adding DSAR to the database');
//     res.status(201).json(dsar);
//   });
// });
exports.create = (req, res) => {

  const contact = req.body;
  /**
   * Save user to database
   */
  ContactV2.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
/**
 * Find all Users
 */
exports.findAll = (req, res) => {
    ContactV2.find({},{_id:0, __v: 0})
    .then((data) => {
      // console.log(res)
      // res.status(200).send(data);
      res.status(200).json({
        contatcs :data,
        hasMoreItems: false,
	      pageTotalRecords: 3,
	pageSizeLimit: 10
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};
/**
 * Find one User
 */
exports.findOne = (req, res) => {
    // ContactV2.findById(req.params.id)
    ContactV2.findOne({ 'id': req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.status(200).send(user);
      console.log(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.id,
      });
    });
};

/**
 * Delete a user with the specified id in the request
 */
exports.delete = (req, res) => {
    ContactV2.findOneAndDelete({ 'id': req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found ",
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete user ",
      });
    });
};

/**
 * Update a user with the specified id in the request
 */
exports.UpdateUser = (req, res) => {
  // if (!req.body.email || !req.body.password || !req.body.name) {
  //   res.status(400).send({
  //     message: "required fields cannot be empty",
  //   });
  // }
  ContactV2.findOneAndUpdate({ 'id': req.params.id }, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
};
