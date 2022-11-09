import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AppComponent } from './app.component';
// import { ButtonComponent } from './button/button.component';
// import { TableComponent } from './table/table.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            GridModule,
            ButtonsModule,
            InputsModule,
            AppRoutingModule,
            UploadsModule,
            HttpClientModule
        ],
    declarations: [ AppComponent, routingComponents, UploadFilesComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }