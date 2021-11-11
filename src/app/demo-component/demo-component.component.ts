import { Component, OnInit } from '@angular/core';
import { User } from '../model/model';
import { BackendService } from '../services/backend.service';

@Component({
    selector: 'ld-demo-component',
    templateUrl: './demo-component.component.html',
    styleUrls: ['./demo-component.component.scss']
})
export class DemoComponentComponent implements OnInit {

    constructor(private service: BackendService) {
    }

    ngOnInit(): void {
        this.service.get('api/test/all').subscribe(
            res => console.log('res', res)
        );
    }

}
