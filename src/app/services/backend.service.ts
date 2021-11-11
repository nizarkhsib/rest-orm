import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class BackendService {
    header = new HttpHeaders();

    // private baseUrl = 'http://localhost:8080/';
    private baseUrl = 'http://localhost:8080/';
    protected api = '';
    options: any;
    // tslint:disable-next-line:variable-name
    constructor(private _httpClient: HttpClient) {
        this.header.set('Accept', 'application/json');
    }

    public get(apiName: string, options?: any): Observable<any> {
        return this._httpClient.get(this.baseUrl + apiName, { headers: this.header });
    }

    public getOne(apiName: string, id: number, options?: any): Observable<any> {
        return this._httpClient.get(this.baseUrl + apiName + '/' + id, options ? options : null);
    }

    public delete(apiName: string, options?: any): Observable<any> {
        return this._httpClient.delete(this.baseUrl + apiName, options ? options : null);
    }

    public post(apiName: string, body: any, options?: any): Observable<any> {
        return this._httpClient.post(this.baseUrl + apiName, body, options ? options : null);
    }

    public update(apiName: string, body: any, options?: any): Observable<any> {
        return this._httpClient.put(this.baseUrl + '/' + apiName, body, options ? options : null);
    }
}
