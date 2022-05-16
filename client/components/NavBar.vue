<template>
  <div>
    <nav v-if="type === 'menu'" class="nav">
      <ul v-if="type === 'menu'" class="flex flex-col items-center mt-36">
        <li class="mb-6">
          <NuxtLink class="flex flex-col items-center" to="/">
            <div class="wrapper-icon">
              <svg
                class="sidebar-icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 26.39 26.39"
                style="enable-background: new 0 0 26.39 26.39"
                xml:space="preserve"
              >
                <g>
                  <g id="c14_house">
                    <path
                      d="M3.588,24.297c0,0-0.024,0.59,0.553,0.59c0.718,0,6.652-0.008,6.652-0.008l0.01-5.451c0,0-0.094-0.898,0.777-0.898h2.761
			c1.031,0,0.968,0.898,0.968,0.898l-0.012,5.434c0,0,5.628,0,6.512,0c0.732,0,0.699-0.734,0.699-0.734V14.076L13.33,5.913
			l-9.742,8.164C3.588,14.077,3.588,24.297,3.588,24.297z"
                    />
                    <path
                      d="M0,13.317c0,0,0.826,1.524,2.631,0l10.781-9.121l10.107,9.064c2.088,1.506,2.871,0,2.871,0L13.412,1.504L0,13.317z"
                    />
                    <polygon
                      points="23.273,4.175 20.674,4.175 20.685,7.328 23.273,9.525 		"
                    />
                  </g>
                  <g id="Capa_1_216_"></g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span class="sidebar-tooltip">Главная</span>
            </div>
          </NuxtLink>
        </li>
        <li class="mb-6">
          <NuxtLink
            class="flex flex-col items-center text-main-dark"
            to="/article/all"
          >
            <div class="wrapper-icon">
              <svg
                class="sidebar-icon"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 503.467 503.467"
                style="enable-background: new 0 0 503.467 503.467"
                xml:space="preserve"
              >
                <g transform="translate(1 1)">
                  <g>
                    <polygon
                      class="articles-polygon-1"
                      style="fill: #ffd0a1"
                      points="242.2,259.267 276.333,259.267 276.333,139.8 242.2,139.8 		"
                    />
                    <path
                      style="fill: #02102a"
                      d="M310.467,71.533V498.2H395.8V122.733v-51.2V37.4c0-9.387-7.68-17.067-17.067-17.067h-51.2
			c-9.387,0-17.067,7.68-17.067,17.067V71.533z"
                    />
                  </g>
                  <g>
                    <path
                      style="fill: #f1f5f9"
                      d="M498.2,122.733v358.4c0,9.387-7.68,17.067-17.067,17.067H395.8V122.733H498.2z M498.2,88.6v34.133
			H395.8v-51.2h85.333C490.52,71.533,498.2,79.213,498.2,88.6z"
                    />
                    <path
                      style="fill: #02102a"
                      d="M122.733,259.267h51.2V139.8h-51.2V259.267z M208.067,54.467V498.2H88.6V105.667v-51.2H208.067z
			 M208.067,54.467H88.6V20.333c0-9.387,7.68-17.067,17.067-17.067H191c9.387,0,17.067,7.68,17.067,17.067V37.4V54.467z"
                    />
                  </g>
                  <path
                    style="fill: #f1f5f9"
                    d="M88.6,105.667V498.2H20.333c-9.387,0-17.067-7.68-17.067-17.067v-409.6
		c0-9.387,7.68-17.067,17.067-17.067H88.6V105.667z"
                  />
                  <polygon
                    style="fill: #aab1ba"
                    points="122.733,259.267 173.933,259.267 173.933,139.8 122.733,139.8 	"
                  />
                  <path
                    style="fill: #f1f5f9"
                    d="M242.2,259.267h34.133V139.8H242.2V259.267z M310.467,71.533V498.2h-102.4V54.467V37.4h102.4V71.533
		z"
                  />
                </g>
                <path
                  style="fill: #02102a"
                  d="M482.133,503.467h-460.8C9.387,503.467,0,494.08,0,482.133v-409.6C0,60.587,9.387,51.2,21.333,51.2
	h34.133c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267H21.333c-6.827,0-12.8,5.973-12.8,12.8v409.6
	c0,6.827,5.973,12.8,12.8,12.8h64v-384H38.4c-2.56,0-4.267-1.707-4.267-4.267S35.84,102.4,38.4,102.4h46.933V21.333
	C85.333,9.387,94.72,0,106.667,0H192c11.947,0,21.333,9.387,21.333,21.333v12.8h64c2.56,0,4.267,1.707,4.267,4.267
	s-1.707,4.267-4.267,4.267h-64v452.267H307.2V38.4c0-11.947,9.387-21.333,21.333-21.333h51.2c11.947,0,21.333,9.387,21.333,21.333
	v81.067h55.467c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267h-55.467v366.933h81.067
	c6.827,0,12.8-5.973,12.8-12.8V89.6c0-6.827-5.973-12.8-12.8-12.8h-51.2c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h51.2c11.947,0,21.333,9.387,21.333,21.333v392.533C503.467,494.08,494.08,503.467,482.133,503.467z
	 M315.733,494.933h76.8V38.4c0-7.68-5.12-12.8-12.8-12.8h-51.2c-6.827,0-12.8,5.973-12.8,12.8v29.867h46.933
	c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267h-46.933V494.933z M93.867,494.933H204.8v-473.6
	c0-7.68-5.12-12.8-12.8-12.8h-85.333c-6.827,0-12.8,5.973-12.8,12.8V51.2h81.067c2.56,0,4.267,1.707,4.267,4.267
	c0,2.56-1.707,4.267-4.267,4.267H93.867V494.933z M465.067,452.267h-34.133c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h34.133c2.56,0,4.267,1.707,4.267,4.267C469.333,450.56,467.627,452.267,465.067,452.267z
	 M362.667,452.267H345.6c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267
	C366.933,450.56,365.227,452.267,362.667,452.267z M277.333,452.267H243.2c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h34.133c2.56,0,4.267,1.707,4.267,4.267C281.6,450.56,279.893,452.267,277.333,452.267z
	 M174.933,452.267h-51.2c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h51.2c2.56,0,4.267,1.707,4.267,4.267
	C179.2,450.56,177.493,452.267,174.933,452.267z M55.467,452.267H38.4c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267C59.733,450.56,58.027,452.267,55.467,452.267z
	 M465.067,418.133h-34.133c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h34.133c2.56,0,4.267,1.707,4.267,4.267
	C469.333,416.427,467.627,418.133,465.067,418.133z M362.667,418.133H345.6c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267C366.933,416.427,365.227,418.133,362.667,418.133z
	 M277.333,418.133H243.2c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h34.133c2.56,0,4.267,1.707,4.267,4.267
	C281.6,416.427,279.893,418.133,277.333,418.133z M174.933,418.133h-51.2c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h51.2c2.56,0,4.267,1.707,4.267,4.267C179.2,416.427,177.493,418.133,174.933,418.133z
	 M55.467,418.133H38.4c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267
	C59.733,416.427,58.027,418.133,55.467,418.133z M465.067,298.667c-2.56,0-4.267-1.707-4.267-4.267v-85.333
	c0-2.56,1.707-4.267,4.267-4.267s4.267,1.707,4.267,4.267V294.4C469.333,296.96,467.627,298.667,465.067,298.667z M430.933,298.667
	c-2.56,0-4.267-1.707-4.267-4.267v-85.333c0-2.56,1.707-4.267,4.267-4.267s4.267,1.707,4.267,4.267V294.4
	C435.2,296.96,433.493,298.667,430.933,298.667z M277.333,264.533H243.2c-2.56,0-4.267-1.707-4.267-4.267V140.8
	c0-2.56,1.707-4.267,4.267-4.267h34.133c2.56,0,4.267,1.707,4.267,4.267v119.467C281.6,262.827,279.893,264.533,277.333,264.533z
	 M247.467,256h25.6V145.067h-25.6V256z M174.933,264.533h-51.2c-2.56,0-4.267-1.707-4.267-4.267V140.8
	c0-2.56,1.707-4.267,4.267-4.267h51.2c2.56,0,4.267,1.707,4.267,4.267v119.467C179.2,262.827,177.493,264.533,174.933,264.533z
	 M128,256h42.667V145.067H128V256z M55.467,247.467H38.4c-2.56,0-4.267-1.707-4.267-4.267s1.707-4.267,4.267-4.267h17.067
	c2.56,0,4.267,1.707,4.267,4.267S58.027,247.467,55.467,247.467z M362.667,213.333H345.6c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267C366.933,211.627,365.227,213.333,362.667,213.333z
	 M55.467,213.333H38.4c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267
	C59.733,211.627,58.027,213.333,55.467,213.333z M362.667,179.2H345.6c-2.56,0-4.267-1.707-4.267-4.267
	c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267C366.933,177.493,365.227,179.2,362.667,179.2z
	 M362.667,145.067H345.6c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h17.067c2.56,0,4.267,1.707,4.267,4.267
	C366.933,143.36,365.227,145.067,362.667,145.067z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span class="sidebar-tooltip">Статьи</span>
            </div>
          </NuxtLink>
        </li>
        <li class="mb-6">
          <NuxtLink
            class="flex flex-col items-center text-main-dark"
            to="/article/all"
          >
            <div class="wrapper-icon">
              <svg
                class="sidebar-icon"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <path
                  class="collections-path-1"
                  d="M143.304,512H76.522c-9.22,0-16.696-7.475-16.696-16.696V16.696C59.826,7.475,67.301,0,76.522,0
	h66.783C152.525,0,160,7.475,160,16.696v478.609C160,504.525,152.525,512,143.304,512z"
                />
                <path
                  class="collections-path-2"
                  d="M402.087,512H126.609V0h275.478c27.662,0,50.087,22.424,50.087,50.087v411.826
	C452.174,489.576,429.749,512,402.087,512z"
                />
                <path
                  class="collections-path-3"
                  d="M402.087,0h-77.913v512h77.913c27.662,0,50.087-22.424,50.087-50.087V50.087
	C452.174,22.424,429.749,0,402.087,0z"
                />
                <path
                  class="collections-path-4"
                  d="M356.891,201.76l-32.717-32.716l-32.717,32.716c-10.317,10.321-28.501,3.449-28.501-12.21l0-189.55
	h122.435v189.521C385.391,205.302,367.142,212.015,356.891,201.76z"
                />
                <g>
                  <path
                    class="collections-path-5"
                    d="M339.324,362.271h-99.866c-9.22,0-16.696-7.475-16.696-16.696c0-9.22,7.475-16.696,16.696-16.696
                h99.866c9.22,0,16.696,7.475,16.696,16.696C356.019,354.796,348.545,362.271,339.324,362.271z"
                  />
                  <path
                    class="collections-path-6"
                    d="M339.324,421.025h-99.866c-9.22,0-16.696-7.475-16.696-16.696c0-9.22,7.475-16.696,16.696-16.696
		h99.866c9.22,0,16.696,7.475,16.696,16.696C356.019,413.55,348.545,421.025,339.324,421.025z"
                  />
                </g>
                <path
                  class="collections-path-7"
                  d="M324.174,0v169.043l32.717,32.716c10.252,10.256,28.501,3.542,28.501-12.239V0H324.174z"
                />
                <g>
                  <path
                    class="collections-path-8"
                    d="M339.324,328.88h-15.15v33.391h15.15c9.22,0,16.696-7.475,16.696-16.696
                C356.019,336.355,348.545,328.88,339.324,328.88z"
                  />
                  <path
                    class="collections-path-9"
                    d="M339.324,387.634h-15.15v33.391h15.15c9.22,0,16.696-7.475,16.696-16.696
		C356.019,395.109,348.545,387.634,339.324,387.634z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span class="sidebar-tooltip">Коллекция</span>
            </div>
          </NuxtLink>
        </li>
        <li class="mb-6">
          <NuxtLink
            class="flex flex-col items-center text-main-dark"
            to="/article/all"
          >
            <div class="wrapper-icon">
              <svg
                class="sidebar-icon w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 100 100"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M61.8,29.4l8.9,8.9l0,0c2,1.9,2,5.1,0,7l0,0L47.5,68.4V47.3V36.6l7.2-7.3C56.6,27.4,59.9,27.4,61.8,29.4z"
                  />
                </g>
                <path
                  d="M37.5,20H25c-2.8,0-5,2.2-5,5v43.8C20,75,25,80,31.2,80s11.2-5,11.2-11.2V25C42.5,22.2,40.2,20,37.5,20z
	 M31.2,73.8c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S34,73.8,31.2,73.8z"
                />
                <g>
                  <path
                    d="M75,57.5h-8.8l-6,6H74L73.9,74H49.8l-6,6H75c2.8,0,5-2.2,5-5V62.5C80,59.8,77.8,57.5,75,57.5L75,57.5z"
                  />
                </g>
              </svg>
              <span class="sidebar-tooltip sidebar-tooltip_categories"
                >Категории</span
              >
            </div>
          </NuxtLink>
        </li>
        <li lass="mb-6">
          <NuxtLink
            class="flex flex-col items-center text-main-dark"
            to="/article/all"
          >
            <div class="wrapper-icon">
              <svg
                class="sidebar-icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 940.2 940.2"
                style="enable-background: new 0 0 940.2 940.2"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M414.226,674.899c0-49.399,15.5-95.3,41.9-133h-265.7c-13.8,0-25-11.199-25-25c0-13.8,11.2-25,25-25h313.1
		c39.5-31,89.299-49.5,143.299-49.5c18.701,0,36.9,2.2,54.4,6.4V52.9c0-29.2-23.699-52.9-52.9-52.9H364.626h-94.301v17.5
		c0.2,1.8,0.301,3.7,0.301,5.6V168c0,41.1-33.4,74.5-74.5,74.5h-144.9c-1.5,0-3.1-0.1-4.6-0.2h-18.5v554c0,29.2,23.7,52.9,52.9,52.9
		h283.601h128.4C444.825,806.5,414.226,744.2,414.226,674.899z M190.426,356.3h369.899c13.801,0,25,11.2,25,25s-11.199,25-25,25
		H190.426c-13.8,0-25-11.2-25-25S176.625,356.3,190.426,356.3z M375.325,669.399h-185c-13.8,0-25-11.199-25-25c0-13.8,11.2-25,25-25
		h185c13.801,0,25,11.2,25,25C400.325,658.2,389.126,669.399,375.325,669.399z"
                  />
                  <path
                    d="M51.226,212.5h144.9c24.6,0,44.5-19.9,44.5-44.5V23.1c0-13.4-11-22.3-22.4-22.3c-5.5,0-11,2-15.6,6.6l-167.2,167.1
		C21.426,188.5,31.326,212.5,51.226,212.5z"
                  />
                  <path
                    d="M835.526,810.6l-10.801-10.8L813.926,789c22.299-32.5,35.299-71.8,35.299-114.2c0-81.6-48.5-152-118.1-184.1
		c-4.9-2.301-9.9-4.301-15-6.2c-4.9-1.8-9.9-3.4-15-4.8c-17.301-4.801-35.5-7.4-54.4-7.4c-31,0-60.4,7-86.6,19.5
		c-25.301,12-47.699,29.1-65.9,50c-31.099,35.6-49.9,82.1-49.9,133c0,74.1,40,139,99.5,174.3c9.801,5.8,20.201,10.9,31.102,15
		c22.398,8.5,46.6,13.2,72,13.2c8.299,0,16.398-0.5,24.398-1.5c33-4,63.5-15.9,89.701-33.9l10.699,10.9l10.701,10.7l65.699,65.7
		c7.301,7.3,16.9,11,26.5,11s19.199-3.7,26.5-11c14.6-14.601,14.6-38.4,0-53L835.526,810.6z M646.825,547.399
		c19.4,0,37.9,4.4,54.4,12.2c5.201,2.5,10.201,5.3,15,8.4c5.301,3.399,10.301,7.3,15,11.399c26.4,23.4,43.1,57.5,43.1,95.5
		s-16.699,72.101-43.1,95.5c-4.699,4.2-9.699,8-15,11.4c-4.799,3.1-9.799,5.9-15,8.4c-16.5,7.8-34.9,12.199-54.4,12.199
		c-70.299,0-127.5-57.199-127.5-127.5C519.325,604.6,576.426,547.399,646.825,547.399z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span class="sidebar-tooltip">Приск</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <nav v-else-if="type === 'article-section'" class="nav-article">
      <ul class="flex flex-col">
        <li>
          <a
            class="anchor-links mx-auto"
            :class="activeSection === 'Аннотация' ? 'anchor-links_active' : ''"
            :style="{ writingMode: 'vertical-rl' }"
            @click="setActive(1)"
            href="#"
            v-scroll-to="'#one'"
            ref="anchor-1"
            >Аннотация</a
          >
        </li>

        <li>
          <a
            class="anchor-links"
            :class="activeSection === 'Раздел #1' ? 'anchor-links_active' : ''"
            :style="{ writingMode: 'vertical-rl' }"
            @click="setActive(2)"
            href="#"
            v-scroll-to="'#two'"
            ref="anchor-2"
            >Раздел #1</a
          >
        </li>

        <li>
          <a
            class="anchor-links"
            :class="activeSection === 'Раздел #2' ? 'anchor-links_active' : ''"
            :style="{ writingMode: 'vertical-rl' }"
            @click="setActive(3)"
            href="#"
            v-scroll-to="'#three'"
            ref="anchor-3"
            >Раздел #2</a
          >
        </li>
        <li>
          <a
            class="anchor-links"
            :class="activeSection === 'Раздел #3' ? 'anchor-links_active' : ''"
            :style="{ writingMode: 'vertical-rl' }"
            @click="setActive(4)"
            href="#"
            v-scroll-to="'#four'"
            ref="anchor-4"
            >Раздел #3</a
          >
        </li>
        <li>
          <a
            class="anchor-links"
            :class="activeSection === 'Раздел #4' ? 'anchor-links_active' : ''"
            :style="{ writingMode: 'vertical-rl' }"
            @click="setActive(5)"
            href="#"
            v-scroll-to="'#five'"
            ref="anchor-5"
            >Раздел #4</a
          >
        </li>
        <li>
          <a
            class="anchor-links"
            :class="activeSection === 'Вывод' ? 'anchor-links_active' : ''"
            :style="{ writingMode: 'vertical-rl' }"
            @click="setActive(6)"
            href="#"
            v-scroll-to="'#six'"
            ref="anchor-6"
            >Вывод</a
          >
        </li>
      </ul>
    </nav>
    <nav v-else-if="type === 'article-title'" class="nav-article">
      <a
        class="rotate-180 anchor-links"
        :style="{ writingMode: 'vertical-rl' }"
        href="#"
        >{{ innerHeaderText }}
      </a>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "nav-bar",
  props: {
    type: { type: String, required: true },
    activeSection: { type: String },
    title: { type: String },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
    innerHeaderText() {
      let result = "";
      return (result = this.title.replace(/<[^>]+>/g, ""));
    },
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
    }),
    setActive(indexAnchor) {
      this.$emit("setActive", {
        activeSection: this.$refs[`anchor-${indexAnchor}`].textContent,
        isClicked: true,
      });
    },
    logout() {
      this.logoutAction();
    },
  },
};
</script>

<style>
.nav {
  @apply fixed top-0 left-0 h-screen m-0
        bg-main-dark shadow-lg w-20 z-50;
}
.nav-article {
  @apply sticky top-14;
}
.anchor-links {
  @apply rotate-180 uppercase text-main-dark text-[1.05rem] font-raleway font-medium
  my-1.5 hover:text-blueGray-400;
}
.anchor-links_active {
  @apply font-bold hover:text-main-dark;
}
.wrapper-icon {
  @apply bg-blueGray-100 px-1 w-12 h-12
        hover:bg-blueGray-400
        hover:text-main-light
        rounded-3xl hover:rounded-xl
        transition-all duration-300 ease-linear;
}
.wrapper-icon:hover > .sidebar-icon {
  color: #ffff;
}

.collections-path-1,
.collections-path-2,
.collections-path-3 {
  fill: #02102a;
}
.collections-path-4,
.collections-path-5,
.collections-path-6,
.collections-path-7,
.collections-path-8,
.collections-path-9 {
  fill: #f1f5f9;
}

.wrapper-icon:hover > .sidebar-icon > .collections-path-1,
.wrapper-icon:hover > .sidebar-icon > .collections-path-2,
.wrapper-icon:hover > .sidebar-icon > .collections-path-3 {
  fill: #f1f5f9;
}
.wrapper-icon:hover > .sidebar-icon > .collections-path-4,
.wrapper-icon:hover > .sidebar-icon .collections-path-5,
.wrapper-icon:hover > .sidebar-icon .collections-path-6,
.wrapper-icon:hover > .sidebar-icon > .collections-path-7,
.wrapper-icon:hover > .sidebar-icon > .collections-path-8 {
  fill: #02102a;
}

.sidebar-tooltip {
  @apply relative w-auto p-2 m-2 min-w-max bottom-10 left-14
  rounded-md shadow-md
  text-main-light bg-main-dark
  text-base;
}
.sidebar-tooltip {
  display: none;
}
.wrapper-icon:hover > .sidebar-tooltip {
  display: block;
}
.sidebar-tooltip_categories {
  @apply bottom-12;
}
</style>
