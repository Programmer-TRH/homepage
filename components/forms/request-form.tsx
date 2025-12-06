"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  InstantSellRequestFormData,
  InstantSellRequestSchema,
  items,
} from "@/lib/schema/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { createInstantSellMessageAction } from "@/actions/instant-sell-action";
import { Spinner } from "../ui/spinner";

export default function InstantSellRequestForm() {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<InstantSellRequestFormData>({
    mode: "onChange",
    resolver: zodResolver(InstantSellRequestSchema),
    defaultValues: {
      items: [],
      name: "",
      email: "",
      phone: "",
      dropOff: "",
      status: "new",
    },
  });

  const onSubmit = async (data: InstantSellRequestFormData) => {
    const result = await createInstantSellMessageAction(data);
    if (!result.success) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message);
    reset();
    router.push("/confirm-request");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FieldGroup>
        <Controller
          name="items"
          control={control}
          render={({ field, fieldState }) => (
            <div className="bg-[#1a1f2e] rounded-lg p-6 mb-6 border border-[#2d3748]">
              <p className="text-[#fbbf24] font-semibold mb-4">
                What would you like to sell?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-3 cursor-pointer text-white"
                  >
                    <Checkbox
                      id={item.id}
                      checked={(field.value ?? []).includes(item.id)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...(field.value ?? []), item.id]
                          : (field.value ?? []).filter(
                              (value) => value !== item.id
                            );
                        field.onChange(newValue);
                      }}
                    />

                    <span className="text-sm">{item.label}</span>
                  </label>
                ))}
              </div>

              {fieldState.invalid && (
                <p className="text-red-400 text-sm mt-2">
                  {fieldState.error?.message}
                </p>
              )}
            </div>
          )}
        />

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

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
              <Input
                {...field}
                type="tel"
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your phone number"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="dropOff"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Drop Off</FieldLabel>
              <Select
                onValueChange={(value) => field.onChange(value)}
                defaultValue={field.value}
              >
                <SelectTrigger
                  className={cn(
                    "w-full bg-[#2a2f3f] text-gray-400 px-6 py-5 rounded-lg border border-[#3d4250] focus:ring-[#fbbf24]"
                  )}
                >
                  <SelectValue placeholder="I would like to drop off" />
                </SelectTrigger>

                <SelectContent
                  id={field.name}
                  className="bg-[#2a2f3f] text-white border border-[#3d4250]"
                >
                  <SelectItem value="In person">In person</SelectItem>
                  <SelectItem value="By post">By post</SelectItem>
                  <SelectItem value="Courier">Courier</SelectItem>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        variant={"secondary"}
        size={"lg"}
        type="submit"
        className="w-full bg-[#fbbf24] text-black rounded-lg font-semibold hover:bg-[#f59e0b] transition"
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
