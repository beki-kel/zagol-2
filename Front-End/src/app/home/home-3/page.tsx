import Header from "@/app/(client-components)/(Header)/Header";
import SectionDowloadApp from "../SectionDowloadApp";

const PageHome2Mobile = () => {
  return (
    <div className="relative">
      <Header className="h-12 sticky z-50" />
      <main className=" relative overflow-hidden">
        <div className="container relative ">
          <SectionDowloadApp />
        </div>
      </main>
    </div>
  );
};

export default PageHome2Mobile;
