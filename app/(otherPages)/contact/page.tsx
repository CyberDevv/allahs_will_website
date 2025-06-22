import Contact from "@/components/contact/Form";
import React, { Suspense } from "react";

export const metadata = {
  title: "Contact | AWSC",
};

function Page() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}

export default Page;
