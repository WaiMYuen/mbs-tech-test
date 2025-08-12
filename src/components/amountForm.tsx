import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { amountFormSchema, AmountFormData } from "../components/schema/amountFormSchema"
import { useDispatch, useSelector } from "react-redux";
import { setAmount } from "../features/conversion/conversionSlice";
import { RootState } from "../app/store";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function AmountForm() {
  const dispatch = useDispatch()

  const form = useForm<AmountFormData>({
    resolver: zodResolver(amountFormSchema),
    defaultValues: { amount: ""}
  })

  const onSubmit = (values: AmountFormData) => {
    dispatch(setAmount(values.amount));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="1" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}