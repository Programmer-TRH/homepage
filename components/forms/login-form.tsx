"use client";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, LoginSchema } from "@/lib/schema/login-schema";
import { toast } from "sonner";
import { LoginAdminAction } from "@/actions/auth-action";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";

export default function LoginForm() {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = await LoginAdminAction(data);

    if (!result || !result.success) {
      toast.error(result?.message || "Login failed");
      return;
    }
    reset();
    toast.success(result.message);
    router.replace("/admin");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Button className="mt-8 w-full" disabled={isSubmitting}>
            {isSubmitting && <Spinner />}
            <span aria-live="polite">
              {isSubmitting ? " Processing " : " SUBMIT"}
            </span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
