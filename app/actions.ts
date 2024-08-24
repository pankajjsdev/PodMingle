"use server";

import { redirect } from "next/navigation";
import { createSession, getSession } from "@/utils/lib/session";

// Define a type for the response structure
type SigninResponse = {
  message?: string;
  user?: any;
  error?: any;
};

export async function signin(formData: FormData): Promise<SigninResponse> {
  const endpoint = "user/login";
  
  // Extract email and password from formData
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return {
      message: "Email and password are required.",
    };
  }

  const body = JSON.stringify({ email, password });

  try {
    const api_url = `${process.env.NEXT_PUBLIC_API_BASE_URI}${endpoint}`;
    
    const response = await fetch(api_url, {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_API_BASIC_AUTH}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body,
    });

    const user = await response.json();

    if (!response.ok || !user) {
      return {
        message: "Invalid credentials. Please try again.",
      };
    }

    createSession(user?.data?.token);
    console.log("User data:", user);

    const token = await getSession();
    console.log("Session token:", token);

    // Redirect to the homepage after successful sign-in
    redirect("/");

    return user;
  } catch (error) {
    console.error("Sign-in error:", error);
    return {
      message: "An error occurred during sign-in.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
