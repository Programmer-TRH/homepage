"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

// ------ Types ------
interface FormDataType {
  goldBars: boolean;
  goldCoins: boolean;
  silverBars: boolean;
  silverCoins: boolean;
  fullName: string;
  email: string;
  phone: string;
  dropOff: string;
}

interface FormErrors {
  items?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  dropOff?: string;
}

// ------ Sanitizer ------
const sanitize = (value: string) => value.replace(/<[^>]*>?/gm, "").trim();

export default function RequestForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormDataType>({
    goldBars: false,
    goldCoins: false,
    silverBars: false,
    silverCoins: false,
    fullName: "",
    email: "",
    phone: "",
    dropOff: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // ---- handle checkbox + text inputs ----
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : sanitize(e.target.value),
    }));
  };

  // ---- Validation ----
  const validate = () => {
    const newErrors: FormErrors = {};

    if (
      !formData.goldBars &&
      !formData.goldCoins &&
      !formData.silverBars &&
      !formData.silverCoins
    ) {
      newErrors.items = "Select at least one item to sell.";
    }

    if (!formData.fullName) newErrors.fullName = "Full name is required.";

    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{6,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!formData.dropOff) newErrors.dropOff = "Select a drop-off method.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---- Submit ----
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);
    router.push("/confirm-request");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* What to sell */}
      <div className="bg-[#1a1f2e] rounded-lg p-6 mb-8 border border-[#2d3748]">
        <p className="text-[#fbbf24] font-semibold mb-4">
          What would you like to sell?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(
            [
              ["goldBars", "Gold Bars"],
              ["goldCoins", "Gold Coins"],
              ["silverBars", "Silver Bars"],
              ["silverCoins", "Silver Coins"],
            ] as const
          ).map(([key, label]) => (
            <label
              key={key}
              className="flex items-center gap-3 cursor-pointer text-white"
            >
              <Checkbox
                checked={formData[key]}
                onCheckedChange={(checked: boolean) =>
                  setFormData((prev) => ({
                    ...prev,
                    [key]: Boolean(checked),
                  }))
                }
              />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>

        {errors.items && (
          <p className="text-red-400 text-sm mt-2">{errors.items}</p>
        )}
      </div>

      {/* Full Name */}
      <div>
        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="bg-[#2a2f3f] text-white px-6 py-5 rounded-lg border border-[#3d4250] placeholder-gray-500 focus-visible:ring-[#fbbf24]"
        />
        {errors.fullName && (
          <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#2a2f3f] text-white px-6 py-5 rounded-lg border border-[#3d4250] placeholder-gray-500 focus-visible:ring-[#fbbf24]"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-[#2a2f3f] text-white px-6 py-5 rounded-lg border border-[#3d4250] placeholder-gray-500 focus-visible:ring-[#fbbf24]"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Drop-off method */}
      <div>
        <Select
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, dropOff: value }))
          }
        >
          <SelectTrigger
            className={cn(
              "w-full bg-[#2a2f3f] text-gray-400 px-6 py-5 rounded-lg border border-[#3d4250] focus:ring-[#fbbf24]"
            )}
          >
            <SelectValue placeholder="I would like to drop off" />
          </SelectTrigger>

          <SelectContent className="bg-[#2a2f3f] text-white border border-[#3d4250]">
            <SelectItem value="In person">In person</SelectItem>
            <SelectItem value="By post">By post</SelectItem>
            <SelectItem value="Courier">Courier</SelectItem>
          </SelectContent>
        </Select>

        {errors.dropOff && (
          <p className="text-red-400 text-sm mt-1">{errors.dropOff}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        variant={"secondary"}
        size={"lg"}
        type="submit"
        className="w-full bg-[#fbbf24] text-black rounded-lg font-semibold hover:bg-[#f59e0b] transition"
      >
        Submit
      </Button>
    </form>
  );
}
