"use client";
import {
  ContactMessageFormData,
  ContactMessageSchema,
} from "@/lib/schema/contact-schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createContactMessageAction } from "@/actions/contact";
import { Spinner } from "../ui/spinner";

export default function ContactForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactMessageFormData>({
    mode: "onChange",
    resolver: zodResolver(ContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "new",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: ContactMessageFormData) => {
    const result = await createContactMessageAction(data);
    if (!result.success) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message);
    reset();
    router.push("/confirm-request");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black ">
      <FieldGroup>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your name"
                className="border-gray-400 placeholder:text-gray-500"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                className="border-gray-400 placeholder:text-gray-500"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={control}
          name="subject"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter subject here"
                className="border-gray-400 placeholder:text-gray-500"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>
              <Textarea
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your message"
                className="border-gray-400 placeholder:text-gray-500"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        className="w-full bg-[#c4a564] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#b89456] transition"
        disabled={isSubmitting}
      >
        {isSubmitting && <Spinner />}
        <span aria-live="polite">
          {isSubmitting ? " Processing " : " Submit"}
        </span>
      </Button>
    </form>
  );
}
