// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Link = {
    link: string;
    url: string;
};

type UserData = {
    picture: string;
    username: string;
    occupation: string;
    location: string;
    description: string;
    links: Link[];
};

type Data = UserData[];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data: Data = [
        {
            "picture": "https://source.unsplash.com/0mN84vxigL0",
            "username": "first",
            "occupation": "Artist",
            "location": "Germany",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
            "links": [
                {
                    "link": "telegram",
                    "url": "#",
                },
                {
                    "link": "discord",
                    "url": "#",
                },
            ],
        },
        {
            "picture": "https://source.unsplash.com/URn7-JupQ6Q",
            "username": "second",
            "occupation": "UI/UX Designer",
            "location": "Japan",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
            "links": [
                {
                    "link": "telegram",
                    "url": "#",
                },
                {
                    "link": "discord",
                    "url": "#",
                },
            ],
        },
        {
            "picture": "https://source.unsplash.com/th3rQu0K3aM",
            "username": "third",
            "occupation": "DJ",
            "location": "Australia",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
            "links": [
                {
                    "link": "telegram",
                    "url": "#",
                },
                {
                    "link": "discord",
                    "url": "#",
                },
            ],
        },
        {
            "picture": "https://source.unsplash.com/zgC7nqgE7uw",
            "username": "fourth",
            "occupation": "Nurse",
            "location": "PH",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
            "links": [
                {
                    "link": "telegram",
                    "url": "#",
                },
                {
                    "link": "discord",
                    "url": "#",
                },
            ],
        },
        {
            "picture": "https://source.unsplash.com/-Ez6KyVFp-0",
            "username": "fifth",
            "occupation": "DevOps",
            "location": "Mongolia",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
            "links": [
                {
                    "link": "telegram",
                    "url": "#",
                },
                {
                    "link": "discord",
                    "url": "#",
                },
            ],
        },
        {
            "picture": "https://source.unsplash.com/mbECH-OCBUg",
            "username": "sixth",
            "occupation": "Model",
            "location": "US",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
            "links": [
                {
                    "link": "telegram",
                    "url": "#",
                },
                {
                    "link": "discord",
                    "url": "#",
                },
            ],
        },
        {
            "picture": "https://source.unsplash.com/R_2e3RG6cys",
            "username": "seventh",
            "occupation": "student",
            "location": "UAE",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?",
            "links": [
                {
                    "link": "telegram",
                    "url": "#",
                },
                {
                    "link": "discord",
                    "url": "#",
                },
            ],
        },
    ]

    res.status(200).json(data);
}
