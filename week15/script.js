const foods = [
    {
        name: "ข้าวมันไก่",
        desc: "ข้าวมันไก่ต้มพร้อมน้ำจิ้ม",
        price: "50-60 บาท",
        img: "ข้าวมันไก่.png"
    },
    {
        name: "ก๋วยเตี๋ยวเรือ",
        desc: "ก๋วยเตี๋ยวเรือน้ำตกเข้มข้น",
        price: "45-50 บาท",
        img: "ก๋วยเตี๋ยวเรือ.png"
    },
    {
        name: "ข้าวผัดกะเพรา",
        desc: "กะเพราหมูสับราดข้าว",
        price: "50 บาท",
        img: "ข้าวผัดกะเพรา.png"
    },
    {
        name: "ส้มตำไทย",
        desc: "ส้มตำไทยรสจัดจ้าน",
        price: "40-50 บาท",
        img: "ส้มตำไทย.png"
    },
    {
        name: "ต้มยำกุ้ง",
        desc: "ต้มยำกุ้งน้ำข้น",
        price: "80-100 บาท",
        img: "ต้มยำกุ้ง.png"
    }
];

function randomFood() {
    let index = Math.floor(Math.random() * foods.length);
    let result = foods[index];

    document.getElementById("food-name").innerText = result.name;
    document.getElementById("food-desc").innerText = result.desc;
    document.getElementById("food-price").innerText = "ราคา: " + result.price;
    document.getElementById("food-img").src = result.img;
}

window.onload = randomFood;