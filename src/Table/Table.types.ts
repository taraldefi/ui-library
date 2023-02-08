// Generated with util/create-component.js
export interface applicationTableDataType {
  applicationId: number;
  product: string;
  dateFrom: string;
  dateTo: string;
  importerId: string;
  importerName: string;
  status: string;
}
export interface applicationTableType {
  applicationTableData: applicationTableDataType[];
}

export interface entityTableDataType {
  productTitle: string;
  issuanceDate: string;
  maturityDate: string;
  facilityAmount: number;
}

export interface entityTableType {
  EntityTableData: entityTableDataType[];
}