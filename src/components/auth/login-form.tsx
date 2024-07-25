"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Inputs = {
  email: string;
  password: string;
};

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Email must have at least 5 characters.",
    })
    .max(50, { message: "Email is too long" }),
  password: z.string(),
});

export default function LoginForm() {
  const form = useForm<Inputs, z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data: z.infer<typeof formSchema>) =>
    alert(JSON.stringify(data));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="m@example.com" />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Input {...field} type="password" />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
}
