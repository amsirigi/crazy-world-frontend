import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CountryLanguageComponent } from './components/country-language/country-language.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UniqueLanguagesComponent } from './components/unique-languages/unique-languages.component';
import { CountryLanguagesComponent } from './components/country-languages/country-languages.component';
import { OfficialLanguagesComponent } from './components/official-languages/official-languages.component';
import { UnofficialLanguagesComponent } from './components/unofficial-languages/unofficial-languages.component';
import { MaxSpokenLanguagesComponent } from './components/max-spoken-languages/max-spoken-languages.component';
import { MaxSpokenLanguageByCodeComponent } from './components/max-spoken-language-by-code/max-spoken-language-by-code.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutUsComponent,
    TermsOfUseComponent,
    HomePageComponent,
    HeaderComponent,
    CountryLanguageComponent,
    UniqueLanguagesComponent,
    CountryLanguagesComponent,
    OfficialLanguagesComponent,
    UnofficialLanguagesComponent,
    MaxSpokenLanguagesComponent,
    MaxSpokenLanguageByCodeComponent,
    

  
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
