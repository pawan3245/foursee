export interface Company {
    id: string,
    name: string,
    email: string,
    phone: string,
    isDisabled:boolean,
    companyId: number
    operatingHoursMeter: number
}
export interface CompanyData {
    data: Company[],
    recordsTotal: number,
}
