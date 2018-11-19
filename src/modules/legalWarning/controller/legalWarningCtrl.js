import Controller from '../../../utils/controller';
/**This is the legal warning controller */
class legalWarningController extends Controller{
  
    /** render  */
    static render(text) {
      document.getElementById("page").innerHTML=text[0].content;
    }
}
export default legalWarningController;