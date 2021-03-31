import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

let lastId = 0; // 0-indexed

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [...state.wishList, 
          { 
            id: lastId++, 
            itemDescription: action.payload.itemDescription,
            resolved: false
          }],
      };
    case DELETE_ITEM:
      return {
        wishList: [...state.wishList.filter(item => item.id !== action.payload.id)],
      };
    default:
      return {
        wishList: state.wishList,
      };
  }
};

export default reducer;