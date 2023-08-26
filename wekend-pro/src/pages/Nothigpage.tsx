import Navpar from "../components/Navpar";
import Footer from "../components/Footer";

export default function Nothigpage() {
  return (
    <div>
      <Navpar Logein={true} />
      <h1 className="text-5xl text-red-700 text-center pt-10 h-screen">
        We are working in this page 404
      </h1>
      <Footer />
    </div>
  );
}
