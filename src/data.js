let location = ["Ukraine", "UK", "USA", "Canada", "Japan", "Germany", "France", "Montenegro", "Australia", "Kenya"]


export default [
    {
        id: 1,
        img: "https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",    
        raiting: 4.7,
        reviews: 29,
        country: location[Math.floor(Math.random()*location.length)],
        info: "Zaza Jimbs",
        price: 111,
        available: 2,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/17038848/pexels-photo-17038848/free-photo-of-river-flowing-in-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        raiting: 3.2,
        reviews: 139,
        country: location[Math.floor(Math.random()*location.length)],
        info: "Zara Viva",
        price: 211,
        available: 3,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        raiting: 3.2,
        reviews: 139,
        country: location[Math.floor(Math.random()*location.length)],
        info: "Zara Viva",
        price: 132,
        available: 0,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        raiting: 3.2,
        reviews: 139,
        country: location[Math.floor(Math.random()*location.length)],
        info: "Zara Viva",
        price: 411,
        available: 0,
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        raiting: 4.3,
        reviews: 139,
        country: location[Math.floor(Math.random()*location.length)],
        info: "Vaza Vita",
        price: 231,
        available: 1,
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        raiting: 4.0,
        reviews: 439,
        country: location[Math.floor(Math.random()*location.length)],
        info: "Kava Black",
        price: 222,
        available: 2,
    }
]