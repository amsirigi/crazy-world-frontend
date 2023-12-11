import { IsOfficial } from "../util/is-official";
import { Country } from "./country";

export class CountryLanguage {

    constructor(
        language:string,
        isOfficial:IsOfficial,
        percentage:number,
        country:Country

    ){}
}
