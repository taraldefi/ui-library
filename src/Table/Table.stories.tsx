// Generated with util/create-component.js
import React from "react";
import { ApplicationTable, EntityTable } from "./Table";
import { ApplicationTableData, EntityTableData } from './data/data'
export default {
    title: "Table"
};

export const  ApplicationTableComponent = () => <ApplicationTable applicationTableData={ApplicationTableData} />;

export const EntityTableComponent = () => <EntityTable EntityTableData={EntityTableData} />;
