import fetchHelper, {errorChecker} from "./fetchHelpers"

class PlaceFacade {
  constructor() {
    this._data = "";
    this._errorMessage = "";
  }
  getPlaceses = (cb) => {
    this._errorMessage = "";
    this._messageFromServer = "";
    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
    const options = fetchHelper.makeOptions("GET", false);
    fetch('http://localhost:8084/seedMaven/api/place', options)
      .then((res) => {
        resFromFirstPromise = res;
        return res.json();
      }).then((data) => {
        errorChecker(resFromFirstPromise,data);
        if (cb) {
          cb(null, data)
        }
      }).catch(err => {
        console.log(JSON.stringify(err))
        if (cb) {
          cb({ err: fetchHelper.addJustErrorMessage(err) })
        }
      })
  }
}

let placeFacade = new PlaceFacade();

//Only for debugging
//window.userStore = userStore;
export default placeFacade;
