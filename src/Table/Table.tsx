// Generated with util/create-component.js
import React from "react";
import { CheckSquare, Square, ExternalLink, MoreHorizontal } from "react-feather";
import { applicationTableType, researchTableTypes, entityTableType, companyTableType, screeningTableType, personsTableTypes } from "./Table.types";
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

export const ScreeningTable: React.FC<screeningTableType> = ({ screeningTableData }) => (

    <div className="table">
        <table >
            <tr className="status--title">
                {/* <div className="statusTitle"> */}
                {["Persons", "Hit", "Source", "Options"].map((item, index) => {
                    return (
                        <th key={index} className="statusTitleItems">
                            {item}
                        </th>
                    );
                })}
                {/* </div> */}
            </tr>
            {screeningTableData.map((item, index) => {
                return (
                    <tr className="tableContent" key={index}>
                        <td className="details--tab">{item.persons}</td>
                        <td className="hit--tab" >{item.Hit}</td>
                        <td className="source--tab">
                            <a href={item.Source} >
                                {item.Source}
                            </a>&nbsp;&nbsp;
                            <ExternalLink color="#0BD7A4" />
                        </td>
                        <td className="status--tab">
                            <div className="svg--icon">
                                <MoreHorizontal color="#64748b" />
                            </div>
                        </td>
                    </tr>
                );
            })}
        </table>

    </div>
);

export const PersonsTable: React.FC<personsTableTypes> = ({ personsTableData }) => (
    <div className={"table"}>
        <table>

            <tr className="status--title">
                {[
                    "Persons",
                    "Email",
                    "Position",
                    "Verification Status",
                    "Status Verification",
                    "Options",
                ].map((item, index) => {
                    return (
                        <th key={index} >
                            {item}
                        </th>
                    );
                })}
            </tr>

            {personsTableData.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="persons--container" id="assignee">
                            <img
                                className="images"
                                src={item.image}
                                key={index}
                                alt=""
                                width="35%"
                                height="35%"
                            ></img>
                            <div className="name--container">
                                <span>{item.name}</span>
                            </div>
                        </td>
                        <td className="email--container">
                            <span>{item.email}</span>
                        </td>
                        <td id="assignor">
                            <span>{item.position}</span>
                        </td>
                        <td className="sent">
                            {item.isSent ? (
                                <div className="sent--done">Sent</div>
                            ) : (
                                <div className="sent--not--done">Not Sent</div>
                            )}
                        </td>
                        <td className="done">
                            {item.isDone ? (
                                <div className="not--done">Completed</div>
                            ) : (
                                <div className="complete">Not Done</div>
                            )}
                        </td>
                        <td >
                            <MoreHorizontal color="#64748b" />
                        </td>
                    </tr>
                );
            })}
        </table>
    </div>
)

export const ResearchTable: React.FC<researchTableTypes> = ({ researchTableData }) => (
    <div className="table">
        <table>
            <tr className="status--title">
                {/* <div className="statusTitle"> */}
                {["Persons", "Hit", "Source", "Options"].map((item, index) => {
                    return (
                        <th key={index} >
                            {item}
                        </th>
                    );
                })}
                {/* </div> */}
            </tr>
            {researchTableData.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="persons--container" id="assignee">
                            <img
                                className="images"
                                src={item.image}
                                key={index}
                                alt=""
                                width="35%"
                                height="35%"
                            ></img>
                            <div className="name--container">
                                <span>{item.name}</span>
                            </div>
                        </td>
                        <td className="hit--tab">{item.Hit}</td>
                        <td className="source--tab">
                            <a href={item.Source}>
                                {item.Source}
                            </a>&nbsp;&nbsp;
                            <ExternalLink color="#0BD7A4" />
                        </td>
                        <td className="status--tab">
                            <div className="svg--icon">
                                <MoreHorizontal color="#64748b" />
                            </div>
                        </td>
                    </tr>
                );
            })}
        </table>

    </div>
)