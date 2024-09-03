import InteractiveRating from "@/components/InteractiveRating";
import ThankYouState from "@/components/ThankYouState";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 gap-2 items-center justify-center bg-VeryDarkBlue">
      <InteractiveRating />
      {/* <ThankYouState/> */}
    </main>
  );
}
