import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {assets} from "../public/assets";

const Navbar = ({ blok }) => {
  console.log(blok);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${blok.theme} bg-${blok.backgroundColor}`}
      {...storyblokEditable(blok)}>
      <a className="navbar-brand" href="#">
        <img src={`${blok.logo.filename}/m/0x50`} />
      </a>
      <div className="navbar-collapse flex-row-reverse" id="navbarNav">
        <ul className="navbar-nav">
          {blok.navitem.sort((item1,item2)=>item1.id-item2.id).map(navitem => (
            <StoryblokComponent blok={navitem} key={navitem._uid} classes={`text-${blok.textColor}`}/>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
