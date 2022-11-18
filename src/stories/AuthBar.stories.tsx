import { Meta, Story } from "@storybook/react";
import { AuthBar } from "../components/AuthBar";

export default {
    title: 'Components/AuthBar',
    component: AuthBar
} as Meta;

const Template: Story = () => <AuthBar />;
export const Example = Template.bind({})