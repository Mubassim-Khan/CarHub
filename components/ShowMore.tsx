"use client";

import { ShowMoreProps } from "@/types";
import { Component } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

class ShowMore extends Component<ShowMoreProps> {
  // Handles the navigation logic to update the page and query parameters
  handleNavigation = () => {
    const { pageNumber } = this.props;
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    const router = useRouter();
    router.push(newPathName, { scroll: false });
  };

  render() {
    const { isNext } = this.props;

    return (
      <div className="w-full gap-5 flex-center mt-10">
        {!isNext && (
          <CustomButton
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={this.handleNavigation}
          />
        )}
      </div>
    );
  }
}

export default ShowMore;
