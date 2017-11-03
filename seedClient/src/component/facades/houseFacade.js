import fetchHelper, { errorChecker } from "./fetchHelpers"
const URL = require("../../../package.json").serverURL;

class HouseFacade {
    constructor() {
        this._data = "";
        this._errorMessage = "";
    }

    submitData = (cb) => {
        this._errorMessage = "";
        this._messageFromServer = "";
        let resFromFirstPromise = null;  //Pass on response the "second" promise so we can read errors from server
        const options = fetchHelper.makeOptions("POST", true);
        fetch(URL + "api/registerPlace/file", options)
            .then((res) => {
                resFromFirstPromise = res;
                return res.json();
            }).then((data) => {
                errorChecker(resFromFirstPromise, data);
                if (cb) {
                    cb(null, data.message)
                }
            }).catch(err => {
                console.log(JSON.stringify(err))
                if (cb) {
                    cb({ err: fetchHelper.addJustErrorMessage(err) })
                }
            })
    }
}

let houseFacade = new HouseFacade();

export default HouseFacade;