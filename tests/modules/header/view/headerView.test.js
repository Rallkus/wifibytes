import {template} from '../../../../src/modules/header/view/headerView';


test('header template working', () => {
    expect(template()).toMatch(/Home/);
    expect(template()).toMatch(/Contact/);
  });