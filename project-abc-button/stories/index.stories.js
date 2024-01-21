import { html } from 'lit';
import '../project-abc-button.js';

export default {
  title: 'ProjectAbcButton',
  component: 'project-abc-button',
  argTypes: {
    buttonName: { control: 'text' },
    enabled: { control: 'boolean' },
    eventName: { control: 'text' },
    label: { control: 'text' },
  },
};

function Template({
  buttonName = 'my-button',
  label = 'My Button',
  enabled = false,
  eventName = 'clicker',
  slot,
}) {
  return html`
    <project-abc-button
      .label=${label}
      .enabled=${enabled}
      .eventName=${eventName}
      .buttonName=${buttonName}
    >
      ${slot}
    </project-abc-button>
  `;
}

export const Regular = Template.bind({});

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: 'My header',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
