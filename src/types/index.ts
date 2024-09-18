

interface Blog {
    _id: string;
    title: string;
    body: string;
    thumbnail: {
        fileId: string;
        name: string;
        url: string;
        thumbnailUrl: string;
        _id: string;
    };
    author: {
        _id: string;
        name: string;
        profileImg: string;
    };
    metaDescription: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}


interface Login {
    email: string;
    password: string;
}

interface Register extends Login {
    name: string;
}
interface NetworkError extends Error {
    response?: {
        data?: {
            message?: string;
        };
    };
}
export type { Blog, Login, NetworkError, Register };