import * as z from "zod";

const formSchema = z.object({
  senderStreet: z.string().min(1),
  senderCity: z.string().min(1),
  senderPostCode: z.string().min(1),
  senderCountry: z.string().min(1),
  clientName: z.string().min(1),
  clientEmail: z.email(),
  clientStreet: z.string().min(1),
  clientCity: z.string().min(1),
  clientPostCode: z.string().min(1),
  clientCountry: z.string().min(1),

  invoiceDate: z.iso.date(),
  paymentTerms: z.literal(["1", "7", "14", "30"]),
  projectDesc: z.string(),
});

export default formSchema;
