import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    AppComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
