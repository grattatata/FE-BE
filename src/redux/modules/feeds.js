const ADD_FEED = "ADD_FEED";

export const addFeed = (payload) => {
  return { type: ADD_FEED, payload };
};

const initialState = {
  feeds: [
    {
      id: 1,
      title: "메인 피드 1",
    },
    {
      id: 2,
      title: "메인 피드 2",
    },
  ],
};

const feeds = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEED:
      return {
        ...state,
        feeds: [...state.feeds, action.payload],
      };
    default:
      return state;
  }
};

export default feeds;
