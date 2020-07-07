import { AppService } from './app.service';
export declare class CreateUserDto {
    publicBadgeName: string;
    privateEmail: string;
    timezone: string;
    availableFrom: string;
    availableTo: string;
    TalkProposal: string;
    TalkProposalSummary: string;
    BofProposal: string;
    BofProposalSummary: string;
    publicBadgeByline: string;
    privateName: string;
    org: string;
    website: string;
    ActivityPub: string;
    codeOfConduct: 'agreed';
    confirmed: '';
    helpsVideoRecording: boolean;
    helpsVideoEdit: boolean;
    helpsModeration: boolean;
    helpsWebdesign: boolean;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getConfirm(id: string): Promise<void>;
    create(createUserDto: CreateUserDto): Promise<void>;
}
