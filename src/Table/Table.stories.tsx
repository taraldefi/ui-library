// Generated with util/create-component.js
import React from "react";
import { ApplicationTable, CompanyTable, EntityTable } from "./Table";
import { ApplicationTableData, CompanyTableData, EntityTableData } from './data/data'
export default {
    title: "Table"
};

export const  ApplicationTableComponent = () => <ApplicationTable applicationTableData={ApplicationTableData} />;

export const EntityTableComponent = () => <EntityTable entityTableData={EntityTableData} />;

export const CompanyTableComponent = () => <CompanyTable companyTableData={CompanyTableData} />;
