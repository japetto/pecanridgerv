import { z } from "zod";

export const applicationFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  currentAddress: z
    .string()
    .min(1, "Current address is required")
    .max(200, "Address is too long"),

  // RV Information
  rvYear: z
    .number()
    .min(1960, "RV year must be 1960 or later")
    .max(new Date().getFullYear() + 1, "RV year cannot be in the future"),
  rvLength: z
    .number()
    .min(15, "RV length must be at least 15 feet")
    .max(60, "RV length cannot exceed 60 feet"),
  rvMake: z
    .string()
    .min(1, "RV make is required")
    .max(50, "RV make is too long"),
  rvModel: z
    .string()
    .min(1, "RV model is required")
    .max(50, "RV model is too long"),
  rvType: z.string().min(1, "Please select an RV type"),

  // Occupancy & Pets
  numOccupants: z
    .number()
    .min(1, "Number of occupants must be at least 1")
    .max(10, "Maximum 10 occupants allowed"),
  hasPets: z.string().min(1, "Please specify if you have pets"),
  petDetails: z.string().optional(),

  // Stay Details
  moveInDate: z.date({
    message: "Please select a move-in date",
  }),
  stayDuration: z.string().min(1, "Please select your planned stay duration"),

  // Additional Information
  additionalNotes: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
