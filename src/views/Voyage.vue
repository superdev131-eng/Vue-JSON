<script>
import JsonData from "../../user.json";
export default {
  data() {
    return {
      data: JsonData,
      list: JsonData.formForCrew[0].subMenu[0].list,
    };
  },
};
</script>

<template>
  <div class="Voyage-Bonus">
    <div class="main-header">
      <div class="topbar">
        <div class="User-acc float-right">
          <img class="mr-7" src="img/search.png" alt="" />
          <img class="mr-7" src="img/setting.png" alt="" />
          <img src="assets/img/avatar.png" alt="" />
          <span class="h5">User</span>
          <img src="assets/img/down-arrow.png" alt="" />
        </div>
        <div class="title-container">
          <h4 class="breadcramp">
            <span
              v-for="breadcrumb in data.formForCrew[0].subMenu[0].breadcrumb"
            >
              {{ breadcrumb.name }}
              <svg
                class="mh-12"
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.904458 0.500001L6 6L0.904457 11.5L-1.34516e-06 10.5237L4.19108 6L-5.54207e-07 1.47625L0.904458 0.500001Z"
                  fill="#BDBDBD"
                />
              </svg>
            </span>
          </h4>
          <button class="add-btn">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 1.8125C6.75838 1.8125 6.5625 2.00838 6.5625 2.25V7.0625H1.75C1.50838 7.0625 1.3125 7.25838 1.3125 7.5C1.3125 7.74162 1.50838 7.9375 1.75 7.9375H6.5625V12.75C6.5625 12.9916 6.75838 13.1875 7 13.1875C7.24162 13.1875 7.4375 12.9916 7.4375 12.75V7.9375H12.25C12.4916 7.9375 12.6875 7.74162 12.6875 7.5C12.6875 7.25838 12.4916 7.0625 12.25 7.0625H7.4375V2.25C7.4375 2.00838 7.24162 1.8125 7 1.8125Z"
                fill="white"
              />
            </svg>

            Add
          </button>
          <h1 class="main-title">
            {{ data.formForCrew[0].subMenu[0].name }}
            <a href="#" class="report-btn">{{
              data.formForCrew[0].subMenu[0].label
            }}</a>
            <svg
              v-if="data.formForCrew[0].subMenu[0].hasSetting"
              class="voyage-gear"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2068 0.75L15.5431 3.25L14.7031 4.715C14.9898 5.05375 15.2502 5.42479 15.4843 5.82812C15.7185 6.23146 15.9139 6.64813 16.0706 7.07812H17.7506V12.0781H16.0706C15.7581 12.9506 15.3023 13.7383 14.7031 14.4412L15.5431 15.9062L11.2068 18.4062L10.3668 16.9412C9.45518 17.1104 8.54372 17.1104 7.63247 16.9412L6.79247 18.4062L2.45622 15.9062L3.29622 14.4412C2.99663 14.0896 2.73288 13.7152 2.50497 13.3181C2.27705 12.921 2.08497 12.5077 1.92872 12.0781H0.248718V7.07812H1.92872C2.24122 6.20563 2.69705 5.41792 3.29622 4.715L2.45622 3.25L6.79247 0.75L7.63247 2.215C8.54414 2.04583 9.45559 2.04583 10.3668 2.215L11.2068 0.75ZM11.6756 2.44937L11.4412 2.84L11.0112 3.60188L10.1325 3.44563C9.37705 3.30229 8.62184 3.30229 7.86684 3.44563L6.98809 3.60188L6.32372 2.44937L4.17497 3.69937L4.81934 4.85187L4.25309 5.51625C3.75809 6.10208 3.38038 6.75958 3.11997 7.48875L2.82684 8.32875H1.49872V10.8287H2.80747L3.11997 11.6687C3.25038 12.0462 3.40663 12.3912 3.58872 12.7037C3.7708 13.0162 3.99226 13.3287 4.25309 13.6412L4.81934 14.3056L4.17497 15.4581L6.32372 16.7081L6.98809 15.5556L7.86684 15.7119C8.62226 15.8552 9.37747 15.8552 10.1325 15.7119L11.0112 15.5556L11.6756 16.7081L13.8243 15.4581L13.18 14.3056L13.7462 13.6412C14.2412 13.0421 14.6189 12.3846 14.8793 11.6687L15.1725 10.8287H16.5006V8.32875H15.1918L14.8793 7.48875C14.7623 7.13708 14.606 6.79521 14.4106 6.46312C14.2152 6.13104 13.9937 5.81521 13.7462 5.51562L13.18 4.85125L13.8243 3.69875L11.6756 2.44937ZM8.99997 5.20312C10.2371 5.22937 11.2689 5.65583 12.0956 6.4825C12.9223 7.30917 13.3487 8.34104 13.375 9.57812C13.3487 10.8152 12.9223 11.8471 12.0956 12.6737C11.2689 13.5004 10.2371 13.9269 8.99997 13.9531C7.76289 13.9269 6.73101 13.5004 5.90434 12.6737C5.07768 11.8471 4.65122 10.8152 4.62497 9.57812C4.65122 8.34104 5.07768 7.30917 5.90434 6.4825C6.73101 5.65583 7.76289 5.22937 8.99997 5.20312ZM8.99997 6.45312C8.11455 6.47937 7.37893 6.78542 6.79309 7.37125C6.20726 7.95708 5.90122 8.69271 5.87497 9.57812C5.90122 10.4635 6.20726 11.1992 6.79309 11.785C7.37893 12.3708 8.11455 12.6769 8.99997 12.7031C9.88538 12.6769 10.621 12.3708 11.2068 11.785C11.7927 11.1992 12.0987 10.4635 12.125 9.57812C12.0987 8.69271 11.7927 7.95708 11.2068 7.37125C10.621 6.78542 9.88538 6.47937 8.99997 6.45312Z"
                fill="#4F4F4F"
              />
            </svg>
          </h1>
        </div>
      </div>
    </div>
    <div class="bonus-list">
      <div class="filter">
        <div class="date-container">
          <label class="mr-21" for="">Date</label>
          <input
            type="text"
            class="date-picker"
            placeholder="&#128197 Select a start date"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
          />
          <span class="ph-12"> - </span>
          <input
            type="text"
            class="date-picker"
            placeholder="&#128197 Select an end date"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
          />
        </div>
        <div class="name-container">
          <label class="mr-12" for="">Name</label>
          <input
            class="filter-input"
            type="text"
            name=""
            id=""
            placeholder="Please enter"
          />
        </div>
        <div class="select-container">
          <label class="mr-12" for="">Select</label>
          <select class="filter-input" name="" id="">
            <option class="default-option">Please Select</option>
            <option value="">1</option>
          </select>
        </div>
      </div>
      <div class="filter-btn">
        <button class="search-btn">Search</button>
        <button class="reset-btn">Reset</button>
      </div>
      <div id="table-scroll" class="table-scroll">
        <table id="main-table" class="main-table">
          <thead>
            <tr>
              <td><input type="checkbox" name="" id="" /></td>
              <td v-for="listheader in list[0].list_header">
                {{ listheader.name }}
                <svg
                  v-if="listheader.has_sorting"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 8.375H11.375L7.4375 12.75L3.5 8.375Z"
                    fill="#333333"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.4375 2.25L11.375 6.625H3.5L7.4375 2.25Z"
                    fill="#333333"
                  />
                </svg>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="listItem in list[1].list_data">
              <td><input type="checkbox" name="" id="" /></td>
              <td v-for="listData in listItem.data">
                <span v-if="listData.type == 'text'">{{ listData.text }}</span>
                <span v-else-if="listData.type == 'label'">
                  <span class="status-complete">{{ listData.text }}</span>
                </span>
                <span v-else-if="listData.type == 'filter'">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#D9D9D9" />
                  </svg>
                  Niall Cooper
                </span>
                <div
                  v-else-if="listData.type == 'actions'"
                  class="operation-items"
                >
                  <span>{{ listData.actions[0].name }}</span
                  ><span
                    v-if="listData.actions[1].tab == 'active'"
                    class="operations-item active-operation"
                    >{{ listData.actions[1].name }}</span
                  >
                  <span v-else class="operations-item">Edit</span>
                  <span
                    v-if="listData.actions[2].tab == 'active'"
                    class="operations-item active-operation"
                    >{{ listData.actions[2].name }}</span
                  >
                  <span v-else class="operations-item">Delete</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination-wrapper">
        <!-- start simple pagination -->
        <ul id="pagination">
          <li>
            <a href="#">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.32605 1.03701L0.80055 5.69901C0.718592 5.78097 0.677612 5.87897 0.677612 5.99301C0.677612 6.10705 0.718592 6.20957 0.80055 6.30057L5.32605 10.9626C5.40801 11.0355 5.50367 11.0719 5.61305 11.0719C5.72242 11.0719 5.81809 11.031 5.90005 10.949C5.98201 10.867 6.02299 10.7714 6.02299 10.662C6.02299 10.5526 5.98201 10.457 5.90005 10.375L1.63442 6.00001L5.90005 1.62501C5.98201 1.54305 6.02299 1.44738 6.02299 1.33801C6.02299 1.22863 5.98201 1.13297 5.90005 1.05101C5.81809 0.969049 5.72242 0.92807 5.61305 0.92807C5.50367 0.92807 5.40801 0.964528 5.32605 1.03745V1.03701Z"
                  fill="#BDBDBD"
                />
              </svg>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li>
            <a href="#" class="">
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.40625 0.6875C2.84375 0.696542 3.206 0.844708 3.493 1.132C3.78 1.41929 3.92817 1.78154 3.9375 2.21875C3.92846 2.65625 3.78029 3.0185 3.493 3.3055C3.20571 3.5925 2.84346 3.74067 2.40625 3.75C1.96875 3.74096 1.6065 3.59279 1.3195 3.3055C1.0325 3.01821 0.884333 2.65596 0.875 2.21875C0.884042 1.78125 1.03221 1.419 1.3195 1.132C1.60679 0.845 1.96904 0.696833 2.40625 0.6875ZM7 0.6875C7.4375 0.696542 7.79975 0.844708 8.08675 1.132C8.37375 1.41929 8.52192 1.78154 8.53125 2.21875C8.52221 2.65625 8.37404 3.0185 8.08675 3.3055C7.79946 3.5925 7.43721 3.74067 7 3.75C6.5625 3.74096 6.20025 3.59279 5.91325 3.3055C5.62625 3.01821 5.47808 2.65596 5.46875 2.21875C5.47779 1.78125 5.62596 1.419 5.91325 1.132C6.20054 0.845 6.56279 0.696833 7 0.6875ZM11.5938 0.6875C12.0312 0.696542 12.3935 0.844708 12.6805 1.132C12.9675 1.41929 13.1157 1.78154 13.125 2.21875C13.116 2.65625 12.9678 3.0185 12.6805 3.3055C12.3932 3.5925 12.031 3.74067 11.5938 3.75C11.1562 3.74096 10.794 3.59279 10.507 3.3055C10.22 3.01821 10.0718 2.65596 10.0625 2.21875C10.0715 1.78125 10.2197 1.419 10.507 1.132C10.7943 0.845 11.1565 0.696833 11.5938 0.6875Z"
                  fill="#828282"
                />
              </svg>
            </a>
          </li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
          <li><a href="#">7</a></li>
          <li>
            <a href="#">
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.40625 0.6875C2.84375 0.696542 3.206 0.844708 3.493 1.132C3.78 1.41929 3.92817 1.78154 3.9375 2.21875C3.92846 2.65625 3.78029 3.0185 3.493 3.3055C3.20571 3.5925 2.84346 3.74067 2.40625 3.75C1.96875 3.74096 1.6065 3.59279 1.3195 3.3055C1.0325 3.01821 0.884333 2.65596 0.875 2.21875C0.884042 1.78125 1.03221 1.419 1.3195 1.132C1.60679 0.845 1.96904 0.696833 2.40625 0.6875ZM7 0.6875C7.4375 0.696542 7.79975 0.844708 8.08675 1.132C8.37375 1.41929 8.52192 1.78154 8.53125 2.21875C8.52221 2.65625 8.37404 3.0185 8.08675 3.3055C7.79946 3.5925 7.43721 3.74067 7 3.75C6.5625 3.74096 6.20025 3.59279 5.91325 3.3055C5.62625 3.01821 5.47808 2.65596 5.46875 2.21875C5.47779 1.78125 5.62596 1.419 5.91325 1.132C6.20054 0.845 6.56279 0.696833 7 0.6875ZM11.5938 0.6875C12.0312 0.696542 12.3935 0.844708 12.6805 1.132C12.9675 1.41929 13.1157 1.78154 13.125 2.21875C13.116 2.65625 12.9678 3.0185 12.6805 3.3055C12.3932 3.5925 12.031 3.74067 11.5938 3.75C11.1562 3.74096 10.794 3.59279 10.507 3.3055C10.22 3.01821 10.0718 2.65596 10.0625 2.21875C10.0715 1.78125 10.2197 1.419 10.507 1.132C10.7943 0.845 11.1565 0.696833 11.5938 0.6875Z"
                  fill="#828282"
                />
              </svg>
            </a>
          </li>
          <li><a href="#">10</a></li>
          <li>
            <a href="#">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.672941 1.03698C0.590982 1.12827 0.550003 1.22861 0.550003 1.33798C0.550003 1.44736 0.590982 1.54302 0.672941 1.62498L4.93857 5.99998L0.672941 10.375C0.590982 10.4569 0.550003 10.5526 0.550003 10.662C0.550003 10.7714 0.590982 10.867 0.672941 10.949C0.754899 11.0309 0.850566 11.0719 0.959941 11.0719C1.06932 11.0719 1.16498 11.0355 1.24694 10.9625L5.77244 6.30054C5.8544 6.21859 5.89538 6.11825 5.89538 5.99954C5.89538 5.88084 5.8544 5.7805 5.77244 5.69854L1.24694 1.03654C1.16498 0.963628 1.06932 0.92717 0.959941 0.92717C0.850566 0.92717 0.754899 0.963628 0.672941 1.03654V1.03698Z"
                  fill="#828282"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
