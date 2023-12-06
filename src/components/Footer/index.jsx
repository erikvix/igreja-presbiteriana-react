import React from "react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <div className="bg-dark-green">
      <div>
        <div className="flex justify-between items-center p-10">
          <div className="flex flex-col max-w-sm">
            <Logo />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              reprehenderit vitae cum provident dignissimos expedita repudiandae
              pariatur natus? Laudantium dicta delectus praesentium soluta,
              neque nam. Earum vero quaerat sapiente quas?
            </span>
            <div className="flex gap-2">
              <img src="https://placehold.co/40" alt="" />
              <img src="https://placehold.co/40" alt="" />
              <img src="https://placehold.co/40" alt="" />
              <img src="https://placehold.co/40" alt="" />
              <img src="https://placehold.co/40" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Home</h1>
            <h3>primeira news</h3>
            <h3>quem somos</h3>
            <h3>projetos</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Home</h1>
            <h3>primeira news</h3>
            <h3>quem somos</h3>
            <h3>projetos</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Home</h1>
            <h3>primeira news</h3>
            <h3>quem somos</h3>
            <h3>projetos</h3>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <span>pp</span>
          <span>asd</span>
          <span>dasd</span>
        </div>
      </div>
    </div>
  );
}
