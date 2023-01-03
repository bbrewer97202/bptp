import type { Meta, StoryObj } from '@storybook/react';
import { RegionEditor } from 'bptp-ui';

const meta: Meta<typeof RegionEditor> = {
  title: 'Region Editor',
  component: RegionEditor,
};

export default meta;

type Story = StoryObj<typeof RegionEditor>;
export const CreateRegion: Story = {
  args: {
  }
};

export const EditRegion: Story = {
  args: {
    region: {
      name: "North Cascades",
      id: '12434'
    }
  }
};

