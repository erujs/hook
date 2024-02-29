// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Link = {
    link: string;
    url: string;
};

type Data = {
    picture: string;
    username: string;
    occupation: string;
    location: string;
    description: string;
    links: Link[];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data: Data = {
        "picture": "https://source.unsplash.com/wgDyTXJm-lU",
        "username": "erujs",
        "occupation": "Software Engineer",
        "location": "Upside Down",
        "description": "Hi! I'm Jerus Aquino",
        "links": [
            {
                "link": "discord",
                "url": "https://discord.com/users/984545673875718155",
            },
            {
                "link": "reddit",
                "url": "https://www.reddit.com/user/halfkoreann"
            }
        ],
    }
    res.status(200).json(data)
}
