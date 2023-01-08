import React from 'react';
import styles from './RegionList.module.css';
// import { Region } from '../types';

interface Region {
  id: string;
  name: string;
}

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
        <li className={styles.item} key={id} onClick={onClick}>
          {name}
        </li>
      );
    })
    .filter((region) => !!region);

  return (
    <div className={styles.container}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div>__testing__!!!</div>
      <ul className={styles.list}>{regionItems}</ul>
    </div>
  );
};
