import type { MenuItem } from "../types/MenuItem";
import "./MenuItemComponent.css"

export default function MenuItemComponent({item}: {item: MenuItem}){
    const {ingredients, title, price, category} = item;
    return (
    <li className="menu-item">
        <h2 className="title">{title}</h2>
        <p className="category">{category}</p>
        <p className="ingredients">{ingredients}</p>
        <p className="price">Pris: {price},-</p>
    </li>
    );
}