import { ActionConst } from 'react-native-router-flux';

const r = (state = {}, action) => {
  console.log(action);
  switch(action.type){
    case ActionConst.FOCUS:
      console.log(action);
      return {...state, scene:action.scene};
    default:
      return state;
  }    
}

export default r;


