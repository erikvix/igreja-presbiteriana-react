import React from "react";
import Button from "../Button";

export default function ContatoForm() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-white-beige p-8 shadow-2xl lg:col-span-3 lg:p-12">
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
              <span className="text-sm">
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
