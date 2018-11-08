import HomeController from '../src/modules/home/controller/homeCtrl';
import LogoController from '../src/modules/logo/controller/logoCtrl';
import HeaderController from '../src/modules/header/controller/headerCtrl';
import FooterController from '../src/modules/footer/controller/footerCtrl';

jest.mock('../src/modules/home/controller/homeCtrl');
jest.mock('../src/modules/logo/controller/logoCtrl');
jest.mock('../src/modules/header/controller/headerCtrl');
jest.mock('../src/modules/footer/controller/footerCtrl');
beforeAll(()=>{
    HomeController.mockClear();
    LogoController.mockClear();
    HeaderController.mockClear();
    FooterController.mockClear();
})

test('We check if controllers are called', () => {
    HomeController.render();
    expect(HomeController.render).toHaveBeenCalledTimes(1);
    LogoController.render();
    expect(LogoController.render).toHaveBeenCalledTimes(1);
    HeaderController.render();
    expect(HeaderController.render).toHaveBeenCalledTimes(1);
    FooterController.render();
    expect(FooterController.render).toHaveBeenCalledTimes(1);
});