const data = [
    {
        "id": 1,
        "address": {},
        "gps": {},
        "description": "Super shitty house",
        "rating": {
            "stars": 5,
            "amount": 2
        },
        "img": {
            1: {
                "url": "https://vignette.wikia.nocookie.net/dunkeypedia/images/4/43/Shitty_house.jpg/revision/latest?cb=20130412201251"
            },
            2: {
                "url": "https://g.rrrather.com/img/q/129969b.jpg"
            }
        }
    },
    {
        "id": 2,
        "address": {},
        "gps": {},
        "description": "House",
        "rating": {
            "stars": 5,
            "amount": 2
        },
        "img": {
            1: {
                "url": "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            }
        }
    },
];

class housesMock {
    constructor() {
        this.observers = [];
    }
    addObserver = (observer) => { this.observers.push(observer); this.loadData(); };
    loadData = () => {
        this.observers.forEach(obs => obs.notify(data));
    };
}
export default new housesMock();
