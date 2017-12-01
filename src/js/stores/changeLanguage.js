import Reflux from 'reflux';
import Actions from '../actions';

export default Reflux.createStore({

	listenables: [Actions],
    onChangeLanguage(language){
        this.trigger(language);
    }
});
