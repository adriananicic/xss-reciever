"use client";
import getData from "@/server/getData";
import { useEffect, useState } from "react";

type stolenCredentials = {
  email: string;
  password: string;
};

export default function Home() {
  const [stolenCredentialList, setStolenCredentialList] =
    useState<stolenCredentials[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setStolenCredentialList(data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>List of stolen credentials</div>
      <div className="flex flex-col justify-center gap-5">
        {stolenCredentialList &&
          stolenCredentialList.map((credentials) => (
            <div key={credentials.password} className="flex gap-5">
              <p>Email:{credentials.email}</p>
              <p>Password:{credentials.password}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
