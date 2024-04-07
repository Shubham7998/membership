export interface LaptopModel {
    align: "right" | "left" | "center" | "inherit" | "justify" | undefined

    id : number,
    laptopName : string,
    laptopCompanyId : number,
    laptopDescription : string,
    laptopPrice : number,
    laptopDisplaySize : number,
    laptopProcessorSeriesId : number,
    laptopRAMSizeGB : number,
    laptopColorId : number,
    laptopOperatingSystemId : number
    laptopCompanyName? : string,
    laptopProcessorSeriesName? : string,
    laptopColorName? : string,
    laptopOperatingSystemName? : string
    laptopOperatingSeriesName? : string

}