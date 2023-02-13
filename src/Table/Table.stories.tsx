// Generated with util/create-component.js
import React from "react";
import { ApplicationTable, CompanyTable, EntityTable, PersonsTable, ScreeningTable } from "./Table";
import { ApplicationTableData, CompanyTableData, EntityTableData, ScreeningTableData, PersonsTableData } from './data/data'
export default {
    title: "Table"
};

export const ApplicationTableComponent = () => <ApplicationTable applicationTableData={ApplicationTableData} />;

export const EntityTableComponent = () => <EntityTable entityTableData={EntityTableData} />;

export const CompanyTableComponent = () => <CompanyTable companyTableData={CompanyTableData} />;

export const ScreeningTableComponent = () => <ScreeningTable screeningTableData={ScreeningTableData} />;

export const PersonsTableComponent = () => <PersonsTable personsTableData={PersonsTableData} />