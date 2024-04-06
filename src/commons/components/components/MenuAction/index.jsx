/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import "./style.scss";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuItemAction = ({ handleClick, title }) => {
  return (
    <>
      <Menu.Item>
        {({ active }) => (
          <div
            onClick={handleClick}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm cursor-pointer"
            )}
          >
            {title}
          </div>
        )}
      </Menu.Item>
    </>
  );
};

export default function MenuAction({ onDelete, onView, onEdit }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="three-dots">
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="item-wrapper">
          <div className="py-1">
            <MenuItemAction title="View" handleClick={onView} />
            <MenuItemAction title="Update" handleClick={onEdit} />
            <MenuItemAction title="Delete" handleClick={onDelete} />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
