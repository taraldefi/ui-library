// Generated with util/create-component.js
import React from "react";

import { applicationTableType, entityTableType } from "./Table.types";

import "./Table.scss";

export const ApplicationTable: React.FC<applicationTableType> = ({ applicationTableData }) => (
    <div className="Application--Table">
        <div className="title--Row">
            {[
                "Application ID",
                "Product",
                "Date From",
                "Date To",
                "Importer ID",
                "Importer Name",
                "Status",
            ].map((item, index) => {
                return (
                    <div key={index} className="title--Headder">
                        {item}
                    </div>
                );
            })}
        </div>
        {applicationTableData.map((item, index) => {
            return (
                <div key={index} className="table--Content">
                    <div className="app--Table--Items">{item.applicationId}</div>
                    <div className="app--Table--Items">{item.product}</div>
                    <div className="app--Table--Items">{item.dateFrom}</div>
                    <div className="app--Table--Items">{item.dateTo}</div>
                    <div className="app--Table--Items">{item.importerId}</div>
                    <div className="app--Table--Items">{item.importerName}</div>
                    <div className="app--Table--Items">{item.status}</div>
                </div>
            );
        })}
    </div>
);

export const EntityTable: React.FC<entityTableType> = ({ EntityTableData }) => (
    <div className="table--Entity">
        <div className="table--Titles">
            <div className="status--Title">
                {["Title", "Issuance Date", "Maturity Date", "Facility Amount"].map(
                    (item, index) => {
                        return (
                            <div key={index} className="status--Title--Items">
                                {item}
                            </div>
                        );
                    }
                )}
            </div>
        </div>
        {EntityTableData.map((item, index) => {
            return (
                <div className="table--Content" key={index}>
                    <div className="persons--Tab">{item.productTitle}</div>
                    <div className="details--Tab">{item.issuanceDate}</div>
                    <div className="source--Tab">{item.maturityDate}</div>
                    <div className="status--Tab">{item.facilityAmount}</div>
                </div>
            );
        })}
    </div>
)



