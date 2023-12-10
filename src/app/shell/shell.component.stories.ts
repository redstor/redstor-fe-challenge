import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ShellComponent } from './shell.component';

import { within } from '@storybook/testing-library';

import { StorybookTranslateModule } from '@app/storybook/storybook-translate.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

const meta: Meta<ShellComponent> = {
  component: ShellComponent,
  title: 'ShellComponent',
  decorators: [
    moduleMetadata({
      imports: [StorybookTranslateModule, HttpClientModule, TranslateModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<ShellComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/shell works!/gi)).toBeTruthy();
  }
};
