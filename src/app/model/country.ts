import { Continent } from "../util/continent";
import { City } from "./city";
import { CountryLanguage } from "./country-language";

export class Country {
    constructor(
        code: string,
        name: string,
        continentType: Continent,
        region: string,
        surfaceArea: number,
        indepYear: number,
        population: number,
        lifeExpectancy: number,
        gnp: number,
        gnpOld: number,
        localName: string,
        governmentForm: string,
        headOfState: string,
        capital: number,
        code2: string,
        languages:CountryLanguage[] ,
        cities:City[]
    ){}
}
