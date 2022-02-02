import {Component, OnInit} from '@angular/core';
import {MainService} from 'app/modules/test-page/pages/di/main.service';

@Component({
    selector: '[app-second-test-component-di]',
    templateUrl: './second-test-component-di.component.html',
    styleUrls: ['./second-test-component-di.component.scss'],
})
export class SecondTestComponentDiComponent implements OnInit {

    constructor(
		protected mainService: MainService
    ) {}

    ngOnInit(): void {
        this.mainService.log();

        setTimeout(() => {
            this.mainService.text = 'Текст из SecondTestComponentDiComponent';
            console.log(this);
        }, 1000);
    }
}
