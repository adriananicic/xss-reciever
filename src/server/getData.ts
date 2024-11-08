"use server";

import prisma from "@/prisma-client";

const getData = async () => {
  const stolenCredentialsList = await prisma.stolenCredentials.findMany();
  return stolenCredentialsList;
};

export default getData;
