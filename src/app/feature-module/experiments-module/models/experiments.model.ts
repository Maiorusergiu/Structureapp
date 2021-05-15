import { Sessions } from '../../sessions-module/models/sessions.model';
import { Stimuli } from '../../stimuli-module/models/stimuli.model';


export class Experiments {
    pkExperiments: number;
    responseDirection: string;
    fkSessions: Sessions;
    fkStimuli: Stimuli;
}