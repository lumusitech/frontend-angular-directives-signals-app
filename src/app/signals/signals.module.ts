import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './components/counter-page/counter-page.component';
import { UserInfoPageComponent } from './components/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './components/properties-page/properties-page.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
