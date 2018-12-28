import { Photo } from "./photo";

export interface User {
    id: number;
    username: string;
    staffID: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    department: string;
    location: string;
    photoUrl: string;
    introduction?: string;
    photos?: Photo[];

}
