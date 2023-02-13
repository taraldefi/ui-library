// Generated with util/create-component.js
import React from "react";
import { ApplicationTable, CompanyTable, EntityTable, ScreeningTable } from "./Table";
import { ApplicationTableData, CompanyTableData, EntityTableData, ScreeningTableData } from './data/data'
export default {
    title: "Table"
};

export const ApplicationTableComponent = () => <ApplicationTable applicationTableData={ApplicationTableData} />;

export const EntityTableComponent = () => <EntityTable entityTableData={EntityTableData} />;

export const CompanyTableComponent = () => <CompanyTable companyTableData={CompanyTableData} />;

export const ScreeningTableComponent = () => <ScreeningTable screeningTableData={ScreeningTableData} />;

