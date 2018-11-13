import HeaderController from '../../../../src/modules/header/controller/headerCtrl';

jest.mock('../../../../src/modules/header/controller/headerCtrl');
beforeAll(()=>{
    HeaderController.mockClear();
})

test('We check if HeaderController is called', () => {
    HeaderController.render();
    expect(HeaderController.render).toHaveBeenCalledTimes(1);
});