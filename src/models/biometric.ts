
import { Schema, Types, model, Model } from "mongoose";
import { Biometric } from "../interfaces/biometric.interface";

const BiometricSchema = new Schema<Biometric>(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    heartRate: { type: Number, required: true },
    bloodPressure: {
      systolic: { type: Number, required: true },
      diastolic: { type: Number, required: true },
    },
    bodyTemperature: { type: Number, required: true },
    fingerprint: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BiometricModel = model("biometrics", BiometricSchema);
export default BiometricModel;