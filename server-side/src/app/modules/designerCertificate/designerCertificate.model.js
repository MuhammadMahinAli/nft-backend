import {Schema, model} from "mongoose";

const DesignerCertificateSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    certificateOReward: {
      type: String,
      required: true,
    },
    certifiedFrom: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create DesignerCertificate model
export const DesignerCertificate = model("DesignerCertificate", DesignerCertificateSchema);
