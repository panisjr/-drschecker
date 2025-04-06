import { NextApiRequest, NextApiResponse } from "next";

export default function addUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const { firstname, lastname } = req.body;
      res
        .status(200)
        .json({
          message: `Successfully added user: First Name: ${firstname} Last Name: ${lastname}`,
        });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
