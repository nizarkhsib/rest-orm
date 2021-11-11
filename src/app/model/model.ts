import { ApiConfiguration } from '../rest-orm/api-configurations';
import { Entity } from '../rest-orm/entity';
import { RestModelRead } from '../rest-orm/rest-model-reader';
import { BackendService } from '../services/backend.service';

export const apiName = 'http://localhost:8080/api/test/all';

export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
}

export class User extends Entity<User> {

    public id: number | undefined = undefined;
    public firstname: string | undefined = undefined;
    public lastname: string | undefined = undefined;

    constructor(obj?: IUser) {
        super('api/test/all', obj);
    }

    public get getLastname(): string {
        return this.lastname;
    }

    public get getFirstname(): string {
        return this.firstname;
    }

    public get getFullName(): string {
        return this.firstname + ' ' + this.lastname;
    }

    static get getReader() {
        return new RestModelRead<User>(new ApiConfiguration(apiName), User);
    }

    static getOne(id: number) {
        return User.getReader.getOne(id);
    }

    static getAll() {
        return User.getReader.getAll();
    }

    static getBySpecificId(key: string, value: number) {
        return User.getReader.getBySpecificId(key, value);
    }

    getId(): number {
        return this.id;
    }

}
