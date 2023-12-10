import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { PhotoComponent } from './photo.component';

import { within } from '@storybook/testing-library';
import { RouterTestingModule } from '@angular/router/testing';
import { StorybookTranslateModule } from '@app/storybook/storybook-translate.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

const meta: Meta<PhotoComponent> = {
  component: PhotoComponent,
  title: 'PhotoComponent',
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, StorybookTranslateModule, HttpClientModule, TranslateModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<PhotoComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/photo works!/gi)).toBeTruthy();
  }
};
