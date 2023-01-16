import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RegionList } from './RegionList';

describe('Region List', () => {
  it('renders list with title', () => {
    const title = 'Region List';
    render(<RegionList title={title} regions={[{ id: '1', name: 'test'}]} />);
    expect(screen.getByText(new RegExp(title))).toBeDefined()
  });
});