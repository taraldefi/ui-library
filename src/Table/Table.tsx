// Generated with util/create-component.js
import React from 'react';
import {
  CheckSquare,
  Square,
  ExternalLink,
  MoreHorizontal,
  Printer,
} from 'react-feather';
import {
  applicationTableType,
  researchTableType,
  entityTableType,
  companyTableType,
  screeningTableType,
  personsTableType,
  signOffTableType,
  receiptTableType,
  repaymentTableType,
  overviewTableType,
} from './Table.types';
import './Table.scss';
import { ProgressBar, StatusWidget } from '../Widgets';

export const ReceiptTable: React.FC<receiptTableType> = ({
  receiptTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr className="title--row">
          {[
            'Transaction Date',
            'Amount',
            'Remaining Balance',
            'Payment Method',
            'Options',
          ].map((item, index) => {
            return (
              <th key={index} className="title--headder">
                {item}
              </th>
            );
          })}
        </tr>
        {receiptTableData.map((item, index) => {
          return (
            <tr key={index} className="table--content">
              <td className="app--table--items">{item.transactionDate}</td>
              <td className="app--table--items">{item.amount}</td>
              <td className="app--table--items">{item.remainingBalance}</td>
              <td className="app--table--items">{item.paymentMethod}</td>
              <td className="app--table--items">
                <a href={item.url} attributes-list download>
                  <Printer color="#65768D" />
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export const RepaymentTable: React.FC<repaymentTableType> = ({
  repaymentTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr className="title--row">
          {['Payment', 'Amount', 'Due Date', 'status'].map((item, index) => {
            return (
              <th key={index} className="title--headder">
                {item}
              </th>
            );
          })}
        </tr>
        {repaymentTableData.map((item, index) => {
          return (
            <tr key={index} className="table--content">
              <td className="app--table--items">{item.paymentId}</td>
              <td className="app--table--items">{item.amount}</td>
              <td className="app--table--items">{item.dueDate}</td>
              <td className="app--table--items">{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export const ApplicationTable: React.FC<applicationTableType> = ({
  applicationTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr className="title--row">
          {[
            'Application ID',
            'Product',
            'Date From',
            'Date To',
            'Importer ID',
            'Importer Name',
            'Status',
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
      </tbody>
    </table>
  </div>
);

export const EntityTable: React.FC<entityTableType> = ({ entityTableData }) => (
  <div className="table">
    <table>
      <tbody>
        <tr className="status--title">
          {['Title', 'Issuance Date', 'Maturity Date', 'Facility Amount'].map(
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
      </tbody>
    </table>
  </div>
);

export const CompanyTable: React.FC<companyTableType> = ({
  companyTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr className="status--title">
          {/* <div className="statusTitle"> */}
          {['Persons', 'Details', 'Source', 'Status'].map((item, index) => {
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
              <td className="persons--tab">{item.details}</td>
              <td className="source--tab">
                <a href={item.source}>{item.source}</a>&nbsp;&nbsp;
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
      </tbody>
    </table>
  </div>
);

export const ScreeningTable: React.FC<screeningTableType> = ({
  screeningTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr className="status--title">
          {/* <div className="statusTitle"> */}
          {['Persons', 'Hit', 'Source', 'Options'].map((item, index) => {
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
              <td className="hit--tab">{item.Hit}</td>
              <td className="source--tab">
                <a href={item.Source}>{item.Source}</a>&nbsp;&nbsp;
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
      </tbody>
    </table>
  </div>
);

export const PersonsTable: React.FC<personsTableType> = ({
  personsTableData,
}) => (
  <div className={'table'}>
    <table>
      <tbody>
        <tr className="status--title">
          {[
            'Persons',
            'Email',
            'Position',
            'Verification Status',
            'Status Verification',
            'Options',
          ].map((item, index) => {
            return <th key={index}>{item}</th>;
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
              <td>
                <MoreHorizontal color="#64748b" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export const ResearchTable: React.FC<researchTableType> = ({
  researchTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr className="status--title">
          {/* <div className="statusTitle"> */}
          {['Persons', 'Hit', 'Source', 'Options'].map((item, index) => {
            return <th key={index}>{item}</th>;
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
                <a href={item.Source}>{item.Source}</a>&nbsp;&nbsp;
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
      </tbody>
    </table>
  </div>
);

export const SignOffTable: React.FC<signOffTableType> = ({
  signOffTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr>
          {['Name', 'Position', 'Status', 'Status'].map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
        {signOffTableData.map((item, index) => {
          return (
            <tr key={index}>
              <td className="user--container">
                <img
                  className="images"
                  src={item.image}
                  key={index}
                  alt=""
                  width="32px"
                  height="32px"
                />
                <div className="flex--box">
                  <span>{item.name}</span>
                  <span>{item.email}</span>
                </div>
              </td>
              <td>{item.position}</td>
              <td>
                {item.statusSeen ? (
                  <div className="svg--icon">
                    <CheckSquare color="#0BD7A4" />
                    <span className="selected">Seen</span>
                  </div>
                ) : (
                  <div className="svg--icon">
                    <Square color="#CBD5E1" />
                    <span className="not--selected">Seen</span>
                  </div>
                )}
              </td>
              <td>
                {item.statusSigned ? (
                  <div className="svg--icon">
                    <CheckSquare color="#0BD7A4" />
                    <span className="selected">Signed</span>
                  </div>
                ) : (
                  <div className="svg--icon">
                    <Square color="#CBD5E1" />
                    <span className="not--selected">Signed</span>
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export const OverviewTable: React.FC<overviewTableType> = ({
  overviewTableData,
}) => (
  <div className="table">
    <table>
      <tbody>
        <tr>
          {['Process', 'Users', 'Progress', 'Status', 'Date'].map(
            (item, index) => {
              return <th key={index}>{item}</th>;
            }
          )}
        </tr>
        {overviewTableData.map((item, index) => {
          return (
            <tr key={index}>
              <td className="process--tab">{item.process}</td>
              <td className="image--container">
                {overviewTableData[index].users.map((item, index) => {
                  return (
                    <img
                      className="images"
                      src={item}
                      key={index}
                      alt=""
                      width={30}
                      height={30}
                    ></img>
                  );
                })}
              </td>
              <td>
                <ProgressBar
                  progress={item.progress}
                  color={'#04C1DE'}
                  showText={false}
                />
              </td>
              <td>
                <StatusWidget
                  type={item.status}
                  showIcon={false}
                ></StatusWidget>
              </td>

              <td className="date">{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
