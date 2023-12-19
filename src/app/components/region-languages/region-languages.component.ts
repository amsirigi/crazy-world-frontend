// region-languages.component.ts
import { Component } from '@angular/core';
import { CountryLanguage } from '../../model/country-language';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'app-region-languages',
  templateUrl: './region-languages.component.html',
  styleUrls: ['./region-languages.component.css']
})
export class RegionLanguagesComponent {
  region: string = '';
  languages: CountryLanguage[] = [];
  isDataLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit() {}

  getLanguagesInRegion() {
    this.isDataLoaded = true;

    this.countryService.getLanguagesInRegion(this.region).subscribe(
      (data: CountryLanguage[]) => {
        this.languages = data;
        this.isDataLoaded = false;
      },
      (error: any) => {
        console.error('Error fetching languages:', error);
        this.isDataLoaded = false;
      }
    );
  }

  onSearchClick() {
    this.getLanguagesInRegion();
  }
}
