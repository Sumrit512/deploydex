/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement, memo } from "react";
import { Flex } from "../Box";
import { AtomBox } from "@pancakeswap/ui/components/AtomBox";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemsProps } from "./types";
import StyledMenuItem, { StyledMenuItemContainer } from "../MenuItem/styles";


const MenuItems: React.FC<React.PropsWithChildren<MenuItemsProps>> = ({
  items = [],
  activeItem,
  activeSubItem,
  ...props
}) => {


  const redirectToExchange = () => {
    window.open( "https://finalcex-b3z5.vercel.app/" , "_blank")
  }

 
  return (
    <Flex {...props}>
      {items.map(({ label, items: menuItems = [], href, icon, disabled }) => {
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href };
        const Icon = icon;
        return (
          <DropdownMenu
            key={`${label}#${href}`}
            items={menuItems}
            py={1}
            activeItem={activeSubItem}
            isDisabled={disabled}
          >
            <MenuItem {...linkProps} isActive={isActive} statusColor={statusColor} isDisabled={disabled}>
              {label || (icon && createElement(Icon as any, { color: isActive ? "secondary" : "textSubtle" }))}
            </MenuItem>
          </DropdownMenu>
        );
      })}
      <AtomBox mt="1" onClick={redirectToExchange} style={{
        "cursor" : "pointer"
      }}>
      <StyledMenuItemContainer $isActive={false} $variant="default">
      <StyledMenuItem
        $isActive={false}
        $isDisabled={false}
        $variant="default"
        $statusColor="gradientBubblegum"
        {...props}
      >
        Exchange
      </StyledMenuItem>
    </StyledMenuItemContainer>
      </AtomBox>
       
    </Flex>
  );
};

export default memo(MenuItems);
