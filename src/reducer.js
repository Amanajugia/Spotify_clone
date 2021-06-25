export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE AFTER FINISH DEVELOPING
  // token:
  //   "BQALkqWtKcCkwgyHAnVE1CIGSQ27W3clG3jSiH1h1q40-g7YMp6xAs7t-c6GHt2Q5S98xFb4eYbt0ecN8hKEGptTLuA3woKoCZLRdfwx0KW_Q5N3jXggOlQ92n5RwgiCGY4m1oMay1Gc2Cd45I_DLO-Z7oFZ02IX__FOGOLPoS_bF_-tcf34",
};

const reducer = (state, action) => {
  console.log(action);
  // action are : type , [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
