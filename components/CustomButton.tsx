"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React, { Component } from "react";

class CustomButton extends Component<CustomButtonProps> {
  render() {
    const {
      title,
      containerStyles,
      handleClick,
      btnType,
      textStyles,
      rightIcon,
    } = this.props;

    return (
      <button
        disabled={false}
        type={btnType || "button"} // Use btnType or default to 'button'
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>

        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="arrow-left"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    );
  }
}

export default CustomButton;
