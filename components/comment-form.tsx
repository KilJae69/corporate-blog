"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { TCommentFormSchema, commentFormSchema } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type ProfileFormProps = {
  className?: string;
};

export default function CommentForm({ className }: ProfileFormProps) {
  const form = useForm<TCommentFormSchema>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
      saveInfo: false,
    },
  });

  const {
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    const savedCommentData = localStorage.getItem("tericCommentData");
    if (savedCommentData) {
      const { name, email } = JSON.parse(savedCommentData);
      if (name) form.setValue("name", name);
      if (email) form.setValue("email", email);
    }
  }, [form]);

  const onSubmit = async (formData: TCommentFormSchema) => {
    if (formData.saveInfo) {
      const commentData = {
        name: formData.name,
        email: formData.email,
      };
      localStorage.setItem("tericCommentData", JSON.stringify(commentData));
    } else {
      localStorage.removeItem("tericCommentData");
    }
    console.log(formData);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("max-w-lg", className)}
      >
        <p className="text-clamp-md mb-5 font-semibold text-[#131c26]">
          Leave a comment
        </p>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-1 flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.name ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-transparent text-sm"
                    placeholder="Your Name &#42;"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.name
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-1 flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.email ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-transparent text-sm"
                    placeholder="Your Email &#42;"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.email
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="saveInfo"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex flex-row-reverse justify-end gap-4 `}
              >
                <FormLabel className="font-light leading-4">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </FormLabel>
                <FormControl>
                  <Checkbox
                    className="bg-transparent text-sm"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.comment ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel className="sr-only">Comment text content</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-transparent text-sm"
                    placeholder="Your comment &#42;"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.comment
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          className="group relative mt-10 flex min-h-14 max-w-[155px] items-center justify-center gap-2 rounded-none bg-accent px-5 uppercase text-white transition-all "
        >
          Leave a comment
        </Button>
      </form>
    </Form>
  );
}
