import {Component, OnInit} from '@angular/core';
import {MainService} from 'app/modules/test-page/pages/di/main.service';

@Component({
    selector: '[app-test-component-di]',
    templateUrl: './test-component-di.component.html',
    styleUrls: ['./test-component-di.component.scss'],
})
export class TestComponentDiComponent implements OnInit {

    constructor(
        protected mainService: MainService
    ) { }

    ngOnInit(): void {
        console.log(this.mainService);
        this.mainService.log();

        setTimeout(() => {
            this.mainService.text = 'Текст из TestComponentDiComponent';
            console.log(this);
        }, 1000);
    }
}
