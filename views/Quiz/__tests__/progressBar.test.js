import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ProgressBar from '../components/ProgressBar';



it('renders correctly', () => {
  renderer.create(<ProgressBar progress={"35%"}/>);
});

