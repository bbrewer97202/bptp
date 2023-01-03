import React from 'react';
import './RegionList.css';
import { Region } from 'bptp-types';

interface RegionListProps {
  children: React.ReactNode | React.ReactNode[] | undefined | null;
  onSelect?: (id: string) => void;
  regions: Region[];
  title?: string;
}

const regionSort = (a:Region, b:Region) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

export const RegionList = (props: RegionListProps) => {
  if (!props) return null;

  const { onSelect, regions = [], title } = props;
  const regionItems = regions
    .sort(regionSort)
    .map((region) => {
      const { id, name } = region;
      if (!id || !name) return null;
      const onClick = () => {
        if (onSelect) onSelect(id);
      };
      return (
        <li className="regionlist-item" key={id} onClick={onClick}>
          {name}
        </li>
      );
    })
    .filter((region) => !!region);

  return (
    <div className="regionlist-container">
      {title && <h3 className="regionlist-title">{title}</h3>}
      <ul className="regionlist-list">{regionItems}</ul>
    </div>
  );
};
