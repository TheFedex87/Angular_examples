
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <div *ngIf='courses.length > 0 ; else noCourses'>
            <ul>
                <li *ngFor="let course of courses">
                    {{course}}
                </li>
            </ul>
        </div>
        <ng-template #noCourses>
            No courses available
        </ng-template><br>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <button class="btn btn-primary" (click)="saveClicked($event)">Save</button>`
})
export default class CoursesComponent {
    title = "List of courses";
    email = "me@example.com";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onKeyUp(){
        console.log(this.email);
    }

    saveClicked($event){
        console.log("Save has been clicked!", $event);
    }
}