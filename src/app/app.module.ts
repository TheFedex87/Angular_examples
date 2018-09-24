import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import CoursesComponent from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponents } from './authors.component';
import { AuthorsService } from './authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponents,
    FavouriteComponent,
    TitlecaseComponent,
    TitleCasePipe,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
