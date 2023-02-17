// Generated with util/create-component.js
import React from "react";
import { ApplicationTable, CompanyTable, SignoffTable, EntityTable, PersonsTable, ResearchTable, ScreeningTable } from "./Table";
import { ApplicationTableData, CompanyTableData, EntityTableData, ScreeningTableData, PersonsTableData, ResearchTableData, SignoffTabelData } from './data/data'
export default {
    title: "Table"
};

export const ApplicationTableComponent = () => <ApplicationTable applicationTableData={ApplicationTableData} />;

export const EntityTableComponent = () => <EntityTable entityTableData={EntityTableData} />;

export const CompanyTableComponent = () => <CompanyTable companyTableData={CompanyTableData} />;

export const ScreeningTableComponent = () => <ScreeningTable screeningTableData={ScreeningTableData} />;

export const PersonsTableComponent = () => <PersonsTable personsTableData={PersonsTableData} />

export const ResearchTableComponent = () => <ResearchTable researchTableData={ResearchTableData} />
export const SignoffTableComponent = () => <SignoffTable signoffTableData={SignoffTabelData} />