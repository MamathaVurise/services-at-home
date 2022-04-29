import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TestComponent } from './test/test.component';
import { GasStoveComponent } from './service-types/gas-stove/gas-stove.component';
import { RefridgeratorComponent } from './service-types/refridgerator/refridgerator.component';
import { TelevisionComponent } from './service-types/television/television.component';
import { WashingMachineComponent } from './service-types/washing-machine/washing-machine.component';
import { AccessoriesComponent } from './service-types/accessories/accessories.component';
import { CarpenteryComponent } from './service-types/carpentery/carpentery.component';
import { FacialComponent } from './service-types/facial/facial.component';
import { HairCareComponent } from './service-types/hair-care/hair-care.component';
import { LaptopsComponent } from './service-types/laptops/laptops.component';
import { MixerComponent } from './service-types/mixer/mixer.component';
import { MobilesComponent } from './service-types/mobiles/mobiles.component';
import { PlumbingComponent } from './service-types/plumbing/plumbing.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeServicesComponent,
    TestComponent,
    GasStoveComponent,
    RefridgeratorComponent,
    TelevisionComponent,
    WashingMachineComponent,AccessoriesComponent,CarpenteryComponent,FacialComponent,HairCareComponent,LaptopsComponent,MixerComponent,MobilesComponent,PlumbingComponent,RefridgeratorComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
