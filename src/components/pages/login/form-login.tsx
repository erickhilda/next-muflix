"use client";

import { useState } from "react";

import * as Cookies from "@/lib/cookies";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function generateSessionId() {
  return Math.random().toString(36).substring(2, 15);
}

function FormLogin() {
  const [error, setError] = useState<string | null>(null);
  async function login(body: { username: string; password: string }) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.error) {
        throw data.error;
      }

      if (data.status === "ok") {
        const session_id = generateSessionId();

        Cookies.set("user", JSON.stringify(data.username), {});
        Cookies.set("session_id", session_id, {});

        window.location.href = "/";
      }
    } catch (error) {
      setError(error as string);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const formDatas = new FormData(e.currentTarget);
      const username = formDatas.get("username") as string;
      const password = formDatas.get("password") as string;

      login({ username, password });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="flex flex-col gap-4 w-full mt-6" onSubmit={handleSubmit}>
      <Input placeholder="Username" name="username" />
      <Input type="password" name="password" placeholder="Password" />
      {error ? <p className="text-red-500">{error}</p> : null}
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
