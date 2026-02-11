import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations"

export async function POST(req: Request) {
    try {
        const body = await req.json()

        // Validate the request body
        const validatedData = contactFormSchema.safeParse(body)

        if (!validatedData.success) {
            return NextResponse.json(
                { message: "Invalid form data", errors: validatedData.error.flatten() },
                { status: 400 }
            )
        }

        // Here you would integrate with an email service like Resend
        // Example:
        // await resend.emails.send({
        //   from: 'HACA <hello@haca-web.com>',
        //   to: 'admin@haca-web.com',
        //   subject: `New Contact Form Submission: ${validatedData.data.name}`,
        //   html: `<p>Name: ${validatedData.data.name}</p>...`
        // })

        console.log("Contact form submission received:", validatedData.data)

        return NextResponse.json(
            { message: "Feedback received successfully" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Contact API Error:", error)
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}
