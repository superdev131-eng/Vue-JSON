<script>
import JsonData from "../../user.json";
var status = false;
export default {
  data() {
    return {
      Dropdown: status,
      data: JsonData,
    };
  },
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-brand">
      <img src="img/logo.png" class="siebar-title" alt="logo" />
    </div>
    <nav class="sidebar-nav">
      <div class="nav-item" v-for="item in data.sidebar" :key="item.id">
        <div v-if="item.hasSubMenu">
          <div class="customDropdown">
            <div @click="Dropdown = !Dropdown" class="dropdownHeader">
              <span>Form Menu</span>
              <i v-if="Dropdown" class="fa-solid fa-chevron-up drop-icon"> </i>
              <i v-else class="fa-solid fa-chevron-down drop-icon"> </i>
            </div>
            <div v-if="Dropdown" class="dropdownItems">
              <ul class="dropdownList">
                <li v-for="item in data.sidebar[4].subMenu">
                  <button
                    @click="item.id = !item.id"
                    class="sub-btn sub-dropdown-btn"
                  >
                    <span
                      ><img :src="item.iconPath" alt="" /> {{ item.name }}</span
                    >
                    <i v-if="item.id" class="fa-solid fa-chevron-up drop-icon">
                    </i>
                    <i v-else class="fa-solid fa-chevron-down drop-icon"> </i>
                  </button>
                  <div v-if="item.id" class="dropdownItems">
                    <div v-for="subitem in item.subMenu">
                      <button
                        @click="subitem.id = !subitem.id"
                        class="sub-btn"
                      >
                        <span> {{ subitem.name }}</span>
                        <i
                          v-if="subitem.id"
                          class="fa-solid fa-chevron-up drop-icon"
                        >
                        </i>
                        <i v-else class="fa-solid fa-chevron-down drop-icon">
                        </i>
                      </button>
                      <div v-if="subitem.id">
                        <div v-for="subsubitem in subitem.subMenu">
                          <button class="sub-btn hoverefect">
                            <span> {{ subsubitem.name }}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-else>
          <a href="#" class="nav-link">{{ item.name }}</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
