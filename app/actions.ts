"use server";

import apiFetch from "@/services/api";
import { createSession, getSession } from "@/utils/lib/session";

// Define a type for the response structure
type SigninResponse = {
  message?: string;
  user?: any;
  error?: any;
};

export async function signin(formData: FormData): Promise<any> {
  const endpoint = "user/login";
  
  // Extract email and password from formData
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return {
      message: "Email and password are required.",
    };
  }

  // Prepare the request body
  const body = JSON.stringify({
    email,
    password,
  });

  try {
      const api_url = `${process.env.NEXT_PUBLIC_API_BASE_URI}${endpoint}`
    let user1 = await fetch(api_url, {
      headers: {
        Authorization:`${process.env.NEXT_PUBLIC_API_BASIC_AUTH}`,
        'Content-Type': 'application/json',
      },

      method: 'POST',
      body:JSON.stringify({
        email,
        password,
      })
    })

   let user = await user1.json()

    if (!user) {
      return {
        message: "Invalid credentials. Please try again.",
      };
    }


    createSession(user?.data.token)
    console.log("dsahjdnsajdn", user)

   const gettoken =  await getSession()

   console.log("gettoken", gettoken)

    // TODO:
    // 1. Create user session
    // 2. Redirect user (e.g., using Next.js's `redirect` function)

    return user;
  } catch (error) {
    console.error("Sign-in error:", error);
    return {
      message: "An error occurred during sign-in.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
