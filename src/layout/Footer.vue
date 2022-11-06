<template>
  <div class="wrap">
    <div class="footer">
      <div class="container">
        <div class="theme-selector">
          <h2 data-v-0f519cab="">Site Theme</h2>
          <div
            class="el-tooltip theme-preview default"
            aria-describedby="el-tooltip-733"
            tabindex="0"
          >
            A
          </div>
          <div
            class="el-tooltip theme-preview dark"
            aria-describedby="el-tooltip-9752"
            tabindex="0"
          >
            A
          </div>
        </div>
        <div class="links">
          <section>
            <!---->
            <a
              href="/forum/thread/2340"
              class=""
            >
              Donate
            </a>
            <a
              href="https://anilist.co"
              target="_blank"
            >
              AniList.co
            </a>
            <a
              href="http://anichart.net"
              target="_blank"
            >
              AniChart.net
            </a>
          </section>
          <section data-v-0f519cab="">
            <a
              href="/apps"
              class=""
            >
              Apps
            </a>
            <a
              href="/site-stats"
              class=""
            >
              Site Stats
            </a>
            <a
              href="/recommendations"
              class=""
            >
              Recommendations
            </a>
            <a
              href="https://github.com/AniList/ApiV2-GraphQL-Docs"
              target="_blank"
            >
              API
            </a>
          </section>
          <section data-v-0f519cab="">
            <a
              href="https://discord.gg/TF428cr"
              target="_blank"
            >
              Discord
            </a>
            <a
              href="https://twitter.com/AniListco"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/AniListco"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://github.com/AniList"
              target="_blank"
            >
              GitHub
            </a>
          </section>
          <section data-v-0f519cab="">
            <a
              href="https://submission-manual.anilist.co/"
              target="_blank"
            >
              Add Data
            </a>
            <a
              href="/moderators"
              class=""
            >
              Moderators
            </a>
            <a
              href="mailto:contact@anilist.co"
              target="_top"
            >
              Contact
            </a>
            <a
              href="/terms"
              target="_blank"
            >
              Terms &amp; Privacy
            </a>
            <a
              href="/sitemap/index.xml"
              target="_blank"
            >
              Site Map
            </a>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  text-align: center;
}

.footer {
  background: #11161d;
  color: #7a858f;
  color: #a0b1c5;
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 600;
  margin-top: 20px;
  min-height: 100px;
  padding: 50px 30px;
  text-align: left;
  width: 100%;
}
h2 {
  color: #3db4f2;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 14px;
}
.default {
  background: #edf1f5;
  color: #2e3c48;
}

@media (min-width: 1540px) {
  .container {
    max-width: 1520px;
    padding-left: 100px;
    padding-right: 100px;
  }
}
@media (min-width: 1040px) and (max-width: 1540px) {
  .container {
    max-width: 1140px;
    padding-left: 50px;
    padding-right: 50px;
  }
}
.container {
  display: flex;
  margin: 0 auto;
  min-width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
}
.theme-preview {
  border-radius: 3px;
  border: 2px solid #46546b;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  height: 25px;
  margin-right: 10px;
  padding-left: 2px;
  padding-top: 5px;
  width: 25px;
}
.links {
  display: flex;
  font-size: 15px;
  margin-left: auto;
}
.links a {
  display: block;
  padding: 10px;
  color: inherit;
  text-decoration: none;
  transition: 0.15s;
  outline: 0;
}
a:hover {
  color: rgb(61, 180, 242);
}
</style>
