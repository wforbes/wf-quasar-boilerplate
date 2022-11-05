import { Guid } from 'guid-typescript';

export enum AppEnvironment {
	LOCAL = 'local',
	PROD = 'prod',
}

export interface User {
	id?: number;
	guid?: Guid;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
}
