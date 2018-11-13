import {template} from '../../../../src/modules/footer/view/footerView';

const rrss = {facebook:"paco", twitter:"perolo"};
const $ = require('jquery');

test('footer template working', () => {
    expect(template(rrss)).toMatch(/paco/);
    expect(template(rrss)).toMatch(/perolo/);
  });