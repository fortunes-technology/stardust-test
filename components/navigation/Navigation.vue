<template>
  <no-ssr>
    <header class="main-header dark-header">
      <div class="header-inner container">
        <div class="logo-holder">
          <img
            src="~assets/icons/logo.svg"
            alt=""
          >
        </div>
        <div class="header-right-section">
          <!--  navigation -->
          <div class="nav-holder main-menu main-main-menu">
            <nav>
              <div class="search-input-wrapper">
                <input
                  class="search-input"
                  placeholder="Runescape"
                />
              </div>
              <ul>
                <li>
                  <router-link
                    to="/"
                    class
                  >
                    <i class="fa fa-home" />
                    <span>Home</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/"
                    class
                  >
                    <i class="fa fa-random" />
                    <span>Exchange</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </no-ssr>
</template>
