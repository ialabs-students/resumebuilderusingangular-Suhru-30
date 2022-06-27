import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from './resume/resume.component';
import { GeneratedResumeComponent } from './generated-resume/generated-resume.component';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    GeneratedResumeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
