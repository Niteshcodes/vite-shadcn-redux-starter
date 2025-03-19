export interface LoginApiResponse {
    user: {
        userName: string;
        email: string;
        roles: string[];
        lastLogin: string;
        loggedFrom: string;
        isActive: boolean;
        _id: string;
    }[];
    token: string;
}


