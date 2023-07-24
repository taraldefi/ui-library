import React from 'react';

export interface EntityDataType {
  id: number;
  image: string;
  title: string;
  registrationNo: number;
  products: number;
  applications: number;
}
export interface EntityType {
  entityData: EntityDataType;
  onClick?: () => void;
}
