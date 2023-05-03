// Generated with util/create-component.js
import React from 'react';
import { EntityType } from './Entity.types';
import './Entity.scss';

export function Entity({ entityData, modal }: EntityType) {
  return (
    <div className={'entityWrapper'}>
      <div className="entityTopContent">
        <div className="entityImageContainer">
          <img
            className="images"
            src={entityData.image}
            alt=""
            width="100%"
            height="100%"
          ></img>
        </div>
        <div className="entityTitleBox">
          <span>{entityData.title}</span>
          <span>55-NB</span>
        </div>
        <div className="optionsContainer">{modal}</div>
      </div>
      <div className="bottomContent">
        <div className="registrationContainer">
          <span>REGISTRATION NUMBER</span>
          <span>{entityData.registrationNo}</span>
        </div>
        <div className="productContainer">
          <span>PRODUCTS</span>
          <span>{entityData.products}</span>
        </div>
        <div className="applicationsContainer">
          <span>APPLICATIONS</span>
          <span>{entityData.applications}</span>
        </div>
      </div>
    </div>
  );
}
