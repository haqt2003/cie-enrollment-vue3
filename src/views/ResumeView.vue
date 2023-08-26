<template>
  <div class="w-full h-auto">
    <div class="bg-white">
      <div class="w-wrap text-center mx-auto mt-20 mb-[103px]">
        <div class="text-lg">
          <span>HỒ SƠ VÀ CÁCH ĐĂNG KÝ</span>
          <span class="font-[Prata] text-[32px] block mt-6"
            >Hồ sơ xét tuyển</span
          >
          <span class="block mt-6"
            >Thí sinh chưa tốt nghiệp THPT nộp trước phiếu đăng ký xét tuyển để
            được ưu tiên</span
          >
        </div>
        <div class="mt-[93px] flex justify-between items-start">
          <div class="w-[33%]">
            <img
              src="../assets/images/svg/archive-book.svg"
              alt=""
              class="mx-auto"
            />
            <span class="font-semibold text-xl block mx-auto mt-8"
              >Bản photo công chứng học bạ THPT</span
            >
          </div>
          <div class="w-[33%] relative">
            <img
              src="../assets/images/svg/task-square.svg"
              alt=""
              class="mx-auto"
            />
            <span class="font-semibold text-xl block mx-auto mt-8"
              >Phiếu đăng ký xét tuyển</span
            >
            <a
              href=""
              class="flex absolute left-1/2 -translate-x-1/2 mt-[14px]"
            >
              <span class="text-xl underline underline-offset-1"
                >Tải về tại đây
              </span>
              <img
                src="../assets/images/svg/download-black-icon.svg"
                alt=""
                class="ml-1"
              />
            </a>
          </div>
          <div class="w-[33%]">
            <img
              src="../assets/images/svg/like-shapes.svg"
              alt=""
              class="mx-auto"
            />
            <span class="font-semibold text-xl block mx-auto mt-8"
              >Bản photo công chứng bằng tốt nghiệp hoặc giấy chứng nhận tốt
              nghiệp THPT</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#F5F5F5]">
      <div class="w-wrap text-center mx-auto pt-20 pb-[103px]">
        <div class="">
          <span class="font-[Prata] text-[32px]">Cách thức đăng ký</span>
          <div
            class="flex justify-between items-center w-[574px] text-xl mt-6 mx-auto"
          >
            <span class="">Thời gian nhận hồ sơ:</span>
            <span class="">Đợt 1: 01.07.2022</span>
            <span class="">Đợt 2: 30.09.2022</span>
          </div>
          <div class="mt-[93px] flex justify-between items-start">
            <div class="w-[30%]">
              <img
                src="../assets/images/svg/vuesax-linear-map.svg"
                alt=""
                class="mx-auto"
              />
              <span class="font-semibold text-xl block mx-auto mt-8"
                >Nộp trực tiếp tại CIE</span
              >
              <span class="block mt-[14px] text-xl mx-auto"
                >Tầng 5 nhà A1, Học viện Công nghệ Bưu chính Viễn thông</span
              >
            </div>
            <div class="w-[30%] relative">
              <img
                src="../assets/images/svg/vuesax-linear-sms-edit.svg"
                alt=""
                class="mx-auto"
              />
              <span class="font-semibold text-xl block mx-auto mt-8"
                >Gửi bưu điện về CIE</span
              >
              <span class="block mt-[14px] text-xl mx-auto"
                >Học viện Công nghệ Bưu chính Viễn thông Km10, Đường Nguyễn
                Trãi, Quận Hà Đông, Hà Nội</span
              >
            </div>
            <div class="w-[30%] relative">
              <img
                src="../assets/images/svg/vuesax-linear-directbox-notif.svg"
                alt=""
                class="mx-auto"
              />
              <span class="font-semibold text-xl block mx-auto mt-8"
                >Đăng ký trực tuyến</span
              >
              <a
                id="arrow"
                href="https://cie.ptit.edu.vn/vi/trang-chu/"
                target="_blank"
                class="mt-[14px] font-semibold flex items-center mx-auto absolute left-1/2 -translate-x-1/2"
              >
                <span class="block underline underline-offset-1"
                  >Đăng ký tại đây</span
                >
                <img
                  src="../assets/images/svg/arrow-right-black.svg"
                  alt=""
                  class="ml-3 transition ease-in-out duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#arrow:hover img {
  transform: translateX(10px);
}
</style>
