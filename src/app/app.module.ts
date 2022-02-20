import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule,NgxSliderModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
