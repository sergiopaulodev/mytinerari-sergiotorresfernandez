import MyTinerary from "./MyTinerary";
import NavBar from "./NavBar";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="flex justify-between w-auto md:items-center lg:mx-20 mx-10 mt-8 md:mb-72 mb-16">
        <MyTinerary/>
        <HamburgerMenu/>
        <NavBar/>
    </header>
  );
}
