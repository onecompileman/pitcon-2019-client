import { Speaker } from './speaker.model';

export class Session {
    time: string;
    title: string;
    description: string;
    speakerId: number;
    speaker?: Speaker;
    slides?: string;
    video?: string;
}
