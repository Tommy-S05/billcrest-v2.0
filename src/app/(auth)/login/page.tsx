import LoginForm from "@/components/auth/login-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Login() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className=" md:col-span-5 col-span-12 flex justify-center items-center">
        <Card className=" sm:max-w-sm sm:h-auto m-3 pt-12 md:pt-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
      <div className=" hidden md:flex md:col-span-7 bg-[url('https://cdn.dribbble.com/users/373274/screenshots/10805897/media/6e234812bc4204db2848082933592e54.png')] bg-cover lg:items-center"></div>
    </div>
  );
}
