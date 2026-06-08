import MenuItemComponent from "./MenuItemComponent";
import type { MenuItem } from "../types/MenuItem";

export default function MenuList({menu}: {menu: MenuItem[]}){
    return (
        <ul>
            {menu.map((item, index) => {
                return <MenuItemComponent key={index} item={item}/>
            })}
        </ul>
    );
}