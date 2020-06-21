import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";
import StoreContext from "../../context/StoreContext";

const DialogsPageContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = props.store.getState().dialogsPage;

        const onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyActionCreator(body));
        };

        return (
          <DialogsPage
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsPageContainer;
