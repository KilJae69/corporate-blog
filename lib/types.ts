import { z } from "zod";

// ## Contact Form Schema
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, {
      message: "First name is required.",
    })
    .max(100, { message: "First name must be less than 100 characters." })
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: "First name must only contain letters.",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, {
      message: "Last name is required.",
    })
    .max(100, { message: "Last name must be less than 100 characters." })
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: "Last name must only contain letters.",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(1, {
      message: "Email is required.",
    })
    .max(100, { message: "Email must be less than 100 characters." }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required." })
    .max(20, { message: "Phone number must be less than 20 characters." })
    .regex(/^[\d\s()+-]+$/, { message: "Invalid phone number format." }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Subject is required." })
    .max(100, { message: "Subject must be less than 100 characters." }),
  message: z
    .string()
    .trim()
    .min(1, {
      message: "Message is required.",
    })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;

// ## Comment Form Schema
export const commentFormSchema = z.object({
  
  name: z
    .string()
    .trim()
    .min(1, {
      message: "Name is required.",
    })
    .max(100, { message: "Name must be less than 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(1, {
      message: "Email is required.",
    })
    .max(100, { message: "Email must be less than 100 characters." }),
  
  comment: z
    .string()
    .trim()
    .min(1, {
      message: "Comment is required.",
    })
    .max(1000, { message: "Comment must be less than 1000 characters." }),
    saveInfo: z.boolean().optional(),
});

export type TCommentFormSchema = z.infer<typeof commentFormSchema>;
// ## Team Member Types
type Skill = {
  id: number;
  title: string;
  imgUrl: string;
  value: number;
  description: string;
};

type Bio = {
  id: number;
  paragraph: string;
};

export type Member = {
  id: number;
  slug: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedIn: string;
  href: string;
  skills: Skill[];
  bio: Bio[];
};


export type Blog = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  images: string[];
} 
