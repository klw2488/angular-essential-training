import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponet} from './app.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponet
    ],
    bootstrap: [
        AppComponet
    ]
})
export class AppModule{}