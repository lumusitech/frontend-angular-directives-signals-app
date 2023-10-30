import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterPageComponent } from './components/counter-page/counter-page.component';
import { PropertiesPageComponent } from './components/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserInfoPageComponent } from './components/user-info-page/user-info-page.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SignalsRoutingModule } from './signals-routing.module';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
