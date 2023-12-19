import { Country } from "./country";

export class City {
    constructor(
        public id: number,
       public  name: string,
       public  district: string,
        public population: number,
        public country: Country
    ){}
}
