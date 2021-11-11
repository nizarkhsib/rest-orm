import { Component, OnInit } from '@angular/core';
import { User } from './model/model';
import { BackendService } from './services/backend.service';

@Component({
    selector: 'ld-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'lib';
    user = new User();

    constructor(private service: BackendService) {
    }

    ngOnInit(): void {
    }


}
