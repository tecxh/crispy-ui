import { Meta, Story } from '@storybook/react';


import { AsyncButton } from "../components/AsyncButton";

export default {
    title: 'Components/AsyncButton',
    component: AsyncButton,
} as Meta

const Template: Story = () => <AsyncButton />

export const Example = Template.bind({});