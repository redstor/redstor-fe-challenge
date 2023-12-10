import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

import { within } from '@storybook/testing-library';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { StorybookTranslateModule } from './storybook/storybook-translate.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const meta: Meta<AppComponent> = {
  component: AppComponent,
  title: 'AppComponent',
  decorators: [
    moduleMetadata({
      imports: [StorybookTranslateModule, HttpClientModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/app works!/gi)).toBeTruthy();
  }
};
