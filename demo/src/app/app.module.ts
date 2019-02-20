import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    LoginComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
