import { IsOfficial } from "../util/is-official";
import { Country } from "./country";

export class CountryLanguage {

    constructor(
        public language:string,
        public isOfficial:IsOfficial,
        public percentage:number,
        public country:Country

    ){}
}
