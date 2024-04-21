import { SignIn } from "@clerk/nextjs";

export default function SignInPage(): React.ReactElement {
  return (
    <div className="flex justify-center items-center pt-16">
      <SignIn path="/sign-in" />
    </div>
  );
}
