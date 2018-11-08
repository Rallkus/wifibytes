import {template} from '../src/modules/logo/view/logoView';

test('Sets the logo', () => {
    expect(template("dsa")).toMatch(/dsa/);
  });