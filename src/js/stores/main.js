import Reflux from 'reflux';
import Actions from '../actions';

export default Reflux.createStore({

	listenables: [Actions],

    onHideLeft (hideLeft) {
        let isHideLeft = hideLeft == true ? true : false;
        this.trigger({isHideLeft: isHideLeft});
    }
});
