export interface Biometric {
  id: number;
  name: string;
  lastName: string;
  age: number;
  gender: "Male" | "Female" | "Other"; // Only allows these three values
  height: number;
  weight: number;
  heartRate: number;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  bodyTemperature: number;
  fingerprint: string;
  } 