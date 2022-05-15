<template>
  <div class="ml-20">
    <img
      class="w-10/12 h-[31.2rem] rounded-2xl mx-auto"
      src="../../assets/img/mountains.jpg"
      alt=""
    />
    <div
      class="text-3xl relative w-[40rem] bottom-32 text-main-light left-36"
      v-html="article.title"
    ></div>
    <div
      class="relative w-[40rem] bottom-36 left-36 pb-4 font-raleway font-medium text-main-light"
    >
      <span
        class="after:content-['●'] after:px-4 after:text-base after:text-main-light"
      >
        20 июл, 2021</span
      >
      <span>JavaScript</span>
      <span>|</span>
      <span>Функциональное программирование</span>
    </div>
    <div class="flex justify-center">
      <nav-bar
        type="article-section"
        :activeSection="activeSection"
        @setActive="changeActiveSection"
      />
      <article
        class="w-[55rem] font-normal text-[1.18rem] leading-relaxed"
        v-html="article.content"
        ref="article"
      ></article>
      <nav-bar type="article-title" :title="article.title"></nav-bar>
    </div>
    <div>
      <h5 class="mt-36">Коментарии</h5>
    </div>
  </div>
</template>

<script>
import { API, getJSON } from "../../service/http";

const stringId = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};

const cache = {
  scrollDistance: 0,
  isClicked: false,
  clickedSection: null,
  activeSectionBeforeClicked: null,
  step: -1,
  wasAbove: false,
};

export default {
  async asyncData(ctx) {
    let article;
    try {
      await getJSON(API.post + "/" + ctx.params.id).then((res) => {
        article = res.data[0];
      });

      return { article };
    } catch (err) {
      console.error(err);
    }
  },
  mounted() {
    this.midifyHeadings();
    this.observe();
  },
  data() {
    return {
      article: [],
      sectionList: [],
      activeSection: "Заголовок",
    };
  },
  methods: {
    midifyHeadings() {
      const child = this.$refs.article.childNodes;
      const arrayChild = Array.from(child);

      const headings = arrayChild.filter(
        (child) =>
          child.nodeName === "H2" && child.outerText && child.outerText !== "\n"
      );

      headings.forEach((el, inx) => {
        el.id = stringId[inx + 1];
        this.sectionList.push(el);
      });
    },

    observe() {
      const options = {
        threshold: [0.5],
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          //Определяем находится ли цель выше или нииже области просмотра
          const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
          cache.wasAbove = isAbove;
          this.scrolltrigger(entry);
        });
      }, options);

      this.sectionList.forEach((el) => {
        observer.observe(el);
      });
    },

    scrolltrigger(visibleSection) {
      //console.log(cache.wasAbove);
      let scrollDistance = 0;
      scrollDistance = this.determineScrollDistance();
      if (scrollDistance === 0) return;

      // if scroll direction to down
      if (cache.scrollDistance && cache.scrollDistance < scrollDistance) {
        // until the section title crosses the top border of the article, the current section is not changed
        if (cache.wasAbove) {
          this.scrollToDown(visibleSection.target.innerText);
        }
      } else if (
        cache.scrollDistance &&
        cache.scrollDistance > scrollDistance
      ) {
        if (!cache.wasAbove) {
          this.scrollToUp(visibleSection.target.innerText);
        }
      }
      cache.scrollDistance = scrollDistance;
    },

    determineScrollDistance() {
      const scollDistance = window.scrollY;
      return scollDistance;
    },

    scrollToDown(visibleSectionName) {
      /*if (cache.isClicked) {
        console.log(cache.clickedSection);

        this.activeSection = cache.clickedSection;
        cache.step--;
        if (cache.step === 0) {
          cache.step = -1;
          cache.isClicked = false;
        }
        console.log("down", cache.step, cache.isClicked);*/

      this.activeSection = visibleSectionName;
    },

    scrollToUp(visibleSectionName) {
      /* if (cache.isClicked) {
        this.activeSection = cache.clickedSection;
        if (cache.step === 0) {
          cache.step = -1;
          cache.isClicked = false;
        }*/

      const sectionListName = this.sectionList.map(
        (section) => section.innerText
      );
      const currentSectionIndex = sectionListName.indexOf(visibleSectionName);
      this.activeSection = sectionListName[currentSectionIndex - 1];
    },
    changeActiveSection(val) {
      /* cache.activeSectionBeforeClicked = this.activeSection;
      cache.isClicked = val.isClicked;
      cache.clickedSection = val.activeSection;

      const sectionListName = this.sectionList.map(
        (section) => section.innerText
      );
      const beforeSectionIndex = sectionListName.indexOf(
        cache.activeSectionBeforeClicked
      );
      const clicedSectionIndex = sectionListName.indexOf(cache.clickedSection);
      if (clicedSectionIndex > beforeSectionIndex) {
        cache.step = clicedSectionIndex - beforeSectionIndex;
      } else {
        cache.step = beforeSectionIndex - clicedSectionIndex;
      }*/
    },
  },
};
</script>

<style lang="scss" scoped></style>
