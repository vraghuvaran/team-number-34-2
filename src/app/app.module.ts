import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerdetailsComponent } from './ownerdetails/ownerdetails.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildingwiseinfoComponent } from './buildingwiseinfo/buildingwiseinfo.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarchartComponent } from './barchart/barchart.component';
import { CollegewiseComponent } from './collegewise/collegewise.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    SpinnerComponent,
    NavbarComponent,
    // RegisterComponent,
    OwnerdetailsComponent,
    LoginComponent,
    LogoutComponent,
    MyprofileComponent,
    DashboardComponent,
    BuildingwiseinfoComponent,
    AddstudentComponent,
    RegisterComponent,
    BarchartComponent,
    CollegewiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
