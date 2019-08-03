import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ScrollingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
