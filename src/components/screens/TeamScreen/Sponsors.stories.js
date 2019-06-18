import React from 'react';
import { storiesOf } from '@storybook/react';
import Sponsors from './Sponsors';

storiesOf('Screens|TeamScreen/Sponsors', module)
  .addParameters({ component: Sponsors })
  .add('default', () => <Sponsors />);
