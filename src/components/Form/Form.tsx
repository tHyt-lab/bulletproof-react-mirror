import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { ZodType, ZodTypeDef } from "zod";

type FormProps<
  TFormValues extends FieldValues,
  Schema extends ZodType<unknown, ZodTypeDef, unknown>
> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema: Schema;
};

export const Form = <
  TFormValues extends FieldValues,
  Schema extends ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  id,
  options,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  );
};
