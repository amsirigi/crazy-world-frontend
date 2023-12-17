import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { CountryLanguageComponent } from './components/country-language/country-language.component';
import { UniqueLanguagesComponent } from './components/unique-languages/unique-languages.component';
import { OfficialLanguagesComponent } from './components/official-languages/official-languages.component';
import { UnofficialLanguagesComponent } from './components/unofficial-languages/unofficial-languages.component';
import { MaxSpokenLanguagesComponent } from './components/max-spoken-languages/max-spoken-languages.component';
import { MaxSpokenLanguageByCodeComponent } from './components/max-spoken-language-by-code/max-spoken-language-by-code.component';
import { CountryLanguagesComponent } from './components/country-languages/country-languages.component';



const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'terms-of-use',component:TermsOfUseComponent},
  { path: 'country-language', component: CountryLanguageComponent},
  { path:'lang',
  component: CountryLanguageComponent,
children:[
  { path: 'unique-languages', component: UniqueLanguagesComponent},
  { path: 'country-languages', component: CountryLanguagesComponent },
  { path: 'official-languages', component: OfficialLanguagesComponent },
  { path: 'unofficial-languages', component: UnofficialLanguagesComponent },
  { path: 'max-spoken-languages', component: MaxSpokenLanguagesComponent },
  { path: 'max-spoken-language-by-code', component: MaxSpokenLanguageByCodeComponent },
  // {path:'update',component:UpdatePercentageComponent}
] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
