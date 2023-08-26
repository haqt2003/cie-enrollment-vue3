<template>
  <div class="w-full pb-16">
    <div class="w-full flex flex-wrap">
      <div class="w-1/2 relative h-[602px] overflow-hidden">
        <img
          src="../assets/images/png/CIE.png"
          alt=""
          class="w-full bg-center bg-no-repeat bg-cover"
        />
        <div
          class="bg-[rgba(0,0,0,0.44)] absolute bottom-0 left-0 w-[385px] h-[147px]"
        >
          <div
            class="flex items-center text-white absolute top-1/2 -translate-y-1/2 left-1/4"
          >
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
            <div class="ml-3 w-[200px]">
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
        </div>
      </div>
      <div
        class="w-1/2 bg-primary pl-[72px] pt-[102px] h-[602px] overflow-hidden text-white"
      >
        <span class="text-lg font-semibold"
          >HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</span
        >
        <span class="block mt-6 text-[32px] font-[Prata]"
          >TRUNG TÂM ĐÀO TẠO QUỐC TẾ</span
        >
        <p class="text-ligt mt-6 block w-[516px]">
          Chúng tôi mang đến những cơ hội tuyệt vời cho tất cả sinh viên của
          chúng tôi để học tập các chương trình đào tạo quốc tế và gia tăng cơ
          hội làm việc tại nước ngoài, đồng thời mang đến cho bạn sinh viên
          trong nước và quốc tế các chương trình trao đổi và dịch chuyển sinh
          viên. Như một phần trong cam kết của chúng tôi về việc mang lại sự
          tiếp cận tốt nhất tới các chương trình đào tạo quốc tế cho sinh viên
          trong nước và sinh viên nước ngoài tại PTIT, CIE cung cấp các chương
          trình ưu việt với sự kết nối chặt chẽ với các đối tác quốc tế với
          phương pháp tiếp lấy người học làm trung tâm.
        </p>
        <a
          id="hover-arrow"
          href="https://cie.ptit.edu.vn/vi/program/dao-tao/chuong-trinh-quoc-te-chung/"
          target="_blank"
          class="flex items-center font-semibold mt-10"
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
      <div class="w-1/2 bg-primary pl-[120px] pt-[102px] h-[602px] text-white">
        <span class="text-lg font-semibold"
          >ĐỐI TÁC CỦA CIE TRÊN KHẮP THẾ GIỚI</span
        >
        <span class="block mt-6 text-[32px] font-[Prata]"
          >Liên Kết Đào Tạo Quốc Tế</span
        >
        <span class="font-light mt-6 block"
          >Các chương trình của CIE bao gồm:</span
        >
        <ul class="mt-4 w-[486px]">
          <li>
            • Chương trình liên kết đào tạo quốc tế bậc đại học và thạc sĩ (2+2,
            3+1, 1+1) và Tiến sĩ
          </li>
          <li class="mt-4">
            • Chương trình trao đổi và dịch chuyển sinh viên cho sinh viên trong
            nước và quốc tế
          </li>
          <li class="mt-4">
            • Chương trình du học kết nối cho sinh viên tốt nghiệp làm việc tại
            thị trường lao động toàn cầu
          </li>
          <li class="mt-4">
            • Các khóa học định hướng nghề nghiệp từ cơ bản đến nâng cao để giúp
            sinh viên có khả năng làm việc ngay sau khi tốt nghiệp
          </li>
        </ul>
      </div>
      <div class="w-1/2 h-[602px] relative overflow-hidden">
        <img
          src="../assets/images/png/graduate.png"
          alt=""
          class="w-full bg-center bg-no-repeat bg-cover"
        />
        <img
          src="../assets/images/png/map.png"
          alt=""
          class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
    <div class="w-wrap mx-auto py-[80px] flex justify-between items-center">
      <img src="../assets/images/png/logo.png" alt="" />
      <img src="../assets/images/png/logo.png" alt="" />
    </div>
  </div>
</template>

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
</style>
