<template>
  <div class="w-full bg-header h-192 bg-no-repeat bg-cover relative">
    <div class="w-full absolute z-10 bottom-0 left-1/2 -translate-x-1/2">
      <!-- Contact -->
      <div
        class="w-full h-14 bg-[rgba(0,0,0,0.16)] mx-auto text-white absolute -top-[768px]"
      >
        <div class="mx-auto h-full w-wrap flex items-center justify-between">
          <div class="flex items-center">
            <a
              href="https://cie.ptit.edu.vn/vi/trang-chu/"
              target="_blank"
              class="flex items-center"
            >
              <img src="../assets/images/svg/email-logo.svg" alt="" />
              <span class="pl-3">international@ptit.edu.vn</span>
            </a>
            <a href="" class="flex items-center pl-12">
              <img src="../assets/images/svg/phone-logo.svg" alt="" />
              <span class="pl-3">+84 88 616 06 06</span>
            </a>
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
      </div>

      <!-- Main text -->
      <div
        class="w-wrap mx-auto absolute left-1/2 -translate-x-1/2 -top-[716px]"
      >
        <img
          src="../assets/images/svg/cie-white-logo.svg"
          alt=""
          class="absolute top-8"
        />
        <div class="absolute top-[221px] w-[496px] text-white">
          <h1 class="font-['Prata'] text-[38px] leading-[3.25rem]">
            Tận dụng cơ hội xét học bạ Du học Úc ngay hôm nay!
          </h1>
          <span class="block pt-6 font-semibold">Hạn đăng ký: 01.07.2022</span>
          <a
            id="hover-arrow"
            href="https://cie.ptit.edu.vn/vi/prog/chuong-trinh-du-hoc-chuyen-tiep-sang-hoc-tap-tai-dai-hoc-la-trobe-uc-nam-2023/"
            target="_blank"
            class="flex items-center mt-6 font-semibold w-36"
          >
            <span class="relative">Xem chi tiết</span>
            <div class="relative ml-4">
              <img
                src="../assets/images/svg/arrow-right.svg"
                alt=""
                class="transition ease-in-out duration-300"
              />
              <img
                src="../assets/images/svg/arrow-right-hover.svg"
                alt=""
                class="absolute top-0 left-0 opacity-0 transition ease-in-out duration-300"
              />
            </div>
          </a>
        </div>
      </div>

      <!-- Schedule -->
      <div class="w-wrap mx-auto flex justify-between">
        <div class="h-[210px] w-[936px] bg-white absolute bottom-0">
          <div
            class="w-14 h-full bg-yellow absolute left-0 text-white font-bold text-sm text-center"
          >
            <span
              class="block -rotate-90 absolute top-1/2 -right-[78px] -translate-y-1/2 w-[210px] tracking-wider"
              >HẠN ĐĂNG KÝ</span
            >
          </div>
          <div
            id="schedule-list"
            class="ml-[76px] mt-9 mr-7 h-auto flex flex-wrap justify-between items-center"
          >
            <div
              v-for="scheduleList in scheduleLists"
              :key="scheduleList.heading"
              class="flex items-center w-1/2"
            >
              <div class="px-[15px] py-1.5 border">
                <span class="block">{{ scheduleList.date }}</span>
                <span class="block">{{ scheduleList.year }}</span>
              </div>
              <div class="ml-2">
                <span class="block font-bold">{{ scheduleList.heading }}</span>
                <span class="block mt-1.5 font-semibold text-[#898989]">{{
                  scheduleList.subtitle
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-[210px] h-[562px] absolute bottom-0 ml-[936px] text-white"
        >
          <div class="w-full h-[352px] bg-[rgba(0,0,49,0.48)]">
            <div class="h-1/2 pl-4 pr-5 flex items-center">
              <a
                href="https://cie.ptit.edu.vn/vi/gioi-thieu/"
                target="_blank"
                id="play-btn"
                class="relative"
              >
                <img
                  src="../assets//images/svg/play-cricle.svg"
                  alt="Play Circle"
                />
                <img
                  src="../assets//images/svg/play-cricle-hover.svg"
                  alt="Play Circle"
                  class="absolute top-0 left-0 opacity-0 transition ease-in-out duration-300"
                />
              </a>
              <div class="ml-3">
                <span class="block text-xs">Về CIE</span>
                <span class="block text-sm font-bold mt-2"
                  >Trung tâm <br />
                  Đào tạo Quốc tế</span
                >
                <span class="block text-xs mt-2"
                  >Học viện Công nghệ <br />
                  Bưu chính Viễn Thông</span
                >
              </div>
            </div>
            <div class="h-1/2 pl-4 pr-3 flex items-center">
              <a
                href="https://cie.ptit.edu.vn/vi/program/dao-tao/chuong-trinh-quoc-te-chung/"
                target="_blank"
                id="play-btn"
                class="relative"
              >
                <img
                  src="../assets//images/svg/play-cricle.svg"
                  alt="Play Circle"
                />
                <img
                  src="../assets//images/svg/play-cricle-hover.svg"
                  alt="Play Circle"
                  class="absolute top-0 left-0 opacity-0 transition ease-in-out duration-300"
                />
              </a>
              <div class="ml-3">
                <span class="block text-xs">Giới thiệu chương trình</span>
                <span class="block text-sm font-bold mt-2"
                  >Liên kết đào tạo</span
                >
                <span class="block text-xs mt-2"
                  >Với các ĐH La Trobe,<br />
                  Huddersfield, Canberra,<br />
                  Bellevue, Chương trình<br />
                  kỹ sư cầu nối</span
                >
              </div>
            </div>
          </div>
          <div class="w-full h-[210px] bg-[rgba(0,0,49,1)]">
            <div class="w-full h-full pt-5 pl-7 pr-5 flex flex-wrap">
              <a
                id="hover-arrow"
                href="https://cie.ptit.edu.vn/vi/program/dao-tao/chuong-trinh-quoc-te-chung/"
                target="_blank"
                class="flex items-center font-semibold"
              >
                <span class="relative">Xem chi tiết</span>
                <div class="relative ml-4">
                  <img
                    src="../assets/images/svg/arrow-right.svg"
                    alt=""
                    class="transition ease-in-out duration-300"
                  />
                  <img
                    src="../assets/images/svg/arrow-right-hover.svg"
                    alt=""
                    class="absolute top-0 left-0 opacity-0 transition ease-in-out duration-300"
                  />
                </div>
              </a>
              <span class="block -mt-2 text-sm font-light"
                >Chương trình liên kết đào tạo các ngành Cử nhân, Du học chuyển
                tiếp</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-full bg-[#030303] opacity-[0.08] absolute top-0"></div>
  </div>

  <!-- Navbar -->
  <div class="w-full h-auto bg-primary">
    <div class="w-wrap px-16 py-6 mx-auto">
      <div
        class="border-b border-[rgba(255,255,255,0.18)] flex justify-between items-center text-[rgba(255,255,255,0.8)] text-center"
      >
        <router-link
          v-for="(navItem, index) in navItems"
          :key="index"
          :to="{ name: navItem.name, params: {} }"
          @click="onClickNavItem(index)"
          class="w-[25%]"
          id="router-link"
        >
          <span
            class="block px-4 py-3"
            :class="{ 'active-link': navItem.isActive }"
            >{{ navItem.text }}</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { SCHEDULE_LIST, NAV_ITEMS } from "@/constants";
export default {
  setup() {
    const scheduleLists = reactive(SCHEDULE_LIST);
    const navItems = reactive(NAV_ITEMS);

    function onClickNavItem(index) {
      if (!this.navItems[index].isActive) {
        navItems.forEach((navItem) => {
          if (navItem.isActive) {
            navItem.isActive = false;
          }
        });
        this.navItems[index].isActive = !this.navItems[index].isActive;
      }
    }

    return { scheduleLists, navItems, onClickNavItem };
  },
};
</script>

<style lang="css" scoped>
a#hover-arrow span::after {
  content: "";
  height: 1.2px;
  width: 0;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: calc(100% + 7px);
  opacity: 0;
  transition-property: opacity width;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

a#hover-arrow:hover span::after {
  opacity: 1;
  width: 20px;
}

a#hover-arrow:hover span {
  text-decoration: underline;
}

a#hover-arrow:hover img {
  transform: translateX(15px);
}

a#hover-arrow:hover img:nth-child(1) {
  opacity: 0;
}

a#hover-arrow:hover img:nth-child(2) {
  opacity: 1;
}

a#play-btn:hover img:nth-child(2) {
  opacity: 1;
}

div#schedule-list > div:nth-child(3),
div#schedule-list > div:nth-child(4) {
  margin-top: 24px;
}

#router-link:hover {
  background-color: rgba(255, 255, 255, 0.24);
}

#router-link .active-link:hover {
  background-color: #000031 !important;
}
.active-link {
  border-bottom: 2px solid #fff;
  color: #fff;
  font-weight: bold;
}
</style>
