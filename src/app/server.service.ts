import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';

@Injectable()

export class ServerService {
    constructor(private http: Http){}

    storeServers(servers: any[]){
        const header = new Headers({'Content-Type': 'application/json'})
        // return this.http.post('https://udemy-ng-http-9f962.firebaseio.com/data.json', servers, {
        //     headers: header
        // });

        // put in firebase is just overwriting instead of appending to the db
        return this.http.put('https://udemy-ng-http-9f962.firebaseio.com/data.json', servers, {
            headers: header
        });
    }

    getServers(){
        return this.http.get('https://udemy-ng-http-9f962.firebaseio.com/data.json')
        .map((response: Response) => {
            const data = response.json();
            return data;
        }); 
        // .map take the data from one observable and pass it to another to another observable 
        // and have a response with a much nicer form instead of the ugly nested value that firebase provide us
    }
}