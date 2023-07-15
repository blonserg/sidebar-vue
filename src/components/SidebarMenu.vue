<script setup lang="ts">
import { shallowRef } from 'vue';
import { RouterLink } from 'vue-router';
import IconAngle from './icons/IconAngle.vue';
import IconActivity from './icons/IconActivity.vue';
import IconList from './icons/IconList.vue';
import IconInbox from './icons/IconInbox.vue';
import IconHome from './icons/IconHome.vue';
import IconUsers from './icons/IconUsers.vue';
import IconLogo from './icons/IconLogo.vue';
import IconFolder from './icons/IconFolder.vue';
import IconPlus from './icons/IconPlus.vue';
import IconMore from './icons/IconMore.vue';
import IconSearch from './icons/IconSearch.vue';

const isSidebarOpen = shallowRef<Boolean>(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<template>
  <div class="wrapper">
    <aside 
    :vue:is-open="isSidebarOpen"
    :class="isSidebarOpen ? 'aside-open' : ''"
    >
      <div>
        <div class="header-top">
          <button class="sidebar-toggle" :class="isSidebarOpen ? 'toggle-button' : ''">
            <IconAngle @click="toggleSidebar" />
          </button>
          <Transition name="fade">
            <span v-show="isSidebarOpen"><IconLogo /></span>
          </Transition>
        </div>  

        <div class="search-wrapper">
          <input type="text" class="search" placeholder="Search">
          <IconSearch class="search-icon" />
        </div>
        <ul>
          <li>
            <router-link to="/">
              <span class="header-icon">
                <IconHome />
              </span>
              <Transition name="fade">
                <span v-show="isSidebarOpen">Главная</span>
              </Transition>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <span class="header-icon">
                <IconInbox />
                <span v-show="!isSidebarOpen" class="header-icon-notification mini"></span>
              </span>
              <Transition name="fade">
                <span v-show="isSidebarOpen">
                  Входящие
                  <span class="header-icon-notification">12</span>
                </span>
              </Transition>
            </router-link>
          </li>
          <li>
            <router-link to="/tasks">
              <span class="header-icon">
                <IconList />
              </span>
              <Transition name="fade">
                <span v-show="isSidebarOpen">Задачи</span>
              </Transition>
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <span class="header-icon">
                <IconActivity />
              </span>
              <Transition name="fade">
                <span v-show="isSidebarOpen">Активность</span>
              </Transition>
            </router-link>
          </li>
          <li>
            <router-link to="/team">
              <span class="header-icon">
                <IconUsers />
              </span>
              <Transition name="fade">
                <span v-show="isSidebarOpen">Команда</span>
              </Transition>
            </router-link>
          </li>
        </ul>
        <ul class="header-folders">
          <li class="header-folders-li">
            <router-link to="/">
              <span class="header-icon">
                <IconFolder />
              </span>
              <Transition name="fade">
                <span v-show="isSidebarOpen">Проекты</span>
              </Transition>
            </router-link>
              <ul v-show="isSidebarOpen" class="header-subfolders">
                <li>
                  <span class="icon icon-design"></span>
                  <span>Дизайн</span>
                </li>
                <li>
                  <span class="icon icon-web"></span>
                  <span>Веб</span>
                </li>
                <li>
                  <span class="icon icon-redaction"></span>
                  <span>Редактура</span>
                </li>
              </ul>
          </li>
        </ul>
      </div>
      <div class="header-bottom">
        <div class="header-bottom-button">
          <button class="button-create">
            <IconPlus />
            <span v-show="isSidebarOpen">Создать проект</span>
          </button>
        </div>
      </div>
      <div class="developer">
        <div class="avatar">
          <img src="../assets/avatar.png" alt="avatar">
          <span class="avatar-online"></span>
        </div>
        <div v-show="isSidebarOpen" class="developer-info">
          <div class="developer-txt">
            <span class="name">Михаил Воробьев</span>
            <span class="job">Разработчик</span>
          </div>
          <span style="cursor: pointer">
            <IconMore />
          </span>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/colors' as clr;

$sidebar-width: 6rem;
$toggle-duration: 300ms;
$sidebar-padding-inline-start: 1rem;

aside {
  color: clr.$primary;
  background: clr.$bg-dark;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  transition: all $toggle-duration;
  width: $sidebar-width;
}

aside[vue\:is-open=true] {
  width: 20rem;

  @media all and (max-width: 768px) {
    width: 100vw;
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .aside-open & {
    margin: 0 1.85rem;
  }
}

img {
  object-fit: contain;
}

li {
  min-width: fit-content;
  cursor: pointer;
  margin-bottom: 0.5rem;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .aside-open & {
    a {
      justify-content: start;
    }

    .router-link-exact-active {
      background: #3F3F46;
      border-radius: 4px;
    }
  }
}

li:not(.header-folders-li):hover {
  color: clr.$secondary;
  background-color: lighten($color: clr.$bg-dark, $amount: 5);
}

.sidebar-head {
  position: relative;
}

h4 {
  padding-block-end: 1rem;
  padding-inline-start: $sidebar-padding-inline-start;
  user-select: none;
  pointer-events: none;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.125ch;
  transition: opacity $toggle-duration;
}

h4[transparent=true] {
  opacity: 0;
}

button {
  cursor: pointer;
  transition-duration: $toggle-duration;
  transition-property: transform, left, top;
  left: 0;
  top: 0;
  padding: 10px;

  &.toggle-button {
    left: 0;
    top: 0;
    margin-right: 1rem;
  }
}

.router-link-exact-active {
  color: #fff;
}

.header {
  &-top {
    background-color: #27272A;
    padding: 24px 22px 24px 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    .aside-open & {
      justify-content: start;
    }
  }

  &-icon {
    padding: 8px;
    position: relative;
    display: flex;
    align-items: center;

    .router-link-exact-active & {
      background: #3F3F46;
      border-radius: 4px;
    }

    &-notification {
      background: #8B5CF6;
      padding: 4px;
      border-radius: 50%;
      font-weight: bold;
      position: absolute;
      right: 0;
      bottom: 5px;

      &.mini {
        position: absolute;
        top: 0.4rem;
        right: 0;
        bottom: auto;
      }
    }
  }

  &-folders {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #27272A;

    .aside-open & {
      margin: 2rem 1.5rem 0 1.5rem;
    }
  }

  &-subfolders {
    .aside-open & {
      margin: 2rem 1.5rem 0 0;
    }

    li {
      margin-bottom: 1rem;
      padding: 0.5rem 0;
    }
  }
}

.search-wrapper {
  margin: 0 1.85rem 1rem 1.85rem;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
}

.search {
  width: 100%;
  height: 36px;
  padding: 8px 8px 8px 28px;
  border-radius: 4px;
  gap: 8px;
  border: 1px solid #3F3F46;
  transition: padding 0.5s;

  .aside-open & {
    padding: 8px 8px 8px 40px;
    transition: padding 0.5s;
  }
}
.icon {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 1rem;

  &-design {
    background: #A855F7;
  }

  &-web {
    background: #84CC16;
  }

  &-redaction {
    background: #EC4899;
  }
}

.button-create {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;
  padding: 10px;
  border-radius: 4px;
  gap: 4px;
  background: #7C3AED;
  color: #fff;

  .aside-open & {
    padding: 10px 16px 10px 16px;
  }
}

.header-bottom-button {
  margin: 0 1.8rem 2rem 1.8rem;
  .aside-open & {
    margin: 0 1.5rem 2rem 1.5rem;
  }
}

.developer {
  background: #27272A;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
}

.developer-txt {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
}

.job {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #A1A1AA;
}

.avatar {
  position: relative;

  .aside-open & {
    margin-right: 1rem;
  }
}

.avatar-online {
  width: 12px;
  height: 12px;
  background: #22C55E;
  border: 2px solid #FFFFFF;
  position: absolute;
  border-radius: 50%;
  bottom: 0.4rem;
  right: 0;
}

.developer-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
