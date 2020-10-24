const mongoose = require("../db");

// const legalName = new mongoose.Schema(
//   {
//     first_name: {
//       type: String,
//       required: false,
//     },
//     middle_name: {
//       type: String,
//       required: false,
//     },
//     last_name: {
//       type: String,
//       required: false,
//     },
//     company_name: {
//       type: String,
//       required: false,
//     },
//   })
// const contactName = new mongoose.Schema(
//   {
//     registration_name: {
//       type: String,
//       required: false,
//     },
//     legal_name: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'legalName'
//     },
//   })

//   const recepient = new mongoose.Schema({
    
//     recipientCorridor: {
//       type: String,
//       required: false,
//     },
//     recipientData: [{
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'recepientData'
//     }]
//   })
//   const recepientData = new mongoose.Schema({
//       name: {
//         type: String,
//         required: false,
//       },
//       value: {
//         type: String,
//         required: false,
//       }
    
//   })
const contactV2Schema = new mongoose.Schema(
  // {
  //   id: {
  //     type: String,
  //     required: false,
  //   },
  //   is_update_required: {
  //     type: Boolean,
  //     required: false,
  //   },
  //   contact_name: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'contactName'
  //   },
  //   contact_type: {
  //     type: String,
  //     required: false,
  //   },
  //   email: {
  //     type: String,
  //     required: false,
  //   },
  //   phone: {
  //     type: String,
  //     required: false,
  //   },
  //   security_question: {
  //     type: String,
  //     required: false,
  //   },
  //   security_answer: {
  //     type: String,
  //     required: false,
  //   },
  //   preferred_language: {
  //     type: String,
  //     required: false
  //   },
  //   preferred_delivery: {
  //     type: String,
  //     required: false,
  //   },
  //   nearest_upcoming_transfer: {
  //     type: String,
  //     required: false,
  //   },
  //   recurring: {
  //     type: Boolean,
  //     required: false,
  //   },
  //   one_time_contact: {
  //     type: Boolean,
  //     required: false,
  //   },
  //   ir_recipient_data: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'recepient'
  //   }
  // }
  {
    id: {
      type: String,
      required: false
    },
    is_update_required: {
      type: Boolean,
      required: false
    },
    contact_type: {
      type: String,
      required: false
    },
    one_time_contact: {
      type: Boolean,
      required: false
    },
    contact_name: {
      registration_name: {
        type: String,
        required: false
      },
      legal_name: {
        first_name: {
          type: String,
          required: false
        },
        last_name: {
          type: String,
          required: false
        }
      }
    },
    email: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    security_question: {
      type: String,
      required: false
    },
    preferred_language: {
      type: String,
      required: false
    },
    preferred_delivery: {
      type: String,
      required: false
    },
    nearest_upcoming_transfer: {
      type: Date,
      required: false
    },
    recurring: {
      type: Boolean,
      required: false
    },
    ir_recipient_data: {
      recipientCorridor: {
        type: String,
        required: false
      },
      recipientData: {
        type: [
          Object
        ],
        require: false
      }
    }
  }
);


module.exports = mongoose.model("contactsV2", contactV2Schema);
// module.exports = mongoose.model(contactName, contactName);
// module.exports = mongoose.model(legalName, legalName);
// module.exports = mongoose.model(recepient, recepient);
// module.exports = mongoose.model(recepientData, recepientData);

