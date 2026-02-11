"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LucideSend, LucideCheckCircle2 } from "lucide-react"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
        },
    })

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true)
        // Simulate API call
        console.log("Form Data:", data)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
        form.reset()
    }

    if (isSuccess) {
        return (
            <div className="text-center p-8 border rounded-2xl bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <LucideCheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. A specialist from our team will contact you within 24 hours.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Send another message
                </Button>
            </div>
        )
    }

    return (
        <div className="p-8 border rounded-2xl bg-card shadow-sm">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Work Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@company.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Acme Inc." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How can we help?</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us about your project or inquiry..."
                                        className="min-h-[120px] resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full h-12 font-bold" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                Sending...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Send Message
                                <LucideSend className="h-4 w-4" />
                            </span>
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
