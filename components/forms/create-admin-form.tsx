"use client";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateAdminFormData,
  CreateAdminSchema,
} from "@/lib/schema/login-schema";
import { toast } from "sonner";
import { CreateAdminAction } from "@/actions/auth-action";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Eye, EyeOff, Plus } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";

export default function CreateAdminForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<CreateAdminFormData>({
    mode: "onChange",
    resolver: zodResolver(CreateAdminSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: CreateAdminFormData) => {
    try {
      const result = await CreateAdminAction(data);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      reset();
      setOpen(false);
      toast.success(result.message);
      router.push("/admin/all-admin");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus />
          Create Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-2xl mx-auto ">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Create Admin
          </DialogTitle>
          <DialogDescription className="text-center">
            Fill up all the input
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your name"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
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
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      variant={"ghost"}
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Button className="mt-8 w-full">Confirm</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
