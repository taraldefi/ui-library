// Generated with util/create-component.js
import React from "react";
import { CheckSquare, Square, ExternalLink } from "react-feather";
import { applicationTableType, entityTableType, companyTableType } from "./Table.types";
import "./Table.scss";


export const ApplicationTable: React.FC<applicationTableType> = ({ applicationTableData }) => (
    <div className="table">
        <table >
            <tr className="title--row">
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
                        <th key={index} className="title--headder">
                            {item}
                        </th>
                    );
                })}
            </tr>
            {applicationTableData.map((item, index) => {
                return (
                    <tr key={index} className="table--content">
                        <td className="app--table--items">{item.applicationId}</td>
                        <td className="app--table--items">{item.product}</td>
                        <td className="app--table--items">{item.dateFrom}</td>
                        <td className="app--table--items">{item.dateTo}</td>
                        <td className="app--table--items">{item.importerId}</td>
                        <td className="app--table--items">{item.importerName}</td>
                        <td className="app--table--items">{item.status}</td>
                    </tr>
                );
            })}
        </table>
    </div>
);

export const EntityTable: React.FC<entityTableType> = ({ entityTableData }) => (
    <div className="table">
        <table >

            <tr className="status--title">
                {["Title", "Issuance Date", "Maturity Date", "Facility Amount"].map(
                    (item, index) => {
                        return (
                            <th key={index} className="status--title--items">
                                {item}
                            </th>
                        );
                    }
                )}
            </tr>

            {entityTableData.map((item, index) => {
                return (
                    <tr className="table--Content" key={index}>
                        <td className="persons--tab">{item.productTitle}</td>
                        <td className="details--tab">{item.issuanceDate}</td>
                        <td className="source--tab">{item.maturityDate}</td>
                        <td className="status--tab">{item.facilityAmount}</td>
                    </tr>
                );
            })}
        </table>
    </div>
);

export const CompanyTable: React.FC<companyTableType> = ({ companyTableData }) => (

    <div className="table">
        <table >
            <tr className="status--title">
                {/* <div className="statusTitle"> */}
                {["Persons", "Details", "Source", "Status"].map((item, index) => {
                    return (
                        <th key={index} className="statusTitleItems">
                            {item}
                        </th>
                    );
                })}
                {/* </div> */}
            </tr>
            {companyTableData.map((item, index) => {
                return (
                    <tr className="tableContent" key={index}>
                        <td className="details--tab">{item.persons}</td>
                        <td className="persons--tab" >{item.details}</td>
                        <td className="source--tab">
                            <a href={item.source} >
                                {item.source}
                            </a>
                            <ExternalLink color="#0BD7A4" />
                        </td>
                        <td className="status--tab">
                            {item.status ? (
                                <div className="svg--icon">
                                    <CheckSquare color="#0BD7A4" />
                                    <span className="selected">Verified</span>
                                </div>
                            ) : (
                                <div className="svg--icon">
                                    <Square color="#CBD5E1" />
                                    <span className="not--selected">Verified</span>
                                </div>
                            )}
                        </td>
                    </tr>
                );
            })}
        </table>

    </div>
);
