import { moduleMetadata, type Meta, StoryObj } from '@storybook/angular';
import { HomeComponent } from './home.component';

import { within } from '@storybook/testing-library';
import { ReducerManager, Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StorybookTranslateModule } from '@app/storybook/storybook-translate.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home.module';

const meta: Meta<HomeComponent> = {
  component: HomeComponent,
  title: 'HomeComponent',
  decorators: [
    moduleMetadata({
      imports: [
        HomeModule,
        CommonModule,
        MatProgressBarModule,
        MatCardModule,
        RouterTestingModule,
        MatPaginatorModule,
        StorybookTranslateModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
    })
  ]
};
export default meta;
type Story = StoryObj<HomeComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home works!/gi)).toBeTruthy();
  }
};
