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

export interface personsTableDataTypes {
  name: string;
  image: string;
  email: string;
  position: string;
  isSent: boolean;
  isDone: boolean;
}

export interface personsTableTypes {
  personsTableData: personsTableDataTypes[];
}

export interface researchTableDataTypes {
  name: string;
  image?: string;
  Hit: string;
  Source: string;
}

export interface researchTableTypes {
  researchTableData: researchTableDataTypes[];
}

export interface signOffTabelDataTypes {
  name: string;
  image: string;
  email: string;
  position: string;
  statusSeen: boolean;
  statusSigned: boolean;
}

export interface signOffTableTypes {
  signOffTableData: signOffTabelDataTypes[];
}

interface receiptTableDataTypes {
  transactionDate: string;
  amount: number;
  remainingBalance: number;
  paymentMethod: string;
  url: string;
}

export interface receiptTableTypes {
  receiptTableData: receiptTableDataTypes[];
}

interface repaymentTableDataTypes {
  paymentId: string;
  amount: number;
  dueDate: string;
  status: string;
}

export interface repaymentTableTypes {
  repaymentTableData: repaymentTableDataTypes[];
}
