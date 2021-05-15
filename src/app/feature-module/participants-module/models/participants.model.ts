import { Sessions } from "../../sessions-module/models/sessions.model";

export class Participants { 
 pkParticipants: number;
 initials: string;
 age: string;
 sex: string;
 information: string;
 sessions: Sessions
}