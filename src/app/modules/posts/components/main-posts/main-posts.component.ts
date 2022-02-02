import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: '[app-main-posts]',
    templateUrl: './main-posts.component.html',
    styleUrls: ['./main-posts.component.scss'],
})
export class MainPostsComponent implements OnInit {

    constructor() {}

    public ngOnInit(): void {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
            });
    }

}
