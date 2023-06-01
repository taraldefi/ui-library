// Generated with util/create-component.js
import React from 'react';

import {
  SmallLoanCardProps,
  LargeLoanCardProps,
  LoanCardTypes,
} from './LoanCard.types';

import './LoanCard.scss';

const rightContainer = (type: LoanCardTypes) => {
  switch (type.toUpperCase()) {
    case 'INTEREST_RATE':
      return <span className="right--container">Interest Rate</span>;
    case 'INTEREST_ACCRUED':
      return (
        <div className="right--container">
          <span>Interest Accrued</span>
          <span>(USD-StableCoin)</span>
        </div>
      );
    case 'TOTAL_REPAYMENT':
      return (
        <div className="right--container">
          <span>Total Repayments</span>
          <span>(USD-StableCoin)</span>
        </div>
      );
    case 'DUE_DATE':
      return <span className="right--container">Next Instalment Due Date</span>;
    default:
      return <></>;
  }
};

export const SmallLoanCard: React.FC<SmallLoanCardProps> = ({
  type,
  value,
}) => (
  <div data-testid="LoanCard" className="small--loan--card">
    <span className="left--container">{value}</span>
    {rightContainer(type)}
  </div>
);

export const LargeLoanCard: React.FC<LargeLoanCardProps> = ({
  type,
  value,
}) => (
  <div data-testid="LoanCard" className="large--loan--card">
    <div className="loan--card--container">
      <span>{value}</span>
      <p>USD-Stablecoin</p>
    </div>
    <span>{type == 'LOAN_AMT' ? 'Loan Amount' : 'Outstanding Balance'}</span>
  </div>
);
