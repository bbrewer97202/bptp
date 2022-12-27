import React from 'react';

interface Region {
  id: string;
  name: string;
}

interface RegionListProps {
  regions: Region[];
}

const RegionList = (props: RegionListProps) => {
  if (!props) return null;
  const { regions = [] } = props;
  const regionItems = regions.map((region) => (
    <div key={region.id}>{region.name}</div>
  ));
  return (
    <div>
      <h3>Regions:</h3>
      {regionItems}
    </div>
  );
};

export default RegionList;
