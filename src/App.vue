<script setup lang="ts">
  import { reactive, shallowRef } from "vue";
  import Header from "./components/partials/Header.vue";
  
  import RefsData from "./data/references";
  import RefsResult from "./components/results/RefsResult.vue";

  const MONACO_EDITOR_OPTIONS = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
  }

  const codes = reactive<{
    references: string
  }>({
    references: RefsData,
  })

  const editorRef = shallowRef()
  const handleMount = editor => (editorRef.value = editor)

</script>


<template>
  <Header />
  <main class="app-content-container">
    <section id="refs" class="section-container">
      <div class="section-infos">
        <h1 class="section-title">Les références</h1>
        <p class="section-description">
          Dans Vue.js, un "ref" c'est un peu comme une étiquette spéciale que tu attaches à une variable pour la rendre spéciale.<br/><br/>
          Imagine-le comme un petit drapeau que tu mets sur une boîte.<br/><br/>
          Quand tu crées une variable normale en JavaScript, elle fonctionne comme une boîte standard.<br/><br/> 
          Tu mets des choses dedans, tu les retires, et c'est tout. Mais avec un "ref" en Vue.js, cette boîte devient magique.<br/><br/>
          Le "ref" permet à Vue.js de garder un œil sur ce qui se passe à l'intérieur de la boîte.<br/><br/> 
          Ça veut dire que si quelque chose change à l'intérieur de la boîte, Vue.js le sait instantanément et peut mettre à jour la partie de ton site web qui dépend de cette boîte.<br/><br/>
          En d'autres termes, un "ref" c'est comme un moyen de dire à Vue.js : "Hé, cette variable est importante, garde un œil dessus !"<br/><br/>
          C'est super utile quand tu travailles avec des données dynamiques dans une application Vue.js, parce que ça permet à ton interface utilisateur de réagir rapidement aux changements de données.<br/><br/><br/>
          Imagine que tu veux créer une petite application pour compter le nombre de clics sur un bouton et afficher ce nombre à l'écran.<br/>
          Voici comment tu pourrais le faire avec un "ref" :
        </p>
      </div>
      <h3 class="section-title">Exemple</h3>
      <div class="section-editor">
        <vue-monaco-editor
          class="section-editor"
          language="html"
          v-model:value="codes.references"
          theme="vs-dark"
          :options="MONACO_EDITOR_OPTIONS"
          @mount="handleMount"
        />
      </div>
      <h3 class="section-title">Résultat</h3>
      <div class="section-result">
        <RefsResult />
      </div>
    </section>
  </main>
</template>


<style scoped>

  .app-content-container {
    height: auto;
    min-height: 100vh;
    width: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;

    .section-container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding: 40px;

      .section-title {
          font-family: "Dela Gothic One", sans-serif;
          color: #1ba39c;
          text-transform: uppercase;
          letter-spacing: 1.2px;
      }

      .section-infos {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;

        .section-title {
          font-family: "Dela Gothic One", sans-serif;
          color: #1ba39c;
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }

        .section-description {
          font-family: "Roboto", sans-serif;
          color: gray;
        }
      }

      .section-editor {
        width: 100%;
        height: 400px;
      }

      .section-result {
        width: 100%;
        height: auto;
        border: 1px solid gray;
        padding: 10px;
      }
    }
  }

</style>
