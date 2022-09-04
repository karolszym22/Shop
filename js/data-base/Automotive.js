let motors = [
    {

        producer: "Kawasaki",
        description: " Motocykl  serwisowany, z minimalnym przebiegiem 3500 km",
        engineType: "Czterosuwowy",
        gearbox: "Manualna",
        fuelType: "Benzyna",
        discount: false,
        quantity: 12,
        sold: 2,
        price: 13249.99,
        productImage: "./images/motor2.jpg",
        productImageZoom: "./images/motor2Zoom.jpg",
        productId: "motor2",
        name: "Kawasaki Ninja 300 ABS",
        discountPrice: 12999.99,
        productType: "motors"

    },
    {
        
        producer: "Kawasaki",
        description: " Kawasaki er-6n z rocznika 2016",
        engineType: "Czterosuwowy",
        gearbox: "Automatyczna",
        fuelType: "Benzyna",
        discount: false,
        price: 13699.99,
        quantity: 10,
        sold: 2,
        name: "Kawasaki ER",
        productImage: "./images/motor1.jpg",
        productImageZoom: "./images/motor1Zoom.jpg",
        productId: "motor1",
        discountPrice: 13299.99,
        productType: "motors"
    },

]
let cars = [
    {
         
        producer: "BMW",
        description: " Samochód cechujący się ABS - systemem zapobiegającym blokowaniu się kół podczas hamowania oraz kamerą cofania",
        engineSize: "1 991 cm3",
        gearbox: "Automatyczna",
        fuelType: "Benzyna",
        discount: false,
        price: 54699.99,
        quantity: 10,
        sold: 5,
        name: "BMW Seria 3 328i XDrive",
        productImage: "./images/car1.jpg",
        productImageZoom: "./images/car1Zoom.jpg",
        productId: "car1",
        discountPrice: 43299.99,
        productType: "cars"


    },
]

export default {motors,cars};