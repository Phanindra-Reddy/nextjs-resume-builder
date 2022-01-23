import { store } from "react-notifications-component";

export const infoNotification = {
  title: "Info",
  message: "",
  type: "info",
  insert: "top",
  container: "bottom-right",
  animationIn: ["animated", "flipInY"],
  animationOut: ["animated", "bounceOut"],
  dismiss: {
    duration: 5000,
    onScreen: false,
    showIcon: true,
  },
};

export const info = (message, notification) => {
  store.addNotification({
    ...notification,
    message: message,
  });
};
