"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import CountrySelectField from "@/components/forms/CountrySelectField";
import SelectField from "@/components/forms/SelectField";
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRY_OPTIONS } from "@/lib/constants";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "India",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up and Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField 
          name="fullName"
          label="Full Name"
          placeholder="Aadyaa"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 2 }}
        />
        <InputField 
          name="email"
          label="Email"
          placeholder="Contact @asundr.com"
          register={register}
          error={errors.email }
          validation={{ required: "Email is required", pattern: /^\w+@\w+\.\w+$/, message:'Email address is required' }}
        />
        <InputField 
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        <CountrySelectField/>
        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
        />
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
        />
        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRY_OPTIONS}
          control={control}
          error={errors.preferredIndustry}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Create account"
            : "Start Your Investing Journey"}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
