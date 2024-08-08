export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PageData {
    posts: Post[];
}

export interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
}
