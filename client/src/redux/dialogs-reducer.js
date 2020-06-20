const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

const initialState = {
  dialogs: [
    { id: 1, name: "Anatol" },
    { id: 2, name: "Galina" },
    { id: 3, name: "Julia" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 5, message: body });
      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
