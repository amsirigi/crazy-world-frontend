import { Continent } from "../util/continent";
import { City } from "./city";
import { CountryLanguage } from "./country-language";

export class Country {
    constructor(
        public code: string,
        public name: string,
        public continentType: Continent,
        public region: string,
        public surfaceArea: number,
        public indepYear: number,
        public population: number,
        public lifeExpectancy: number,
        public gnp: number,
        public gnpOld: number,
        public localName: string,
        public governmentForm: string,
        public headOfState: string,
        public capital: number,
        public code2: string,
        public imageUrl:string ,
	    public  history:string,
	    public  geography:string,
	    public  traditions:string,
        public languages:CountryLanguage[] ,
        public cities:City[]
    ){}
}
