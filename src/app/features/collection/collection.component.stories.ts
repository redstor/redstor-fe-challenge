import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CollectionComponent } from './collection.component';

import { within } from '@storybook/testing-library';
import { RouterTestingModule } from '@angular/router/testing';
import { StorybookTranslateModule } from '@app/storybook/storybook-translate.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

const meta: Meta<CollectionComponent> = {
  component: CollectionComponent,
  title: 'CollectionComponent',
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, StorybookTranslateModule, HttpClientModule, TranslateModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<CollectionComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/collection works!/gi)).toBeTruthy();
  }
};
