import { Component } from '@angular/core'
import { AuthorsService } from './authors.service';

@Component({
    selector: 'authors',
    template: `
        <h2> {{ numberOfAuthors }} {{ title }} </h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>`
})
export class AuthorsComponents {
    title = "Authors";
    authors;
    numberOfAuthors;

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
        this.numberOfAuthors = (<string[]>this.authors).length;
    }
}