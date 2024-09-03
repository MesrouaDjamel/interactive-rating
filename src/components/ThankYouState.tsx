import Image from "next/image";

const ThankYouState = ({star}:{star:number}) => {
  return (
    <div className="bg-DarkBlue max-w-[420px] p-6 md:px-8 rounded-2xl  flex flex-col items-center gap-6">
      <Image
        src={"/illustration-thank-you.svg"}
        alt="Icon illustration thank you "
        width={168}
        height={62}
        className="pt-4"
      />
      <p className="text-Orange bg-[#27302F] px-3 py-2 tracking-widest rounded-full">
        You selected {star} out of 5
      </p>
      <h1 className="text-white font-semibold text-title ">Thank You!</h1>
      <p className="text-paragraph text-lightGray text-center opacity-98">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouState;
