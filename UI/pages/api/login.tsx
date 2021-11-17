import type { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '@/config/index';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await strapiRes.json();

    if (strapiRes.ok) {
      // @Todo Set cookie
      res.status(200).json({ user: data.user });
    } else {
      res
        .status(data.statusCode)
        .json({ messsage: data.message[0].messages[0].message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `method ${req.method} not allowed` });
  }
};
