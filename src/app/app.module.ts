import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { OurServicesComponent } from './pages/home/our-services/our-services.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HeaderComponent, OurServicesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
