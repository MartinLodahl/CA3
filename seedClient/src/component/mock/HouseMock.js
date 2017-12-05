const data = [
    {
        "id": 1,
        "title": "Super shitty house",
        "address": {},
        "gps": {},
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
        "title": "House",
        "address": {},
        "gps": {},
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        "rating": {
            "stars": 5,
            "amount": 2
        },
        "img": {
            1: {
                "url": "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            }
        }
    }
];

class houseMock {
    constructor() {
        this.data = data;
    }
}

export default new houseMock();
