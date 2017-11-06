const data = [
    {
        "id": 1,
        "title": "Super shitty house",
        "address": {
            "street": "bip",
            "zip":{ "zip":"2200",
            "city": "København N"}
        },
        "gps": {},
        "description": "Lorem Ipsum is simply dummy,",
        "rating": {
            "stars": 4,
            "amount": 2
        },
        "images": [
        	{"url": "https://vignette.wikia.nocookie.net/dunkeypedia/images/4/43/Shitty_house.jpg/revision/latest?"}
       ]
    },
    {
        "id": 2,
        "title": "House",
        "address": {
            "street": "Nørevang",
            "zip":{ "zip":"2200",
            "city": "København N"}
        },
        "gps": {},
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        "rating": {
            "stars": 1.5,
            "amount": 2
        },
        "images": [
        	{"url": "https://vignette.wikia.nocookie.net/dunkeypedia/images/4/43/Shitty_house.jpg/revision/latest?"}
       ]
    },
    {
        "id": 3,
        "title": "Super shitty house",
        "address": {
            "street": "bip",
            "zip":{ "zip":"2200",
            "city": "København N"}
        },
        "gps": {},
        "description": "Lorem Ipsum is simply dummy,",
        "rating": {
            "stars": 5,
            "amount": 2
        },
        "images": [
        	{"url": "https://vignette.wikia.nocookie.net/dunkeypedia/images/4/43/Shitty_house.jpg/revision/latest?"}
       ]
    }
    
];

class HousesMock {
    constructor() {
        this.data = data;
    }
}

export default new HousesMock();
