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
  entityTableData: entityTableDataType[];
}

export interface companyTableDataType {
  persons: string;
  details: string;
  source: string;
  status: boolean;
}

export interface companyTableType {
  companyTableData: companyTableDataType[];
}
export interface screeningTableDataType {
  persons: string;
  Hit: string;
  Source: string;
}

export interface screeningTableType {
  screeningTableData: screeningTableDataType[];
}