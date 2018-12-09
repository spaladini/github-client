export class Issue {
    id: number;
    number: number;
    status: string;
    title: string;
    body: string;
    assignee: User;

    type: 'BUG' | 'ENHANCEMENT' | 'PROPOSAL';
    level: number;
}

export class User {
    login: string;
    id: number;
}
