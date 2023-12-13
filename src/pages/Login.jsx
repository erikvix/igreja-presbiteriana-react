import React from "react";
import svg from "../assets/login-svg.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src={svg}
            class="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div class="hidden lg:relative lg:block lg:p-12">
            <a class="block text-white" href="/">
              <span class="sr-only">Home</span>
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.0498 17.8575C58.6764 16.9428 57.8892 15.1227 56.0815 13.6977C55.5214 13.2559 54.9334 12.9105 54.3173 12.6554C53.6297 12.3723 52.2233 11.8962 50.484 12.1265C49.087 12.31 47.4037 12.9541 47.4286 13.5203C47.4441 13.8408 48.0104 14.1084 48.2998 14.2453C48.7541 14.46 49.171 14.4786 49.3981 14.4755C49.3888 15.1133 49.3888 15.7698 49.4043 16.4481C49.4106 16.7623 49.3732 17.3442 49.3421 17.8855C49.2052 17.6428 48.975 17.4344 48.6794 17.3099C48.2562 17.1357 47.8051 17.1793 47.4846 17.3908C47.5624 17.7642 47.8517 18.1158 48.2749 18.29C48.6358 18.4393 49.0185 18.4269 49.3234 18.29C49.3141 18.5047 49.3079 18.6945 49.3141 18.8376C48.3589 18.794 48.222 18.5887 47.5313 18.71C47.2357 18.7629 46.5263 18.8874 45.9538 19.4661C45.1199 20.3124 45.1946 21.5133 45.207 21.7747C45.3097 23.5761 46.8405 24.55 46.9743 24.6309C47.6682 25.0571 48.5518 25.2625 49.0247 25.1847C49.0808 25.1753 49.3203 25.1318 49.6533 25.1224C49.9737 25.1131 50.2102 25.1442 50.2693 25.1504C50.7765 25.2033 51.5481 24.9358 52.0988 24.5655C52.2606 24.4566 53.3932 23.6664 53.6639 22.1636C53.7261 21.812 53.9315 20.6515 53.2127 19.7181C52.6931 19.0429 51.9588 18.8376 51.7068 18.7723C50.9507 18.5731 50.7578 18.85 49.6221 18.8469L49.675 14.5191C50.148 14.5844 50.6271 14.6186 51.1125 14.5969C52.6869 14.5253 53.9066 15.2253 54.7809 16.4699C56.542 18.9745 56.9527 21.7716 56.2806 24.718C55.8792 26.4728 54.8182 27.7951 53.2096 28.632C51.5077 29.5156 49.6781 29.7054 47.8113 29.4161C46.5138 29.2138 45.3782 28.7565 44.4292 28.0315C44.2238 27.876 43.2406 27.1012 42.4814 25.7043C40.8479 22.6832 41.7129 19.4038 41.8249 18.9994C42.2232 17.5744 43.3153 15.0169 44.9146 12.8203C45.2444 12.366 45.9413 11.4544 45.6862 10.5459C45.5088 9.91433 44.9146 9.44763 44.3576 9.25784C43.7135 9.04005 43.0197 9.16139 40.459 10.6268C38.6761 11.6473 36.8684 12.6305 35.07 13.623C34.7713 13.7879 34.4384 13.903 34.1086 13.9933C33.7352 14.0959 33.5392 13.8844 33.6605 13.5141C33.7507 13.2403 33.8876 12.9821 34.0121 12.7207C34.6624 11.3829 35.0358 9.99211 34.9486 8.48624C34.8149 6.17453 32.9791 4.87711 30.798 5.61138C30.1322 5.83539 29.2236 6.61322 27.4221 8.12843C27.1825 8.33067 26.9274 8.54846 26.5945 8.52668C25.9286 8.48312 25.5864 7.52173 25.0605 6.579C24.2422 5.11357 23.3337 4.16773 22.1513 3.20011C21.2646 2.47517 20.356 1.70979 18.9652 1.04708C18.4052 0.779503 17.5371 0.375032 16.3859 0.15724C15.58 0.00478499 13.6229 -0.24412 11.4947 0.586601C10.6857 0.900844 7.54318 2.26982 6.4324 5.77939C5.65765 8.228 5.86612 11.7376 7.67697 13.0723C8.28681 13.5235 9.49094 14.0306 9.68073 15.1133C9.71496 15.3062 9.77408 15.6329 9.59672 15.9223C9.20157 16.5663 8.19347 16.1619 6.88045 16.7561C6.13682 17.0921 5.67632 17.5402 5.49586 18.0753C5.28117 18.7069 6.04036 19.1643 5.89723 20.1506C5.89723 20.1506 5.8599 20.4088 5.73233 20.7137C5.13493 22.1698 2.02351 22.4218 0.956286 24.3197C0.0881979 25.8629 -0.232279 27.7235 0.175318 29.6152C0.698038 32.0482 2.7018 33.3114 5.10382 32.7358C6.34839 32.4372 7.42495 31.8024 8.46727 31.09C9.02422 30.7104 9.58117 30.3152 10.1786 30.0103C10.7075 29.7396 11.1773 29.6712 11.5787 29.8019C12.2041 30.0041 12.5215 30.645 12.6086 30.8224C12.9602 31.5349 12.7579 32.0545 13.2402 32.4838C13.4051 32.6332 13.5731 32.6954 13.6665 32.7327C14.6808 33.1185 15.9129 32.3189 16.5943 31.8771C16.6192 31.8616 16.6379 31.8491 16.6472 31.8429C16.9521 31.6438 17.2384 31.4073 17.506 31.1304C18.2185 30.393 18.8034 29.5281 19.4257 28.7067C19.9142 28.0626 20.0418 27.7702 20.4743 27.2195C21.1681 26.339 21.4295 26.1896 21.6068 26.1118C22.17 25.8661 22.8794 25.8941 23.4426 26.2083C23.9466 26.4914 24.1582 26.927 24.5036 27.6551C24.9952 28.6911 25.1508 29.5623 25.1632 29.6339C25.6144 32.2598 25.437 32.4309 25.3094 35.6014C25.3094 35.6014 24.9236 45.094 23.8657 52.7136C23.8097 53.115 23.7786 53.3141 23.7662 53.4168C23.6479 54.4155 23.5017 55.4111 23.3461 56.4036C24.6996 56.7801 25.8664 57.3868 26.7936 57.9997C27.7052 57.4739 28.8565 56.9637 30.1882 56.6805C30.0326 55.9556 29.8583 55.1062 29.6872 54.095C29.5348 53.1928 29.4445 52.5083 29.373 51.998C29.1303 50.2868 29.0432 49.0329 28.844 46.4039C28.6698 44.1015 28.5795 42.9503 28.5298 42.2129C28.3586 39.6025 28.1968 37.1352 28.1439 33.8901C28.1253 32.7856 28.0133 33.243 28.1688 31.7776C28.312 30.4179 28.5795 29.0738 29.2329 27.8449C29.7339 26.899 30.4402 26.2145 31.5354 25.9936C32.4439 25.8132 33.3183 25.9843 34.1148 26.3639C36.2057 27.3595 38.2779 28.3987 40.3345 29.4658C42.9699 30.8317 45.5835 32.2349 48.4958 32.9536C50.0111 33.327 51.5419 33.4981 53.0789 33.103C54.2644 32.8012 55.2881 32.3065 56.1593 31.6438C57.8208 30.3775 58.5395 28.828 58.9595 27.8977C61.1158 23.0939 59.2894 18.4238 59.056 17.8575H59.0498Z"
                  fill="#F1E9DA"
                />
                <path
                  d="M32.6972 56.4477C30.2983 56.2486 28.2883 57.182 27.0251 58.0003L26.4401 58.3798L25.8801 57.9691C24.5359 56.9829 22.3953 55.841 19.8532 56.0184C15.8239 56.3015 13.2819 59.0177 12.7903 59.5684C12.4325 59.9728 12.168 60.3338 12 60.5827C13.2041 60.5671 14.4176 60.5547 15.6373 60.5547C19.2839 60.5484 22.8496 60.6107 26.3344 60.732C29.5298 60.6449 32.7937 60.6075 36.1229 60.6231C37.383 60.6293 38.6369 60.6418 39.8784 60.6636C38.1298 58.8714 36.4278 57.8851 35.2859 57.3407C34.4645 56.9486 33.7115 56.5317 32.6972 56.4477Z"
                  fill="#F1E9DA"
                />
                <path
                  d="M51.7129 18.7536C51.9649 18.8189 52.7054 19.0243 53.2282 19.7057C53.9531 20.6453 53.7447 21.8151 53.6824 22.1698C53.4117 23.685 52.2698 24.4815 52.1049 24.5904C51.5511 24.9638 50.7701 25.2345 50.2599 25.1785C50.2007 25.1722 49.9643 25.1411 49.6376 25.1505C49.3046 25.1598 49.062 25.2034 49.0059 25.2127C48.5299 25.2905 47.6369 25.0851 46.94 24.6558C46.8062 24.5749 45.2629 23.5917 45.1602 21.7747C45.1447 21.5133 45.07 20.2999 45.9132 19.4474C46.4888 18.8656 47.2044 18.738 47.5031 18.6852C48.2343 18.5545 48.3494 18.7909 49.4478 18.8189C50.7421 18.8532 50.9164 18.5358 51.716 18.7474L51.7129 18.7536Z"
                  fill="#BB4430"
                />
                <path
                  d="M47.4502 17.3877C47.7831 17.1668 48.2592 17.1202 48.7041 17.3037C49.149 17.4873 49.454 17.8544 49.5349 18.2465C49.2019 18.4674 48.7259 18.514 48.2809 18.3305C47.836 18.1469 47.5311 17.7798 47.4502 17.3877Z"
                  fill="#2D3A28"
                />
              </svg>
            </a>

            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Bem-vindo
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div class="max-w-xl lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
              <a
                class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span class="sr-only">Home</span>
                <svg
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.0498 17.8575C58.6764 16.9428 57.8892 15.1227 56.0815 13.6977C55.5214 13.2559 54.9334 12.9105 54.3173 12.6554C53.6297 12.3723 52.2233 11.8962 50.484 12.1265C49.087 12.31 47.4037 12.9541 47.4286 13.5203C47.4441 13.8408 48.0104 14.1084 48.2998 14.2453C48.7541 14.46 49.171 14.4786 49.3981 14.4755C49.3888 15.1133 49.3888 15.7698 49.4043 16.4481C49.4106 16.7623 49.3732 17.3442 49.3421 17.8855C49.2052 17.6428 48.975 17.4344 48.6794 17.3099C48.2562 17.1357 47.8051 17.1793 47.4846 17.3908C47.5624 17.7642 47.8517 18.1158 48.2749 18.29C48.6358 18.4393 49.0185 18.4269 49.3234 18.29C49.3141 18.5047 49.3079 18.6945 49.3141 18.8376C48.3589 18.794 48.222 18.5887 47.5313 18.71C47.2357 18.7629 46.5263 18.8874 45.9538 19.4661C45.1199 20.3124 45.1946 21.5133 45.207 21.7747C45.3097 23.5761 46.8405 24.55 46.9743 24.6309C47.6682 25.0571 48.5518 25.2625 49.0247 25.1847C49.0808 25.1753 49.3203 25.1318 49.6533 25.1224C49.9737 25.1131 50.2102 25.1442 50.2693 25.1504C50.7765 25.2033 51.5481 24.9358 52.0988 24.5655C52.2606 24.4566 53.3932 23.6664 53.6639 22.1636C53.7261 21.812 53.9315 20.6515 53.2127 19.7181C52.6931 19.0429 51.9588 18.8376 51.7068 18.7723C50.9507 18.5731 50.7578 18.85 49.6221 18.8469L49.675 14.5191C50.148 14.5844 50.6271 14.6186 51.1125 14.5969C52.6869 14.5253 53.9066 15.2253 54.7809 16.4699C56.542 18.9745 56.9527 21.7716 56.2806 24.718C55.8792 26.4728 54.8182 27.7951 53.2096 28.632C51.5077 29.5156 49.6781 29.7054 47.8113 29.4161C46.5138 29.2138 45.3782 28.7565 44.4292 28.0315C44.2238 27.876 43.2406 27.1012 42.4814 25.7043C40.8479 22.6832 41.7129 19.4038 41.8249 18.9994C42.2232 17.5744 43.3153 15.0169 44.9146 12.8203C45.2444 12.366 45.9413 11.4544 45.6862 10.5459C45.5088 9.91433 44.9146 9.44763 44.3576 9.25784C43.7135 9.04005 43.0197 9.16139 40.459 10.6268C38.6761 11.6473 36.8684 12.6305 35.07 13.623C34.7713 13.7879 34.4384 13.903 34.1086 13.9933C33.7352 14.0959 33.5392 13.8844 33.6605 13.5141C33.7507 13.2403 33.8876 12.9821 34.0121 12.7207C34.6624 11.3829 35.0358 9.99211 34.9486 8.48624C34.8149 6.17453 32.9791 4.87711 30.798 5.61138C30.1322 5.83539 29.2236 6.61322 27.4221 8.12843C27.1825 8.33067 26.9274 8.54846 26.5945 8.52668C25.9286 8.48312 25.5864 7.52173 25.0605 6.579C24.2422 5.11357 23.3337 4.16773 22.1513 3.20011C21.2646 2.47517 20.356 1.70979 18.9652 1.04708C18.4052 0.779503 17.5371 0.375032 16.3859 0.15724C15.58 0.00478499 13.6229 -0.24412 11.4947 0.586601C10.6857 0.900844 7.54318 2.26982 6.4324 5.77939C5.65765 8.228 5.86612 11.7376 7.67697 13.0723C8.28681 13.5235 9.49094 14.0306 9.68073 15.1133C9.71496 15.3062 9.77408 15.6329 9.59672 15.9223C9.20157 16.5663 8.19347 16.1619 6.88045 16.7561C6.13682 17.0921 5.67632 17.5402 5.49586 18.0753C5.28117 18.7069 6.04036 19.1643 5.89723 20.1506C5.89723 20.1506 5.8599 20.4088 5.73233 20.7137C5.13493 22.1698 2.02351 22.4218 0.956286 24.3197C0.0881979 25.8629 -0.232279 27.7235 0.175318 29.6152C0.698038 32.0482 2.7018 33.3114 5.10382 32.7358C6.34839 32.4372 7.42495 31.8024 8.46727 31.09C9.02422 30.7104 9.58117 30.3152 10.1786 30.0103C10.7075 29.7396 11.1773 29.6712 11.5787 29.8019C12.2041 30.0041 12.5215 30.645 12.6086 30.8224C12.9602 31.5349 12.7579 32.0545 13.2402 32.4838C13.4051 32.6332 13.5731 32.6954 13.6665 32.7327C14.6808 33.1185 15.9129 32.3189 16.5943 31.8771C16.6192 31.8616 16.6379 31.8491 16.6472 31.8429C16.9521 31.6438 17.2384 31.4073 17.506 31.1304C18.2185 30.393 18.8034 29.5281 19.4257 28.7067C19.9142 28.0626 20.0418 27.7702 20.4743 27.2195C21.1681 26.339 21.4295 26.1896 21.6068 26.1118C22.17 25.8661 22.8794 25.8941 23.4426 26.2083C23.9466 26.4914 24.1582 26.927 24.5036 27.6551C24.9952 28.6911 25.1508 29.5623 25.1632 29.6339C25.6144 32.2598 25.437 32.4309 25.3094 35.6014C25.3094 35.6014 24.9236 45.094 23.8657 52.7136C23.8097 53.115 23.7786 53.3141 23.7662 53.4168C23.6479 54.4155 23.5017 55.4111 23.3461 56.4036C24.6996 56.7801 25.8664 57.3868 26.7936 57.9997C27.7052 57.4739 28.8565 56.9637 30.1882 56.6805C30.0326 55.9556 29.8583 55.1062 29.6872 54.095C29.5348 53.1928 29.4445 52.5083 29.373 51.998C29.1303 50.2868 29.0432 49.0329 28.844 46.4039C28.6698 44.1015 28.5795 42.9503 28.5298 42.2129C28.3586 39.6025 28.1968 37.1352 28.1439 33.8901C28.1253 32.7856 28.0133 33.243 28.1688 31.7776C28.312 30.4179 28.5795 29.0738 29.2329 27.8449C29.7339 26.899 30.4402 26.2145 31.5354 25.9936C32.4439 25.8132 33.3183 25.9843 34.1148 26.3639C36.2057 27.3595 38.2779 28.3987 40.3345 29.4658C42.9699 30.8317 45.5835 32.2349 48.4958 32.9536C50.0111 33.327 51.5419 33.4981 53.0789 33.103C54.2644 32.8012 55.2881 32.3065 56.1593 31.6438C57.8208 30.3775 58.5395 28.828 58.9595 27.8977C61.1158 23.0939 59.2894 18.4238 59.056 17.8575H59.0498Z"
                    fill="#5B7553"
                  />
                  <path
                    d="M32.6972 56.4477C30.2983 56.2486 28.2883 57.182 27.0251 58.0003L26.4401 58.3798L25.8801 57.9691C24.5359 56.9829 22.3953 55.841 19.8532 56.0184C15.8239 56.3015 13.2819 59.0177 12.7903 59.5684C12.4325 59.9728 12.168 60.3338 12 60.5827C13.2041 60.5671 14.4176 60.5547 15.6373 60.5547C19.2839 60.5484 22.8496 60.6107 26.3344 60.732C29.5298 60.6449 32.7937 60.6075 36.1229 60.6231C37.383 60.6293 38.6369 60.6418 39.8784 60.6636C38.1298 58.8714 36.4278 57.8851 35.2859 57.3407C34.4645 56.9486 33.7115 56.5317 32.6972 56.4477Z"
                    fill="#5B7553"
                  />
                  <path
                    d="M51.7129 18.7536C51.9649 18.8189 52.7054 19.0243 53.2282 19.7057C53.9531 20.6453 53.7447 21.8151 53.6824 22.1698C53.4117 23.685 52.2698 24.4815 52.1049 24.5904C51.5511 24.9638 50.7701 25.2345 50.2599 25.1785C50.2007 25.1722 49.9643 25.1411 49.6376 25.1505C49.3046 25.1598 49.062 25.2034 49.0059 25.2127C48.5299 25.2905 47.6369 25.0851 46.94 24.6558C46.8062 24.5749 45.2629 23.5917 45.1602 21.7747C45.1447 21.5133 45.07 20.2999 45.9132 19.4474C46.4888 18.8656 47.2044 18.738 47.5031 18.6852C48.2343 18.5545 48.3494 18.7909 49.4478 18.8189C50.7421 18.8532 50.9164 18.5358 51.716 18.7474L51.7129 18.7536Z"
                    fill="#BB4430"
                  />
                  <path
                    d="M47.4502 17.3877C47.7831 17.1668 48.2592 17.1202 48.7041 17.3037C49.149 17.4873 49.454 17.8544 49.5349 18.2465C49.2019 18.4674 48.7259 18.514 48.2809 18.3305C47.836 18.1469 47.5311 17.7798 47.4502 17.3877Z"
                    fill="#5B7553"
                  />
                </svg>
              </a>

              <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Cadastre-se
              </h1>

              <p class="mt-4 leading-relaxed text-gray-500">
                Preencha os dados abaixo para concluir o cadastro
              </p>
            </div>

            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <label
                  for="Email"
                  class="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div class="col-span-6 flex sm:flex sm:items-center sm:gap-4">
                <Button
                  pathName={"/dashboard"}
                  className={
                    "inline-block shrink-0 bg-dark-green px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-dark-green focus:outline-none focus:ring active:text-dark-green"
                  }
                >
                  Entrar
                </Button>
              </div>
              <div class="col-span-6 flex sm:flex sm:items-center sm:gap-4">
                <p class="flex gap-2 mt-4 text-sm text-gray-500 sm:mt-0">
                  Não tem uma conta ainda?
                  <Link to={"/login"} class="text-gray-700 underline">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
