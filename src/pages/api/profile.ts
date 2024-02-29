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
        "username": "eru-js",
        "occupation": "Software Engineer",
        "location": "Upside Down",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
        "links": [
            {
                "link": "discord",
                "url": "https://discord.com/users/984545673875718155",
            },
            {
                "link": "reddit",
                "url": "https://www.reddit.com/user/4nonymua"
            }
        ],
    }
    res.status(200).json(data)
}
