<script>
import JsonData from "../../user.json";
export default {
  data() {
    return {
      data: JsonData,
    };
  },
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-brand">
      <img src="../assets/img/logo.png" class="siebar-title" alt="logo" />
    </div>
    <nav class="sidebar-nav">
      <div class="nav-item" v-for="item in data.sidebar" :key="item.id">
        <div v-if="item.hasSubMenu">
          <div class="dropdown-nav-item">
            <button class="btn dropdown-btn" id="btn">
              {{ item.name }}
              <i class="fa-solid fa-chevron-down drop-icon" id="arrow"></i>
            </button>

            <div class="dropdown" id="dropdown">
              <div
                class="sub-dropdown-nav-item"
                v-for="subitem in item.subMenu"
                :key="subitem.id"
              >
                <button class="sub-btn sub-dropdown-btn" :id="subitem.id">
                  <span
                    ><img :src="subitem.iconPath" alt="" />
                    {{ subitem.name }}</span
                  >
                  <i
                    class="fa-solid fa-chevron-down drop-icon"
                    :id="subitem.arrowid"
                  ></i>
                </button>

                <div class="dropdown sub-dropdown" :id="subitem.dropid">
                  <div
                    class="dropdown-nav"
                    v-for="subsubitem in subitem.subMenu"
                    :key="subsubitem.id"
                  >
                    <div class="sub-dropdown-nav-item">
                      <button
                        class="sub-btn sub-dropdown-btn"
                        :id="subsubitem.id"
                      >
                        {{ subsubitem.name }}
                        <i
                          class="fa-solid fa-chevron-down drop-icon"
                          :id="subsubitem.arrowid"
                        ></i>
                      </button>

                      <div class="dropdown" :id="subsubitem.dropid">
                        <div>
                          <a
                            href="#"
                            class="sub-drop-nav-link"
                            style="text-align: left"
                            v-for="finallink in subsubitem.subMenu"
                            :key="finallink.id"
                            >{{ finallink.name }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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