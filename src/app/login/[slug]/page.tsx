"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"

export default function Page({ params }: { params: { slug: string } }) {
    const userType = params.slug

    return (
        <div className="w-screen h-[85vh] flex justify-center items-center">
            <div className="h-96 w-80 flex flex-col justify-evenly items-center md:h-[34rem] md:w-[28rem] shadow-[5px_5px_0_rgba(17,17,1,1)] bg-[#212121] rounded-md">
                <h1 className="text-2xl font-bold text-white">Login</h1>
                <InputForm />
                <div />
            </div>
        </div>
    )
}


const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }: any) => (
                        <FormItem>
                            <FormLabel className="text-white">Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter username" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="text-white" type="submit">Submit</Button>
            </form>
        </Form>
    )
}

