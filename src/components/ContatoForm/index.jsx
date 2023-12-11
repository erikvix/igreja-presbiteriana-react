import React from "react";
import Button from "../Button";

export default function ContatoForm() {
  return (
    <section>
      <div>
        <div className="flex justify-center items-center gap-6 flex-col">
          <h1 className="text-gray-600">Contato</h1>
          <div className="border-b-4  border-gray-400 w-[1220px]"></div>
        </div>
        <div class="rounded-lg bg-white-beige lg:mt-8 lg:col-span-3">
          <form action="" class="space-y-4">
            <div>
              <label class="" for="assunto">
                Assunto
              </label>
              <input
                class="w-full rounded-lg border-gray-400 p-3 text-sm"
                type="text"
                id="assunto"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label for="email">Email</label>
                <input
                  class="w-full rounded-lg border-gray-400 p-3 text-sm"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label for="phone">Telefone (opcional):</label>
                <input
                  class="w-full rounded-lg border-gray-400 p-3 text-sm"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>
            <div>
              <label for="message">Mensagem</label>

              <textarea
                class="w-full rounded-lg border-gray-400 p-3 text-sm"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div class="flex justify-between items-center mt-4">
              <span className="text-xs  text-black-c">
                Encaminhado para o e-mail pastor.romulo@primeiraipcg.exemplo.com
              </span>
              <Button>Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
