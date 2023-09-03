import React from "react";
import Modal from "../PureModal";

type MenuModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};
const MenuModal = ({ open, onClose, children, className }: MenuModalProps) => {
  return (
    <Modal
      maskClassName="top-16 bg-transparent"
      className={className}
      open={open}
      content={children}
      onClose={onClose}
    />
  );
};

export default MenuModal;
