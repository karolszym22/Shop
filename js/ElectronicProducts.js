     let laptops = [
    {

        producer: "Lenovo",
        description: "Lenovo IdeaPad Gaming 3 15ARH05 15,6 AMD Ryzen 5 4600H - 8GB RAM - 512GB Dysk - GTX1650 Grafika - Win10",
        graphicsCard: "nVidia® GeForce GTX 1650 + AMD Radeon™ Graphics",
        ram: "8gb",
        processor: "AMD Ryzen™ 5 4600H 3,0 - 4,0 GHz",
        operatingSystem: "Windows 10 Home Edition",
        discount: false,
        memory: "512gb SSD",
        screen: "15,6 cala, 1920 x 1080 pikseli 60 Hz",
        quantity: 15,
        sold: 5,
        price: 3249.99,
        productImage: "./images/lenovo.jpg",
        productImageZoom: "./images/lenovo.jpg",
        productId: "laptop1",
        name: "Lenovo IdeaPad Gaming",
        discountPrice: 2999.99
        
    },
    {
        
        producer: "Lenovo",
        description: "Lenovo IdeaPad Gaming 3 15ARH05 15,6 120Hz AMD Ryzen 5 4600H - 16GB RAM - 512GB Dysk - GTX1650Ti Grafika - Win10",
        graphicsCard: "nVidia® GeForce GTX 1650 Ti + AMD Radeon™ Graphics",
        ram: "16gb",
        processor: "AMD Ryzen™ 5 4600H 3,0 - 4,0 GHz",
        operatingSystem: "Windows 10 Home Edition",
        price: 3699.99,
        discount: false,
        memory: "512gb SSD",
        screen: " 15,6 cala, 1920 x 1080 pikseli 120 Hz",
        quantity: 19,
        sold: 1,
        name: "Lenovo IdeaPad Gaming 3",
        productImage: "./images/lenovo.jpg",
        productImageZoom: "./images/lenovo.jpg",
        productId: "laptop2",
        discountPrice: 3299.99
    },
    {
        producer: "ASUS",
        description: "ASUS X509JA-EJ073T 15,6 Intel® Core™ i3-1005G1 - 8GB RAM - 512GB Dysk - Win10",
        graphicsCard: " Intel® UHD Graphics",
        ram: "8gb",
        processor: " Intel® Core™ i3 10gen 1005G1 1,2 - 3,4 GHz",
        operatingSystem: "Windows 10 Home Edition",
        price: 2599.99,
        discount: false,
        memory: "512gb SSD",
        screen: "15,6 cala, 1920 x 1080 pikseli",
        quantity: 16,
        sold: 4,
        name: "ASUS X509JA-EJ073T",
        productImage: "./images/asus.jpg",
        productImageZoom: "./images/asusZoom.jpg",
        productId: "laptop3",
        discountPrice: 2199.99
    },
    {
        producer: "Acer",
        description: "Acer Nitro 5 15,6 Intel® Core™ i5-9300H - 8GB RAM - 512GB SSD Dysk - GTX1650 Grafika - Win10",
        graphicsCard: "nVidia® GeForce GTX1650 + Intel UHD Graphics 630",
        ram: "8gb",
        processor: "Intel® Core™ i5 9gen 9300H 2,4 - 4,1 GHz",
        operatingSystem: "Windows 10 Home Edition",
        price: 3899.99,
        discount: false,
        memory: "512 GB SSD",
        screen: "15,6 cala, 1920 x 1080 pikseli",
        quantity: 14,
        sold: 6,
        name: "Acer Nitro 5",
        productImage: "./images/acer.jpg",
        productImageZoom: "./images/acer.jpg",
        productId: "laptop4",
        discountPrice: 3299.99
    },
    {
        producer: "Acer",
        description: "Acer Nitro 5 15,6 AMD Ryzen 7 4800H - 8GB RAM - 512GB SSD Dysk - GTX1650Ti Grafika - Win10",
        graphicsCard: "nVidia® GeForce GTX1650Ti + Intel UHD Graphics 630",
        ram: "16gb",
        processor: "AMD Ryzen 7 4800H 2,4 - 4,1 GHz",
        operatingSystem: "Windows 10 Home Edition",
        price: 4499.99,
        discount: false,
        memory: "512 GB SSD",
        screen: "15,6 cala, 1920 x 1080 pikseli",
        quantity: 10,
        sold: 10,
        productImage: "./images/acer.jpg",
        productImageZoom: "./images/acer.jpg",
        productId: "laptop5",
        name: "Acer Nitro 5 V2",
        discountPrice: 3899.99
    },

]

let shavers = [
    {
        name: "Golarka BRAUN 300 ",
        description: "Potrójny system golący , Potrójny system golący z folią Smart",
        powerSupply: "Akumulatorowe",
        price: 249.99,
        discount: false,
        quantity: 9,
        sold: 6,
        producer: "BrAun",
        productImage:"./images/braun.jpg",
        productImageZoom: "./images/asusZoom.jpg",
        productId: "shaver1",
        discountPrice: 199.99
        
        
    },
    {
        name: "Golarka PHILIPS OneBlade Pro",
        description: "Ruchoma głowica, Na mokro , Na sucho",
        powerSupply: "Akumulatorowo-sieciowe",
        price: 199.99,
        discount: false,
        quantity: 9,
        sold: 6,
        producer: "PHILIPS",
        productImage:"./images/philips.jpg",
        productImageZoom: "./images/asusZoom.jpg",
        productId: "shaver2",
        discountPrice: 119.99
        
    }
    

    ]

export default {laptops,shavers};
