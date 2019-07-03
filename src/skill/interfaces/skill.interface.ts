import { Document } from "mongoose";;

export interface Skill extends Document {
    readonly skill: string;
    readonly description: string;
}