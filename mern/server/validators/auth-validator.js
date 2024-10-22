const { z } = require("zod");

// creating an object schema for registration

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast 3 charcters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast of 3 charcters" })
        .max(255, { message: "Email must not be more than 255 charcters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be atleast 10 charcters" })
        .max(10, { message: "Phone must be atmost 10 charcters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Name must be atleast 3 charcters" }),
})



module.exports = signupSchema;
