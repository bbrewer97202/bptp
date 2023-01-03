import React, { useState } from 'react';
import './RegionEditor.css';

interface Region {
  id: string;
  name: string;
}

interface RegionEditorProps {
  children: React.ReactNode | React.ReactNode[] | undefined | null;
  region: Region;
}

export const RegionEditor = (props: RegionEditorProps) => {
  const region = props?.region || {};
  const { id, name } = region;
  const [regionName, setRegionName] = useState(name);
  const isEditor = !!id;
  const submitLabel = isEditor ? 'Save Changes': 'Create Region';

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegionName(e.target.value);
  }

  return (
    <div className="regionEditor-container">
      <h3 className="regionEditor-title">Region Editor</h3>
      <form>
        <label htmlFor='name'>Region Name</label>
        <input type="text" id="name" value={regionName} onChange={onNameChange} />
        <input type="button" value={submitLabel} />
      </form>
    </div>
  );
};
