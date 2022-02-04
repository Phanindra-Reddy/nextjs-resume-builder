import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { debounce } from "debounce";
import saveToLocalStorage from "../localStorage/saveToLocalStorage";
import { useWindowSize } from "react-use";

store.subscribe(
  debounce(() => {
    saveToLocalStorage(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }) {
  const windowSize = useWindowSize();
  console.log(windowSize);
  return (
    <Provider store={store}>
      {windowSize.width <= 960 ? (
          <div className="responsive">
            <h4>Website currently works only on Desktop view</h4>
          </div>
        ) : (
          <Component {...pageProps} />	
        )}
        {/* <Component {...pageProps} /> */}
    </Provider>
  );
}

export default MyApp;
