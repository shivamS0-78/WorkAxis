import { signUpSchema } from '@/lib/signInSchema';
import React from 'react'
import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription,CardFooter ,CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { toast } from 'sonner';
import { Link } from 'react-router';
import { Loader2 } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useSignUpMutation } from '@/hooks/use-auth';

export type SignUpFormData = z.infer<typeof signUpSchema>
const SignUp = () => {
    const form = useForm<SignUpFormData>({
        resolver : zodResolver(signUpSchema),
        defaultValues: {
            email:"",
            password:"",
            name:"",
        },
    });

    const {mutate , isPending} = useSignUpMutation();

    const handleOnSubmit =(values: SignUpFormData) => {
        mutate(values, {
          onSuccess :()=>{
            toast.success("Account createed successfully")
          },
          onError: (error: any) =>{
            const errorMessage = error.response?.data?.message || "an error occurred";
            console.log(error);
            toast.error(errorMessage);
        },
      });
    }

    return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4 w-full'>
    <Card className='max-w-md w-full shadow-xl'>
        <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Create an account to continue</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
              className="space-y-6"
            >
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-blue-600"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full"  disabled={isPending}>
              {isPending ? "Signing Up ....." : "Sign Up"}
              </Button  >
            </form>
          </Form>
          <CardFooter className="flex items-center justify-center mt-6">
            <div className="flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                Already have an account ? <Link to="/sign-in">Sign in</Link>
              </p>
            </div>
          </CardFooter>
        </CardContent>
    </Card>
    </div>
  )
}

export default SignUp