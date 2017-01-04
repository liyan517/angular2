export class Staff {
    constructor(public staffName: string,
                public jobTitle: string,
                public classIds?: string,
                public profilePicUrl?: string,
                public dateOfBirth?: string,
                public country?: string,
                public degree? : string,
                public experience? : string,
                public details?: string,
                public staffId?: string) {
    }
}