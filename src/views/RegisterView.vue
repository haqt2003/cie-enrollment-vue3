<template>
  <div class="w-wrap mx-auto h-auto mt-[60px] mb-[100px]">
    <form @submit.prevent="onSubmit">
      <span class="block text-lg">ĐĂNG KÝ XÉT TUYỂN</span>
      <!-- Resgister Information -->
      <div class="mt-6 border-b pb-10 border-[#EAEAEA]">
        <div class="flex justify-between items-center">
          <span class="font-[Prata] text-[32px]">Thông tin đăng ký</span>
          <span class="text-lg">*bắt buộc</span>
        </div>
        <p class="text-lg mt-6">
          Sau khi đã đọc và hiểu rõ các quy định về tiêu chí và điều kiện xét
          tuyển của Nhà trường, tôi đồng ý xét tuyển học bạ vào chương trình
          Liên kết đào tạo Cử nhân như sau: (chọn phương thức xét tuyển)
        </p>
        <div class="mt-10">
          <div class="flex items-center">
            <span class="font-bold">CHƯƠNG TRÌNH</span>
            <div class="ml-6 relative" @click="addProgram">
              <img src="../assets/images/svg/add-icon.svg" alt="" />
              <img
                src="../assets/images/svg/add-icon-hover.svg"
                alt=""
                class="absolute top-0 opacity-0 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
          <div class="" v-for="(program, ind) in programLists" :key="ind">
            <div class="flex flex-wrap justify-between">
              <div
                class="w-[48%] mt-9 relative h-12 rounded cursor-pointer"
                v-for="(divItem, index) in program"
                :key="index"
                @click="onClick(index, ind)"
              >
                <div
                  class="w-full h-full bg-white border border-[#B5B5B5] rounded"
                  v-if="!(index > 1 && index % 2 === 0)"
                >
                  <label
                    id="label-list"
                    for=""
                    class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden"
                    :class="{ active: divItem.isActiveLabel }"
                    ><span class="text-red">* </span>{{ divItem.title }}</label
                  >
                  <span
                    class="absolute top-[18px] w-[460px] ml-6 font-semibold truncate queryList"
                    >{{ divItem.listSelect }}</span
                  >
                  <img
                    src="../assets/images/svg/arrow-bottom.svg"
                    alt=""
                    class="absolute top-1/2 -translate-y-1/2 right-6"
                  />
                  <ul
                    v-if="divItem.isActive"
                    class="absolute z-40 top-[42px] max-h-[200px] overflow-y-scroll mt-4 bg-white rounded-md shadow-lg w-full font-semibold"
                  >
                    <li
                      @click="onClickItem(item.name, idx, index, ind)"
                      v-for="(item, idx) in divItem.list"
                      :key="idx"
                      class="py-3 px-6 border-b border-[#EAEAEA] hover:bg-[#F8F8F8]"
                    >
                      {{ item.name }}
                    </li>
                  </ul>
                  <span
                    v-if="
                      (ind === 0 && index > 2 && index % 2 === 1) ||
                      (ind > 0 && index > 2 && index % 2 === 1) ||
                      (ind > 0 && index === 0)
                    "
                    @click.self="deleteMajor(ind, index)"
                    class="absolute right-0 -bottom-[32px] text-[#868686] px-5 py-1"
                    >Xóa</span
                  >
                </div>
              </div>
              <div class="w-[48%]"></div>
              <div
                @click="addMajor(ind)"
                class="w-[48%] mt-9 relative h-12 bg-white border border-[#B5B5B5] rounded cursor-pointer flex items-center justify-center"
              >
                <div class="flex">
                  <img src="../assets/images/svg/add-icon-regular.svg" alt="" />
                  <span class="ml-3">THÊM NGÀNH XÉT TUYỂN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resume Infomation -->
      <div class="mt-6 border-b pb-10 border-[#EAEAEA]">
        <div class="flex justify-between items-center">
          <span class="font-[Prata] text-[32px]">Thông tin hồ sơ</span>
          <span class="text-lg">*bắt buộc</span>
        </div>

        <div class="mt-6 flex flex-wrap justify-between items-center">
          <label
            @click="onActiveLabel($event)"
            for="name"
            class="w-[48%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <span id="title" class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
              ><span class="text-red">* </span>HỌ VÀ TÊN</span
            >
            <input
              @blur="onBlurInput($event)"
              id="name"
              type="text"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate outline-none hidden"
              v-model="fullName"
            />
            <span
              id="requireText"
              v-if="!fullName"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </label>
          <div
            @click="onToggleList($event)"
            class="w-[48%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <label
              for="sex"
              class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden"
              :class="{ active: sex.value }"
              ><span class="text-red">* </span>GIỚI TÍNH</label
            >
            <span
              v-if="sex"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate"
              >{{ sex.value }}</span
            >
            <ul
              class="absolute z-40 top-[42px] max-h-[200px] overflow-y-scroll mt-4 bg-white rounded-md shadow-lg w-full font-semibold hidden"
            >
              <li
                v-for="sexList in sexLists"
                :key="sexList"
                @click="onChangeList(sex, $event)"
                class="py-3 px-6 border-b border-[#EAEAEA] hover:bg-[#F8F8F8]"
              >
                {{ sexList }}
              </li>
            </ul>
            <img
              src="../assets/images/svg/arrow-bottom.svg"
              alt=""
              class="absolute top-1/2 -translate-y-1/2 right-6"
            />
            <span
              id="requireText"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </div>
          <label
            @click="onActiveLabel($event)"
            for="dateOfBirth"
            class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <span id="title" class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
              ><span class="text-red">* </span>NGÀY SINH (MM/DD/YYYY)</span
            >
            <input
              @blur="onBlurInput($event)"
              id="dateOfBirth"
              type="date"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate outline-none hidden"
              v-model="dateOfBirth"
            />
            <span
              id="requireText"
              v-if="!dateOfBirth"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </label>
          <div class="flex justify-between items-center w-[48%]">
            <label
              @click="onActiveLabel($event)"
              for="folk"
              class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
            >
              <span
                id="title"
                class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                ><span class="text-red">* </span>DÂN TỘC</span
              >
              <input
                @blur="onBlurInput($event)"
                id="folk"
                type="text"
                class="absolute top-[18px] w-[220px] ml-6 font-semibold truncate outline-none hidden"
                v-model="folk"
              />
              <span
                id="requireText"
                v-if="!folk"
                class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                >Trường bắt buộc</span
              >
            </label>
            <label
              @click="onActiveLabel($event)"
              for="religion"
              class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
            >
              <span
                id="title"
                class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                ><span class="text-red">* </span>TÔN GIÁO</span
              >
              <input
                @blur="onBlurInput($event)"
                id="religion"
                type="text"
                class="absolute top-[18px] w-[220px] ml-6 font-semibold truncate outline-none hidden"
                v-model="religion"
              />
              <span
                id="requireText"
                v-if="!religion"
                class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                >Trường bắt buộc</span
              >
            </label>
          </div>
          <div
            @click="onToggleList($event)"
            class="w-[48%] relative h-12 mt-9 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <label
              for="placeOfBirth"
              class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden"
              :class="{ active: placeOfBirth.value }"
              ><span class="text-red">* </span>NƠI SINH (CHỌN TỈNH/TP)
            </label>
            <span
              v-if="placeOfBirth"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate"
              >{{ placeOfBirth.value }}</span
            >
            <ul
              class="absolute z-40 top-[42px] max-h-[200px] overflow-y-scroll mt-4 bg-white rounded-md shadow-lg w-full font-semibold hidden"
            >
              <li
                v-for="item in data"
                :key="item.name"
                @click="onChangeList(placeOfBirth, $event)"
                class="py-3 px-6 border-b border-[#EAEAEA] hover:bg-[#F8F8F8]"
              >
                {{ item.name }}
              </li>
            </ul>
            <img
              src="../assets/images/svg/arrow-bottom.svg"
              alt=""
              class="absolute top-1/2 -translate-y-1/2 right-6"
            />
            <span
              id="requireText"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </div>
          <div
            @click="onToggleList($event)"
            class="w-[48%] relative h-12 mt-9 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <label
              for="graduationYear"
              class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden"
              :class="{ active: graduationYear.value }"
              ><span class="text-red">* </span>NĂM TỐT NGHIỆP</label
            >
            <span
              v-if="graduationYear"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate"
              >{{ graduationYear.value }}</span
            >
            <ul
              class="absolute z-40 top-[42px] max-h-[200px] overflow-y-scroll mt-4 bg-white rounded-md shadow-lg w-full font-semibold hidden"
            >
              <li
                v-for="yearList in yearLists"
                :key="yearList.name"
                @click="onChangeList(graduationYear, $event)"
                class="py-3 px-6 border-b border-[#EAEAEA] hover:bg-[#F8F8F8]"
              >
                {{ yearList.name }}
              </li>
            </ul>
            <img
              src="../assets/images/svg/arrow-bottom.svg"
              alt=""
              class="absolute top-1/2 -translate-y-1/2 right-6"
            />
            <span
              id="requireText"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </div>
          <label
            @click="onActiveLabel($event)"
            for="phoneNumber"
            class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <span id="title" class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
              ><span class="text-red">* </span>SĐT</span
            >
            <input
              @blur="onBlurInput($event)"
              id="phoneNumber"
              type="tel"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate outline-none hidden"
              v-model="phoneNumber"
            />
            <span
              id="requireText"
              v-if="!phoneNumber"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </label>
          <label
            @click="onActiveLabel($event)"
            for="email"
            class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <span id="title" class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
              ><span class="text-red">* </span>EMAIL</span
            >
            <input
              @blur="onBlurInput($event)"
              id="email"
              type="email"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate outline-none hidden"
              v-model="email"
            />
            <span
              id="requireText"
              v-if="!email"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </label>
          <div
            @click="onToggleList($event)"
            class="w-[48%] relative h-12 mt-9 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <label
              for="highSchoolProvince"
              class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden"
              :class="{ active: highSchoolProvince.value }"
              ><span class="text-red">* </span>TỈNH/TP HỌC THPT
            </label>
            <span
              v-if="highSchoolProvince"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate"
              >{{ highSchoolProvince.value }}</span
            >
            <ul
              class="absolute z-40 top-[42px] max-h-[200px] overflow-y-scroll mt-4 bg-white rounded-md shadow-lg w-full font-semibold hidden"
            >
              <li
                v-for="item in data"
                :key="item.name"
                @click="onChangeList(highSchoolProvince, $event)"
                class="py-3 px-6 border-b border-[#EAEAEA] hover:bg-[#F8F8F8]"
              >
                {{ item.name }}
              </li>
            </ul>
            <img
              nbv
              src="../assets/images/svg/arrow-bottom.svg"
              alt=""
              class="absolute top-1/2 -translate-y-1/2 right-6"
            />
            <span
              id="requireText"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </div>
          <div
            @click="onToggleList($event)"
            class="w-[48%] relative h-12 mt-9 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <label
              for="highSchoolName"
              class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden"
              :class="{ active: highSchoolName.value }"
              ><span class="text-red">* </span>TÊN TRƯỜNG THPT
            </label>
            <span
              v-if="highSchoolName"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate"
              >{{ highSchoolName.value }}</span
            >
            <ul
              class="absolute z-40 top-[42px] max-h-[200px] overflow-y-scroll mt-4 bg-white rounded-md shadow-lg w-full font-semibold hidden"
            >
              <li
                @click="onChangeList(highSchoolName, $event)"
                class="py-3 px-6 border-b border-[#EAEAEA] hover:bg-[#F8F8F8]"
              >
                THPT Đống Đa
              </li>
            </ul>
            <img
              nbv
              src="../assets/images/svg/arrow-bottom.svg"
              alt=""
              class="absolute top-1/2 -translate-y-1/2 right-6"
            />
            <span
              id="requireText"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </div>
          <label
            @click="onActiveLabel($event)"
            for="citizenId"
            class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
          >
            <span id="title" class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
              ><span class="text-red">* </span>SỐ CMND/CCCD</span
            >
            <input
              @blur="onBlurInput($event)"
              id="citizenId"
              type="text"
              class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate outline-none hidden"
              v-model="citizenId"
            />
            <span
              id="requireText"
              v-if="!citizenId"
              class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
              >Trường bắt buộc</span
            >
          </label>
          <div class="flex justify-between items-center w-[48%]">
            <label
              @click="onActiveLabel($event)"
              for="dateOfId"
              class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
            >
              <span
                id="title"
                class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                ><span class="text-red">* </span>NGÀY CẤP (MM/DD/YYYY)</span
              >
              <input
                @blur="onBlurInput($event)"
                id="dateOfId"
                type="date"
                class="absolute top-[18px] w-[220px] ml-6 font-semibold truncate outline-none hidden"
                v-model="dateOfId"
              />
              <span
                id="requireText"
                v-if="!dateOfId"
                class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                >Trường bắt buộc</span
              >
            </label>
            <label
              @click="onActiveLabel($event)"
              for="placeOfId"
              class="w-[48%] relative mt-9 h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
            >
              <span
                id="title"
                class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                ><span class="text-red">* </span>NƠI CẤP</span
              >
              <input
                @blur="onBlurInput($event)"
                id="placeOfId"
                type="text"
                class="absolute top-[18px] w-[220px] ml-6 font-semibold truncate outline-none hidden"
                v-model="placeOfId"
              />
              <span
                id="requireText"
                v-if="!placeOfId"
                class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                >Trường bắt buộc</span
              >
            </label>
          </div>
        </div>

        <span class="block mt-10 text-lg"
          >Điểm trung bình chung 3 năm THPT: Khối A00, A01 hoặc D01</span
        >
        <div class="">
          <div class="mt-8 flex justify-between items-center h-12">
            <div class="w-[13%] font-bold">CHỌN TỔ HỢP</div>
            <div class="w-[87%]">
              <div
                @click="onToggleList($event)"
                class="w-full relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <label
                  for="subjects"
                  class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 cursor-pointer overflow-hidden"
                  :class="{ active: subjects.value }"
                  ><span class="text-red">* </span>CHỌN TỔ HỢP XÉT TUYỂN</label
                >
                <span
                  v-if="subjects"
                  class="absolute top-[18px] w-[500px] ml-6 font-semibold truncate"
                  >{{ subjects.value }}</span
                >
                <ul
                  class="absolute z-40 top-[42px] max-h-[200px] overflow-y-scroll mt-4 bg-white rounded-md shadow-lg w-full font-semibold hidden"
                >
                  <li
                    v-for="subjectList in subjectLists"
                    :key="subjectList"
                    @click="onChangeList(subjects, $event)"
                    class="py-3 px-6 border-b border-[#EAEAEA] hover:bg-[#F8F8F8]"
                  >
                    {{ subjectList }}
                  </li>
                </ul>
                <img
                  src="../assets/images/svg/arrow-bottom.svg"
                  alt=""
                  class="absolute top-1/2 -translate-y-1/2 right-6"
                />
                <span
                  id="requireText"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-between items-center h-12">
            <div class="w-[13%] font-bold"></div>
            <div class="w-[87%] flex justify-between items-center">
              <div
                class="w-[31.2%] relative h-12 bg-[#F2F2F2] border border-[#B5B5B5] rounded"
              >
                <label
                  for="subject"
                  class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 overflow-hidden"
                  :class="{ active: sub1 }"
                  ><span class="text-red">* </span>MÔN 1</label
                >
                <span
                  v-if="sub1"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate"
                  >{{ sub1 }}</span
                >
              </div>
              <div
                class="w-[31.2%] relative h-12 bg-[#F2F2F2] border border-[#B5B5B5] rounded"
              >
                <label
                  for="subject"
                  class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 overflow-hidden"
                  :class="{ active: sub2 }"
                  ><span class="text-red">* </span>MÔN 2</label
                >
                <span
                  v-if="sub2"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate"
                  >{{ sub2 }}</span
                >
              </div>
              <div
                class="w-[31.2%] relative h-12 bg-[#F2F2F2] border border-[#B5B5B5] rounded"
              >
                <label
                  for="subject"
                  class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 overflow-hidden"
                  :class="{ active: sub3 }"
                  ><span class="text-red">* </span>MÔN 3</label
                >
                <span
                  v-if="sub3"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate"
                  >{{ sub3 }}</span
                >
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-between items-center h-12">
            <div class="w-[13%] font-bold">NĂM LỚP 10</div>
            <div class="w-[87%] flex justify-between items-center">
              <label
                @click="onActiveLabel($event)"
                for="mark1"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark1"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark1"
                />
                <span
                  id="requireText"
                  v-if="!mark1"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
              <label
                @click="onActiveLabel($event)"
                for="mark2"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark2"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark2"
                />
                <span
                  id="requireText"
                  v-if="!mark2"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
              <label
                @click="onActiveLabel($event)"
                for="mark3"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark3"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark3"
                />
                <span
                  id="requireText"
                  v-if="!mark3"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
            </div>
          </div>
          <div class="mt-8 flex justify-between items-center h-12">
            <div class="w-[13%] font-bold">NĂM LỚP 11</div>
            <div class="w-[87%] flex justify-between items-center">
              <label
                @click="onActiveLabel($event)"
                for="mark4"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark4"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark4"
                />
                <span
                  id="requireText"
                  v-if="!mark4"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
              <label
                @click="onActiveLabel($event)"
                for="mark5"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark5"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark5"
                />
                <span
                  id="requireText"
                  v-if="!mark5"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
              <label
                @click="onActiveLabel($event)"
                for="mark6"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark6"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark6"
                />
                <span
                  id="requireText"
                  v-if="!mark6"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
            </div>
          </div>
          <div class="mt-8 flex justify-between items-center h-12">
            <div class="w-[13%] font-bold">NĂM LỚP 12</div>
            <div class="w-[87%] flex justify-between items-center">
              <label
                @click="onActiveLabel($event)"
                for="mark7"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark7"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark7"
                />
                <span
                  id="requireText"
                  v-if="!mark7"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
              <label
                @click="onActiveLabel($event)"
                for="mark8"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark8"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark8"
                />
                <span
                  id="requireText"
                  v-if="!mark8"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
              <label
                @click="onActiveLabel($event)"
                for="mark9"
                class="w-[31.2%] relative h-12 cursor-pointer bg-white border border-[#B5B5B5] rounded"
              >
                <span
                  id="title"
                  class="absolute top-1/2 -translate-y-1/2 ml-6 z-10"
                  ><span class="text-red">* </span>NHẬP ĐIỂM</span
                >
                <input
                  @blur="onBlurInput($event)"
                  id="mark9"
                  type="number"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate outline-none hidden"
                  v-model="mark9"
                />
                <span
                  id="requireText"
                  v-if="!mark9"
                  class="absolute left-0 text-xs -bottom-[24px] text-red hidden"
                  >Trường bắt buộc</span
                >
              </label>
            </div>
          </div>
          <div class="mt-8 flex justify-between items-center h-12">
            <div class="w-[13%] font-bold">ĐIỂM TB</div>
            <div class="w-[87%] flex justify-between items-center">
              <div
                class="w-full relative h-12 bg-[#F2F2F2] border border-[#B5B5B5] rounded"
              >
                <label
                  for="averageMark"
                  class="pl-6 py-3 absolute top-1/2 -translate-y-1/2 overflow-hidden"
                  :class="{ active: averageMark !== null }"
                  ><span class="text-red">* </span>ĐIỂM TRUNG BÌNH CỘNG 3
                  MÔN:</label
                >
                <span
                  v-if="averageMark !== null"
                  class="absolute top-[18px] w-[250px] ml-6 font-semibold truncate"
                  >{{ averageMark }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upload Resume -->
      <div class="mt-10 border-b pb-16 border-[#B5B5B5]">
        <div class="flex justify-between items-center">
          <span class="block font-[Prata] text-[32px]">Hồ sơ dự tuyển</span>
          <label
            for="upload"
            class="text-[#4285F4] font-semibold rounded border-[2px] border-[#4285F4] cursor-pointer"
          >
            <div class="flex py-3 px-6">
              <span>Tải lên hồ sơ dự tuyển </span>
              <img
                src="../assets/images/svg/upload-icon.svg"
                alt=""
                class="ml-1"
              />
            </div>
            <input
              id="upload"
              type="file"
              class="hidden"
              @change="onChangeFile"
            />
          </label>
        </div>
        <p class="text-lg mt-6">
          Yêu cầu nộp Phiếu đăng ký dự tuyển trước, các giấy tờ khác có thể nộp
          sau
        </p>
        <div class="flex justify-between flex-wrap">
          <span class="block w-[540px] mt-8"
            >1. Phiếu đăng kí dự tuyển
            <a
              href="https://cie.ptit.edu.vn/wp-content/uploads/2020/09/1.-M%E1%BA%ABu-%C4%91%C6%A1n-%C4%91%C4%83ng-k%C3%BD-x%C3%A9t-tuy%E1%BB%83n_La-Trobe.docx"
              class="text-[#4285F4] font-semibold relative ml-2 underline underline-offset-1"
              >Tải về tại đây
              <img
                src="../assets/images/svg/download-icon.svg"
                alt=""
                class="absolute top-0 -right-7" /></a
          ></span>
          <span class="block w-[540px] mt-8"
            >4. Bản sao hợp lệ chứng minh nhân dân hoặc hộ chiếu còn thời hạn sử
            dụng</span
          >
          <span class="block w-[540px] mt-8"
            >2. 2 ảnh 3×4 (chụp trong 3 tháng gần nhất)</span
          >
          <span class="block w-[540px] mt-8"
            >5. Sơ yếu lý lịch (theo mẫu) có xác nhận của địa phương</span
          >
          <span class="block w-[540px] mt-8"
            >3. Bản sao hợp lệ bằng tốt nghiệp THPT và học bạ THPT (thí sinh có
            thể nộp Chứng nhận tốt nghiệp tạm thời nếu chưa nhận được
            bằng)</span
          >
          <span class="block w-[540px] mt-8"
            >6. Bản sao chứng chỉ tiếng Anh (có bản gốc đối chiếu), nếu
            có.</span
          >
          <span class="block w-[540px] mt-4"></span>
          <span class="block w-[540px] mt-4"
            >7. Giấy khám sức khỏe có giá trị trong vòng 6 tháng (có thể bổ sung
            sau)</span
          >
        </div>
        <button
          type="submit"
          class="px-[170px] text-lg text-white font-semibold bg-primary hover:bg-[#020247] h-12 w-auto mt-10 mx-auto text-center rounded relative left-1/2 -translate-x-1/2"
        >
          Đăng ký
        </button>
        <span v-if="isSuccess" class="block text-primary text-center mt-6"
          >Đăng ký thành công!</span
        >
      </div>
    </form>

    <!-- Relative Program -->
    <div class="mt-10">
      <span class="text-lg">CÁC CHƯƠNG TRÌNH LIÊN QUAN</span>
      <div class="mt-6 flex justify-between">
        <div
          v-for="program in PROGRAMS"
          :key="program"
          class="w-[273px] overflow-hidden"
        >
          <a :href="program.link" target="_blank"
            ><img :src="program.img" alt="" />
            <span class="font-semibold mt-4 block">{{ program.title }}</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, reactive, computed } from "vue";
import {
  SCHOOL_LIST,
  SEX_LIST,
  YEARS_LIST,
  SUBJECT_LIST,
  PROGRAM_LIST,
} from "@/constants";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
export default {
  setup() {
    const data = ref(null);
    const majorLists = reactive({
      title: "NGÀNH XÉT TUYỂN",
      isActive: false,
      isActiveLabel: false,
      listSelect: "",
      list: [
        {
          name: "Chương trình Cử nhân Công nghệ thông tin 2 + 2 với Đại học La Trobe, Úc",
        },
        {
          name: "Chương trình cử nhân Công nghệ thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
        },
        {
          name: "Chương trình cử nhân An toàn thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
        },
        {
          name: "Chương trình cử nhân Công nghệ kỹ thuật điện, điện tử 2+2 với Đại học Huddersfield, Vương Quốc Anh",
        },
      ],
    });
    const schoolLists = reactive(SCHOOL_LIST);
    const listDivs = reactive([
      {
        title: "CÁC TRƯỜNG XÉT TUYỂN",
        isActive: false,
        isActiveLabel: false,
        listSelect: "",
        list: [
          { name: "Đại học La Trobe, Úc" },
          { name: "Đại học Canberra, Úc" },
          { name: "Đại học Bellevue, Mỹ" },
          { name: "Đại học Huddersfield, Vương Quốc Anh" },
          { name: "Đại học Middlesex, Vương Quốc Anh" },
        ],
      },
      {
        title: "NGÀNH XÉT TUYỂN",
        isActive: false,
        isActiveLabel: false,
        listSelect: "",
        list: [
          {
            name: "Chương trình Cử nhân Công nghệ thông tin 2 + 2 với Đại học La Trobe, Úc",
          },
          {
            name: "Chương trình Cử nhân Công nghệ thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
          },
          {
            name: "Chương trình Cử nhân An toàn thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
          },
          {
            name: "Chương trình Cử nhân Công nghệ kỹ thuật điện, điện tử 2+2 với Đại học Huddersfield, Vương Quốc Anh",
          },
        ],
      },
    ]);
    const programLists = reactive([listDivs]);
    const sexLists = reactive(SEX_LIST);
    const yearLists = reactive(YEARS_LIST);
    const subjectLists = reactive(SUBJECT_LIST);
    const PROGRAMS = reactive(PROGRAM_LIST);

    const uniLists = reactive([]);
    const fullName = ref(null);
    const sex = ref({ value: null });
    const dateOfBirth = ref(null);
    const folk = ref(null);
    const religion = ref(null);
    const placeOfBirth = ref({ value: null });
    const graduationYear = ref({ value: null });
    const phoneNumber = ref(null);
    const email = ref(null);
    const highSchoolProvince = ref({ value: null });
    const highSchoolName = ref({ value: null });
    const citizenId = ref(null);
    const dateOfId = ref(null);
    const placeOfId = ref(null);
    const subjects = ref({ value: null });
    const sub1 = ref(null);
    const sub2 = ref(null);
    const sub3 = ref(null);
    const mark1 = ref(null);
    const mark2 = ref(null);
    const mark3 = ref(null);
    const mark4 = ref(null);
    const mark5 = ref(null);
    const mark6 = ref(null);
    const mark7 = ref(null);
    const mark8 = ref(null);
    const mark9 = ref(null);
    const averageMark = computed(() => {
      if (
        mark1.value !== null &&
        mark2.value !== null &&
        mark3.value !== null &&
        mark4.value !== null &&
        mark5.value !== null &&
        mark6.value !== null &&
        mark7.value !== null &&
        mark8.value !== null &&
        mark9.value !== null
      ) {
        return (
          (mark1.value +
            mark2.value +
            mark3.value +
            mark4.value +
            mark5.value +
            mark6.value +
            mark7.value +
            mark8.value +
            mark9.value) /
          9
        ).toPrecision(2);
      } else {
        return null;
      }
    });
    const file = ref(null);
    let isSuccess = ref(null);
    const { addRecord } = useCollection("profiles");
    const { uploadFile } = useStorage("resumes");

    function fecthData() {
      axios
        .get("https://provinces.open-api.vn/api/?depth=1")
        .then((response) => {
          data.value = response.data;
        });
    }

    fecthData();

    function onClick(index, ind) {
      this.programLists.forEach((path, current) => {
        if (current === ind) {
          path.forEach((element, i) => {
            if (i === index) {
              element.isActive = !element.isActive;
            } else {
              element.isActive = false;
            }
          });
        } else {
          path.forEach((element) => {
            element.isActive = false;
          });
        }
      });
    }

    function onClickItem(name, idx, index, ind) {
      this.programLists.forEach((path, current) => {
        if (current === ind) {
          path.forEach((obj, cur) => {
            if (cur === index) {
              obj.list.forEach((element, i) => {
                if (i === idx) {
                  obj.isActiveLabel = true;
                  obj.listSelect = name;
                }
              });
            }
          });
        }
      });
    }

    function addProgram() {
      this.programLists.push([
        {
          title: "CÁC TRƯỜNG XÉT TUYỂN",
          isActive: false,
          isActiveLabel: false,
          listSelect: "",
          list: [
            { name: "Đại học La Trobe, Úc" },
            { name: "Đại học Canberra, Úc" },
            { name: "Đại học Bellevue, Mỹ" },
            { name: "Đại học Huddersfield, Vương Quốc Anh" },
            { name: "Đại học Middlesex, Vương Quốc Anh" },
          ],
        },
        {
          title: "NGÀNH XÉT TUYỂN",
          isActive: false,
          isActiveLabel: false,
          listSelect: "",
          list: [
            {
              name: "Chương trình Cử nhân Công nghệ thông tin 2 + 2 với Đại học La Trobe, Úc",
            },
            {
              name: "Chương trình Cử nhân Công nghệ thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
            },
            {
              name: "Chương trình Cử nhân An toàn thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
            },
            {
              name: "Chương trình Cử nhân Công nghệ kỹ thuật điện, điện tử 2+2 với Đại học Huddersfield, Vương Quốc Anh",
            },
          ],
        },
      ]);
    }

    function addMajor(ind) {
      this.programLists.forEach((element, i) => {
        if (ind === i) {
          element.push(
            {},
            {
              title: "NGÀNH XÉT TUYỂN",
              isActive: false,
              isActiveLabel: false,
              listSelect: "",
              list: [
                {
                  name: "Chương trình Cử nhân Công nghệ thông tin 2 + 2 với Đại học La Trobe, Úc",
                },
                {
                  name: "Chương trình Cử nhân Công nghệ thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
                },
                {
                  name: "Chương trình Cử nhân An toàn thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh",
                },
                {
                  name: "Chương trình Cử nhân Công nghệ kỹ thuật điện, điện tử 2+2 với Đại học Huddersfield, Vương Quốc Anh",
                },
              ],
            }
          );
        }
      });
    }

    function deleteMajor(ind, index) {
      if (ind > 0 && index === 0) {
        this.programLists.splice(ind, 1);
        event.stopPropagation();
      } else {
        this.programLists[ind].splice(index - 1, 2);
        event.stopPropagation();
      }
    }

    function onToggleList(event) {
      const element = event.target;
      const parent = element.closest("div");
      parent.querySelector("ul").classList.toggle("active");
    }

    function onChangeList(data, event) {
      data.value = event.target.innerText;
      if (subjects.value.value == "A00") {
        sub1.value = "Toán";
        sub2.value = "Lý";
        sub3.value = "Hóa ";
      } else if (subjects.value.value == "A01") {
        sub1.value = "Toán";
        sub2.value = "Lý";
        sub3.value = "Anh";
      } else if (subjects.value.value == "D01") {
        sub1.value = "Toán";
        sub2.value = "Văn";
        sub3.value = "Anh";
      }
    }

    function onActiveLabel(event) {
      const element = event.target;
      const parent = element.closest("label");
      const child = parent.querySelector("input");
      if (!child.value) {
        parent.classList.remove("error");
        parent.querySelector("#requireText").classList.remove("active");
      }
      parent.querySelector("#title").classList.add("active");
      parent.querySelector("input").classList.add("active");
    }

    function onBlurInput(event) {
      if (!event.target.value) {
        const element = event.target;
        const parent = element.closest("label");
        parent.classList.add("error");
        parent.querySelector("#requireText").classList.add("active");
        parent.querySelector("#title").classList.remove("active");
        parent.querySelector("input").classList.remove("active");
      }
    }

    function onChangeFile(e) {
      const selected = e.target.files[0];
      if (selected) {
        file.value = selected;
      } else {
        file.value = null;
      }
    }

    async function onSubmit() {
      const schools = document.querySelectorAll(".queryList");
      schools.forEach((element) => {
        uniLists.push(element.innerText);
      });
      if (file.value) await uploadFile(file.value);
      const profile = {
        uniLists: uniLists,
        fullName: fullName.value,
        sex: sex.value.value,
        dateOfBirth: dateOfBirth.value,
        folk: folk.value,
        religion: religion.value,
        placeOfBirth: placeOfBirth.value.value,
        graduationYear: graduationYear.value.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        highSchoolProvince: highSchoolProvince.value.value,
        highSchoolName: highSchoolName.value.value,
        citizenId: citizenId.value,
        dateOfId: dateOfId.value,
        placeOfId: placeOfId.value,
        subjects: subjects.value.value,
        averageMark: averageMark.value,
      };
      await addRecord(profile);
      isSuccess.value = true;
    }

    return {
      data,
      uniLists,
      majorLists,
      schoolLists,
      listDivs,
      programLists,
      sexLists,
      yearLists,
      subjectLists,
      PROGRAMS,
      fullName,
      sex,
      dateOfBirth,
      folk,
      religion,
      placeOfBirth,
      graduationYear,
      phoneNumber,
      email,
      highSchoolProvince,
      highSchoolName,
      citizenId,
      dateOfId,
      placeOfId,
      subjects,
      sub1,
      sub2,
      sub3,
      mark1,
      mark2,
      mark3,
      mark4,
      mark5,
      mark6,
      mark7,
      mark8,
      mark9,
      averageMark,
      file,
      isSuccess,
      onClick,
      onClickItem,
      addProgram,
      addMajor,
      deleteMajor,
      onToggleList,
      onChangeList,
      onActiveLabel,
      onBlurInput,
      onChangeFile,
      onSubmit,
      fecthData,
    };
  },
};
</script>

<style lang="css" scoped>
label.active {
  font-size: 10px;
  transform: translateY(-30px);
}

#title.active {
  font-size: 10px;
  transform: translateY(-18px);
}

input.active {
  display: block;
}

#requireText.active {
  display: block;
}

label.error {
  border-color: #c23b33;
}

ul.active {
  display: block;
}

input[type="radio"] {
  display: none;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
