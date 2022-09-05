import { storyblokEditable } from "@storyblok/react";

const Navitem = ({ blok, classes }) => {
  return (
    <li className="nav-item" {...storyblokEditable(blok)}>
      <a className={`nav-link ${classes}`} href={blok.href}>
        <img src={`${blok.icon.filename}/m/0x25`}/>
        <span className='m-2'>{blok.label}</span>
      </a>
    </li>
  );
};

export default Navitem;
