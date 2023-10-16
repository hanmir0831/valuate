import { Document } from 'mongoose';

export interface User extends Document {
    readonly name: string;
    readonly loginId: string;
    readonly password: string;
}