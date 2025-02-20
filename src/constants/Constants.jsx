import CartImg from "../assets/icons8-cart-96.png"
import Cross from "../assets/icons8-multiply-96.png"
import EyeOpen from "../assets/eye-svgrepo-com.svg"
import EyeClose from "../assets/eye-off-svgrepo-com.svg"
import Momo from "../assets/Foodimg/momo.jpg"
import Chowmein from "../assets/Foodimg/chowmein.jpg"
import Thukpa from "../assets/Foodimg/thukpa.png"
import DaalBhat from "../assets/Foodimg/daalbhat.webp"
import SelRoti from "../assets/Foodimg/selroti.webp"
import Samosa from "../assets/Foodimg/samosa.png"
import PaneerTikka from "../assets/Foodimg/paneertikka.jpg"
import ButterChicken from "../assets/Foodimg/butterchicken.jpg"

import plus from "../assets/addition.svg"
import minus from "../assets/subtract.svg"
import bin from "../assets/delete.png" 


export const icons = {
    cart : CartImg,
    Cross : Cross,
    EyeOpen : EyeOpen,
    EyeClose : EyeClose,
    plus : plus,
    minus : minus,
    delete : bin,
}


export const cardContent = [
  {
    id: 1,
    name: "Momo",
    price: 150,
    desc: "Momo is a Nepalese delicacy filled with mashed meat or veggies and wrapped with dough.",
    bgimg : Momo,
  },
  {
    id: 2,
    name: "Chow Mein",
    price: 80,
    desc: "Chow Mein is a stir-fried noodle dish with vegetables and your choice of meat or tofu.",
    bgimg : Chowmein,
  },
  {
    id: 3,
    name: "Thukpa",
    price: 100,
    desc: "Thukpa is a popular Tibetan noodle soup, often served with vegetables and chicken or beef.",
    bgimg : Thukpa,
  },
  {
    id: 4,
    name: "Dal Bhat",
    price: 120,
    desc: "Dal Bhat is a traditional Nepalese meal consisting of steamed rice and lentil soup, served with vegetables and pickles.",
    bgimg : DaalBhat,
  },
  {
    id: 5,
    name: "Sel Roti",
    price: 40,
    desc: "Sel Roti is a traditional Nepalese fried rice flour doughnut, crispy on the outside and soft inside.",
    bgimg : SelRoti,
  },
  {
    id: 6,
    name: "Samosa",
    price: 30,
    desc: "Samosa is a fried or baked pastry filled with spiced potatoes, peas, or lentils, popular as a snack.",
    bgimg : Samosa,
  },
  {
    id: 7,
    name: "Paneer Tikka",
    price: 150,
    desc: "Paneer Tikka is a marinated and grilled Indian cottage cheese dish, served with chutney.",
    bgimg : PaneerTikka,
  },
  {
    id: 8,
    name: "Butter Chicken",
    price: 180,
    desc: "Butter Chicken is a rich, creamy Indian dish with tender chicken cooked in a spiced tomato and butter sauce.",
    bgimg : ButterChicken,
  },
];
