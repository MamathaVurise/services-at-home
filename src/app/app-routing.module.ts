import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { TelevisionComponent } from './service-types/television/television.component';
import { WashingMachineComponent } from './service-types/washing-machine/washing-machine.component';
import { RefridgeratorComponent } from './service-types/refridgerator/refridgerator.component';
import { GasStoveComponent } from './service-types/gas-stove/gas-stove.component';
import { RiceCookerComponent } from './service-types/rice-cooker/rice-cooker.component';
import { MixerComponent } from './service-types/mixer/mixer.component';
import { MobilesComponent } from './service-types/mobiles/mobiles.component';
import { LaptopsComponent } from './service-types/laptops/laptops.component';
import { AccessoriesComponent } from './service-types/accessories/accessories.component';
import { HairCareComponent } from './service-types/hair-care/hair-care.component';
import { FacialComponent } from './service-types/facial/facial.component';
import { PlumbingComponent } from './service-types/plumbing/plumbing.component';
import { CarpenteryComponent } from './service-types/carpentery/carpentery.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:HomeServicesComponent},
  {path:'television',component:TelevisionComponent},
  {path:'washinemachine',component:WashingMachineComponent},
  {path:'refridgerator',component:RefridgeratorComponent},
  {path:'gasstove',component:GasStoveComponent},
  {path:'ricecooker',component:RiceCookerComponent},
  {path:'mixer',component:MixerComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'haircare',component:HairCareComponent},
  {path:'facial',component:FacialComponent},
  {path:'plumbing',component:PlumbingComponent},
  {path:'carpentery',component:CarpenteryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
