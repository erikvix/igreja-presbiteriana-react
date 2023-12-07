import React from "react";
import Logo from "../Logo";
import logo1 from "../../assets/Logo2.svg";
import {
  FaTiktok,
  FaFacebookF,
  FaSoundcloud,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Icon from "../Icon";

const icons = [
  {
    icon: FaTiktok,
  },
  {
    icon: FaFacebookF,
  },
  {
    icon: FaSoundcloud,
  },
  {
    icon: FaInstagram,
  },
  {
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <div className="bg-dark-green">
      <div>
        <div className="flex justify-evenly items-center py-10 ">
          <div className="flex flex-col max-w-sm gap-6">
            <Logo src={logo1} />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              reprehenderit vitae cum provident dignissimos expedita repudiandae
              pariatur natus? Laudantium dicta delectus praesentium soluta,
              neque nam. Earum vero quaerat sapiente quas?
            </span>
            <div className="flex gap-3">
              {icons.map((icon) => {
                return (
                  <div className="bg-beige p-[6px] rounded-xl">
                    <Icon size={24} color={"#40543B"} icon={icon.icon} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Home</h1>
            <h3>primeira news</h3>
            <h3>quem somos</h3>
            <h3>projetos</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Igreja</h1>
            <h3>primeira news</h3>
            <h3>quem somos</h3>
            <h3>projetos</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Quem Somos</h1>
            <h3>primeira news</h3>
            <h3>quem somos</h3>
            <h3>projetos</h3>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <span className="text-beige ">Política de Privacidade</span>
          <span className="text-beige ">Termos de Uso</span>
          <span className="text-beige ">Política Legal</span>
        </div>
      </div>
    </div>
  );
}
