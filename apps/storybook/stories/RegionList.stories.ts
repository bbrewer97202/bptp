import type { Meta, StoryObj } from '@storybook/react';
import { RegionList } from 'bptp-ui';

const meta: Meta<typeof RegionList> = {
  title: 'Region List',
  component: RegionList,
  args: {
    regions: [
      { id: '1', name: 'Goat Rocks' },
      { id: '2', name: 'Dark Divide' },
      { id: '3', name: 'Mt. Margaret Backcountry' },
      { id: '5', name: 'Old Cascades' },
      { id: '6', name: 'Diamond Peak Area' },
      { id: '4', name: 'Mt. Hood' },
    ],
  },
  argTypes: { onSelect: { action: 'selected' } },
};

export default meta;

type Story = StoryObj<typeof RegionList>;
export const Default: Story = {};

export const WithTitle: Story = {
  args: {
    title: "Optional Title..."
  }
};
