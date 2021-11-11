import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './services/backend.service';
import { DemoComponentComponent } from './demo-component/demo-component.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule { }
