import FooterController from '../../../../src/modules/footer/controller/footerCtrl';

jest.mock('../../../../src/modules/footer/controller/footerCtrl');
beforeAll(()=>{
    FooterController.mockClear();
})

test('We check if FooterController is called', () => {
    FooterController.render();
    expect(FooterController.render).toHaveBeenCalledTimes(1);
});