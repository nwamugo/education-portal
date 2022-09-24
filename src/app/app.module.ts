import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InsideLayoutComponent } from './inside-layout/inside-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatsComponent } from './chats/chats.component';
import { ClassComponent } from './class/class.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsideLayoutComponent,
    DashboardComponent,
    ChatsComponent,
    ClassComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    NgxSpinnerModule.forRoot({type: 'ball-pulse'}),
    // Stream SDK
    StreamChatModule,
    StreamAutocompleteTextareaModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
