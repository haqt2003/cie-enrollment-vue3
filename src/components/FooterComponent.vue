<template>
  <div class="w-full h-[626px] bg-primary">
    <div
      class="w-wrap mx-auto flex flex-wrap justify-between text-white relative"
    >
      <div class="w-[348px] pt-[188px] text-sm">
        <img src="../assets/images/svg/cie-logo-footer.svg" alt="CIE Logo" />
        <span class="block mt-6">Hotline: +84 88 616 06 06</span>
        <p class="mt-6">
          Địa chỉ: Tầng 5 nhà A1, Học viện Công nghệ Bưu chính Viễn thông Km10,
          Đường Nguyễn Trãi,<br />
          Quận Hà Đông, Hà Nội
        </p>
        <span class="block mt-10">+84 (0) 24 33 829 236</span>
        <span class="block mt-6">international@ptit.edu.vn</span>
      </div>
      <div class="w-[668px] pt-[228px] flex justify-between text-sm">
        <ul>
          <li>
            <span class="font-[Prata] text-lg">Find It Last</span>
          </li>
          <li class="mt-9 font-light">
            <a href="https://portal.ptit.edu.vn/" target="_blank"
              >Portal PTIT</a
            >
          </li>
          <li class="mt-8 font-light">
            <a href="">Legacy Disclaimer</a>
          </li>
          <li class="mt-8 font-light">
            <a href="">LMS PTIT</a>
          </li>
          <li class="mt-8 font-light">
            <a href="">Libraries & Archives</a>
          </li>
          <li class="mt-8 font-light">
            <a href="">Virtual Tour</a>
          </li>
        </ul>
        <ul>
          <li>
            <span class="font-[Prata] text-lg">About Us</span>
          </li>
          <li class="mt-9 font-light">
            <a
              href="https://cie.ptit.edu.vn/vi/category/thong-bao-cie/"
              target="_blank"
              >Notice</a
            >
          </li>
          <li class="mt-8 font-light">
            <a
              href="https://cie.ptit.edu.vn/vi/category/su-kien/"
              target="_blank"
              >Event</a
            >
          </li>
          <li class="mt-8 font-light">
            <a
              href="https://cie.ptit.edu.vn/vi/category/cau-chuyen-sinh-vien/"
              target="_blank"
              >Student’s Story</a
            >
          </li>
        </ul>
        <ul>
          <li>
            <span class="font-[Prata] text-lg">Education</span>
          </li>
          <li class="mt-9 font-light">
            <a
              href="https://cie.ptit.edu.vn/vi/program/giao-duc/chuong-trinh-cntt-bang-tieng-anh/"
              target="_blank"
              >IT Programs for ASEAN</a
            >
          </li>
          <li class="mt-8 font-light">
            <a
              href="https://cie.ptit.edu.vn/vi/program/giao-duc/chuong-trinh-dai-hoc-chat-luong-cao/"
              target="_blank"
              >High Quality<br />
              Undergraduate Program</a
            >
          </li>
          <li class="mt-8 font-light">
            <a
              href="https://cie.ptit.edu.vn/vi/program/giao-duc/chuong-trinh-quoc-te-chung/"
              target="_blank"
              >Professional Training Courses</a
            >
          </li>
        </ul>
      </div>
      <div class="w-full flex justify-between items-center mt-10">
        <div class="text-xs">
          Copyright © 2020 CIE PTIT. All rights reserved.
        </div>
        <div class="flex items-center">
          <a href="https://www.facebook.com/ptit.cie" target="_blank"
            ><img
              src="../assets/images/svg/facebook-logo.svg"
              alt="Facebook Logo"
          /></a>
          <a
            href="https://www.youtube.com/c/CIEPTIT"
            target="_blank"
            class="pl-4"
            ><img
              src="../assets/images/svg/youtube-logo.svg"
              alt="Youtube Logo"
          /></a>
          <a
            href="https://www.instagram.com/cie.info/"
            target="_blank"
            class="pl-4"
            ><img
              src="../assets/images/svg/instagram-logo.svg"
              alt="Instagram Logo"
          /></a>
        </div>
      </div>
      <div
        class="w-full h-[180px] bg-contact bg-no-repeat bg-cover bg-center absolute -top-[38px] rounded-lg overflow-hidden"
      >
        <div class="w-full h-full bg-[rgba(255,212,69,0.87)]"></div>
        <div
          class="absolute top-1/2 -translate-y-1/2 left-[92px] flex items-center"
        >
          <div class="text-dark">
            <span class="font-[Prata] text-[32px]">Đăng ký nhận tư vấn</span>
            <span class="block mt-3 font-semibold"
              >Nhận tư vấn trực tiếp từ Trung tâm Đào tạo Quốc tế</span
            >
          </div>
          <div class="ml-16">
            <input
              type="tel"
              name="phoneNumber"
              id=""
              class="text-dark w-[349px] pl-6 py-3 rounded outline-none"
              placeholder="Số điện thoại"
              v-model="phoneNumber"
            />
            <button
              @click="registerContact"
              class="bg-[#4285F4] w-[165px] py-3 rounded ml-5 hover:bg-[#5796FF]"
            >
              Đăng ký
            </button>
            <span v-if="!isPhoneNumber" class="block mt-2 text-dark"
              >Vui lòng nhập số điện thoại</span
            >
            <span v-if="isSuccess && isPhoneNumber" class="block mt-2 text-dark"
              >Đăng ký thành công!</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useCollection from "@/composables/useCollection";
export default {
  setup() {
    const isPhoneNumber = ref(true);
    const isSuccess = ref(null);
    const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const phoneNumber = ref(null);
    const { addRecord } = useCollection("registers");

    async function registerContact() {
      if (phoneNumber.value && phoneNumberRegex.test(phoneNumber.value)) {
        isPhoneNumber.value = true;
        const obj = {
          phoneNumber: phoneNumber.value,
        };
        await addRecord(obj);
        isSuccess.value = true;
      } else {
        isPhoneNumber.value = false;
      }
    }
    return { phoneNumber, isPhoneNumber, isSuccess, registerContact };
  },
};
</script>
