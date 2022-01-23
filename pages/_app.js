import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { debounce } from "debounce";
import saveToLocalStorage from "../localStorage/saveToLocalStorage";

store.subscribe(
  debounce(() => {
    saveToLocalStorage(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
