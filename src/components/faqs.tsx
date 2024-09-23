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
      <main className="pt-[6rem] min-h-screen  ">
        <div className=" px-10 pt-[8rem] w-full flex bg-[#f0f8ff]">
          <h1 className="text-6xl font-extrabold pb-5 capitalize">
            <span className="text-[#FF4400]">Your favorite questions</span>
            <br />
            <span>and our answers to them</span>
          </h1>
        </div>

        <div className=" lg:w-[60%] md:w-[60%] sm:w-full w-full  py-[5rem] px-10">
          <div className="text-[3rem] font-extrabold mb-4">General Info.</div>
          <Accordion allowToggle>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton
                  _expanded={{ color: "#FF4400" }}
                  className="border-b-2 items-center border-gray-300 pb-8"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-serif text-[1.5rem] "
                  >
                    What is this Little Fashion?
                  </Box>
                  <AccordionIcon className={`text-[2rem] `} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-2 py-[2rem] ">
                Little Fashion is free Bootstrap 5 website template for
                everyone. There are 8 HTML pages included in this template and
                you can expand more pages as you need. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton
                  _expanded={{ color: "#FF4400" }}
                  className="border-b-2  border-gray-300 pb-8"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-serif text-[1.5rem]"
                  >
                    What is Tooplate Website?
                  </Box>
                  <AccordionIcon className={`text-[2rem] font-bold`} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-2 py-[2rem] ">
                Tooplate is a great website to download free HTML website
                templates for your business or personal use. Tooplate website
                has been online for almost 8 years now. Thank you for visiting
                our website.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton
                  _expanded={{ color: "#FF4400" }}
                  className="border-b-2 border-gray-300 pb-8"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-serif text-[1.5rem]"
                  >
                    How do I support your website?
                  </Box>
                  <AccordionIcon className={`text-[2rem] font-bold`} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-2 py-[2rem]">
                You can support our Tooplate website by sharing it to your
                friends or colleagues on the web or social media.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <div className="text-[3rem] font-extrabold mb-4 mt-6 ">
            About <span className="text-[#FF4400] ">our products</span>
          </div>
          <Accordion allowToggle>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton
                  _expanded={{ color: "#FF4400" }}
                  className="border-b-2 items-center border-gray-300 pb-8"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-serif text-[1.5rem] "
                  >
                    What is this Little Fashion?
                  </Box>
                  <AccordionIcon className={`text-[2rem] `} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-2 py-[2rem] ">
                Little Fashion is free Bootstrap 5 website template for
                everyone. There are 8 HTML pages included in this template and
                you can expand more pages as you need. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="   " mb={4}>
              <h2 className="py-4">
                <AccordionButton
                  _expanded={{ color: "#FF4400" }}
                  className="border-b-2  border-gray-300 pb-8"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-serif text-[1.5rem]"
                  >
                    What is Tooplate Website?
                  </Box>
                  <AccordionIcon className={`text-[2rem] font-bold`} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="border-b-2 py-[2rem] ">
                Tooplate is a great website to download free HTML website
                templates for your business or personal use. Tooplate website
                has been online for almost 8 years now. Thank you for visiting
                our website.
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
