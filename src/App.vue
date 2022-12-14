<template>
  <div>
    <navbar />
    <section
      class="bg-indigo-200 flex flex-col justify-center items-center h-96 gap-10 p-5"
    >
      <h1 class="text-6xl font-semibold target:text-red-200">
        How can we help?
      </h1>
      <div
        class="flex items-center hover:border-blue-600 focus-within:border-blue-600 bg-white px-4 py-2 border border-black shadow-lg rounded w-full max-w-2xl"
      >
        <input
          class="outline-none bg-transparent text-lg font-semibold border-none w-full h-10"
          type="text"
          placeholder="Search"
        />
        <font-awesome-icon
          class="hover:text-blue-600"
          icon="fa-solid fa-arrow-right"
        />
      </div>
    </section>
    <cards />
    <Footer />
    <button
      class="fixed bottom-5 right-5 text-white bg-blue-600 text-lg font-semibold px-4 py-2 rounded-full flex items-center"
    >
      <font-awesome-icon class="mr-2" icon="fa-regular fa-circle-question" />
      Help
    </button>
  </div>
</template>
<script>
import Cards from "./components/cards.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar, Footer, Cards },
};
</script>
