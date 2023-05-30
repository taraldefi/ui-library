// Generated with util/create-component.js
import React from "react";
import {
  ApplicationTable,
  CompanyTable,
  SignOffTable,
  EntityTable,
  PersonsTable,
  ResearchTable,
  ScreeningTable,
  ReceiptTable,
} from "./Table";
import {
  ApplicationTableData,
  CompanyTableData,
  EntityTableData,
  ScreeningTableData,
  PersonsTableData,
  ResearchTableData,
  SignoffTabelData,
  ReceiptTableData,
} from "./data/data";
export default {
  title: "Table",
};

export const Application = () => (
  <ApplicationTable applicationTableData={ApplicationTableData} />
);

export const Entity = () => <EntityTable entityTableData={EntityTableData} />;

export const Company = () => (
  <CompanyTable companyTableData={CompanyTableData} />
);

export const Screening = () => (
  <ScreeningTable screeningTableData={ScreeningTableData} />
);

export const Persons = () => (
  <PersonsTable personsTableData={PersonsTableData} />
);

export const Research = () => (
  <ResearchTable researchTableData={ResearchTableData} />
);
export const Signoff = () => (
  <SignOffTable signOffTableData={SignoffTabelData} />
);

export const receipt = () => (
  <ReceiptTable receiptTableData={ReceiptTableData} />
);
