import Navpar from "../components/Navpar";
import Footer from "../components/Footer";

export default function Firstpage() {
  return (
    <>
      <Navpar Logein={false} />

      <h1 className="text-5xl text-gray-900 text-center pt-40 h-screen font-bold">
        Hi welcome to Books webpage Pls Login or Singup
      </h1>

      <Footer />
    </>
  );
}
