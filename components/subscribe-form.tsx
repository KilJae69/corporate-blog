"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FaPaperPlane } from "react-icons/fa6";

const subscribeFormSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(1, {
      message: "Email is required.",
    })
    .max(100, { message: "Email must be less than 100 characters." }),
});

export default function SubscribeForm() {
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof subscribeFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-start"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative mt-0 w-full flex-1 space-y-0">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className=" w-full bg-primaryAccent p-4 text-white outline-none focus:bg-primaryAccent/50 active:bg-primaryAccent/50"
                  {...field}
                />
              </FormControl>

              <FormMessage className="absolute -bottom-5 left-0  text-rose-600" />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="group relative flex min-h-14 max-w-[155px] flex-1 items-center justify-center gap-2 bg-primaryAccent px-5 uppercase text-white transition-all hover:text-accent "
        >
          <span className="absolute left-0 h-4/5 w-px bg-primaryAccent " />
          <FaPaperPlane className="size-3 text-white transition-all group-hover:text-accent" />
          Subscribe
        </button>
      </form>
    </Form>
  );
}
