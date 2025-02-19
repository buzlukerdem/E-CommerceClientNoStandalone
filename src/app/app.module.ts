import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DialogModule } from '@angular/cdk/dialog';
import { FileUploadModule } from './services/common/file-upload/file-upload.module';
import { FileUploadDialogComponent } from './dialogs/file-upload-dialog/file-upload-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    FileUploadDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AppRoutingModule,
    AdminModule,
    FileUploadModule,
    DialogModule,
    UiModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(),
    // provideAnimationsAsync()
    { provide: "baseUrl", useValue: "https://localhost:7137/api", multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
