"use client";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useState } from "react";
import ThankYouState from "./ThankYouState";

const InteractiveRating = () => {
  const [star, setStar] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClicked, setIsClicked] = useState<number | null>(null);
  const [isDisable, setIsDisable] = useState(true);

  const handleClick = (value: number) => {
    setStar(value);
    setIsClicked(value);
    setIsDisable(false);
  };
  const handleSubmit =  () => {
    // some code to send number of  star to backend
    
    setIsSubmitted(true);
  };

  useEffect(() => {
    console.log(star, isClicked);
  }, [star, isClicked]);
  const numberOfStar = [1, 2, 3, 4, 5];
  return (
    <>
      {isSubmitted ? (
        <ThankYouState star={star} />
      ) : (
        <div className="bg-DarkBlue max-w-[420px] p-6 md:px-8 rounded-2xl  flex flex-col gap-6">
          <Image
            src={"/star.svg"}
            alt="Icon star"
            width={40}
            height={40}
            className=""
          />

          <h1 className="text-white font-semibold text-title ">
            How did we do?
          </h1>
          <p className="text-paragraph text-lightGray opacity-95">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex gap-6 text-lightGray pb-8 ">
            {numberOfStar.map((value) => (
              <Button
                key={value}
                type="button"
                value={value}
                handleClick={() => handleClick(value)}
                isClicked={isClicked}
                className="flex items-center justify-center cursor-pointer hover:bg-white transition-all ease-in-out duration-200 bg-[#27302F] rounded-full size-10 md:size-14"
              />
            ))}
          </div>
          <Button
            type="submit"
            value="SUBMIT"
            isDisable={isDisable}
            className="bg-Orange rounded-3xl py-3  font-semibold opacity-95 text-VeryDarkBlue"
            handleClick={handleSubmit}
          />
        </div>
      )}
    </>
  );
};

export default InteractiveRating;
