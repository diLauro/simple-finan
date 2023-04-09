// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Domain from "@/db/models/Domain";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == "POST") {
    const body = {
      descripition: req.body.descripition,
      code: req.body.code,
      codeType: req.body.codeType,
    };

    const domain = await Domain.create(body);

    res.status(201).json(domain);
  }

  if (req.method == "GET") {
    res.status(200).json({ method: "get" });
  }
}
