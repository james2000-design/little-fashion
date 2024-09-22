import Navbar from "./navbar";
import Footer from "./footer";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Faqs = () => {
  return (
    <>
      <Navbar />
      <main className="pt-26 overflow-hidden flex flex-col min-h-screen">
        <div className=" px-10 py-[6rem] w-full flex bg-[#f0f8ff]">
          <h1 className="text-6xl font-extrabold pb-5 capitalize">
            <span className="text-[#FF4400]">Your favorite questions</span>
            <br />
            <span>and our answers to them</span>
          </h1>
        </div>

        <div className="  py-[5rem] px-5 mx-auto">
          <div className="text-lg font-semibold mb-4">General Info.</div>
          <Accordion allowToggle>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton className="border-b-4 border-gray-300">
                  <Box as="span" flex="1" textAlign="left" className="pb-8">
                    What is this Little Fashion?
                  </Box>
                  <AccordionIcon className={`text-[2rem] font-bold`} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-4" pb={4}>
                Little Fashion is free Bootstrap 5 website template for
                everyone. There are 8 HTML pages included in this template and
                you can expand more pages as you need. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton className="border-b-4 border-gray-300">
                  <Box as="span" flex="1" textAlign="left" className="pb-8">
                    What is Tooplate Website?
                  </Box>
                  <AccordionIcon className={`text-[2rem] font-bold`} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-4" pb={4}>
                Tooplate is a great website to download free HTML website
                templates for your business or personal use. Tooplate website
                has been online for almost 8 years now. Thank you for visiting
                our website.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton
                  _expanded={{ bg: "gray.100" }}
                  className="border-b-4 border-gray-300"
                >
                  <Box as="span" flex="1" textAlign="left" className="pb-8">
                    How do I support your website?
                  </Box>
                  <AccordionIcon className={`text-[2rem] font-bold`} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-4" pb={4}>
                You can support our Tooplate website by sharing it to your
                friends or colleagues on the web or social media.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Faqs;
