"use client";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, LoginSchema } from "@/lib/schema/login-schema";
import { toast } from "sonner";
import { LoginAction } from "@/actions/auth-action";

export default function LoginForm() {
  const { handleSubmit, control } = useForm<LoginFormData>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });

    const result = await LoginAction(data);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };
  return (
    <Card className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button>Login</Button>
        </form>
      </CardContent>
    </Card>
  );
}
