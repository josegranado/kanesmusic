<template lang="pug">
  #app
    img(src='https://josegranado.github.io/kanesmusic/dist/logo.png')
    h1 KanesMusic
    select(v-model="selectedCountry")
      country(v-for="country in countries" :country="country" :key="country.topLevelDomain.alpha2Code")
    spinner(v-show="loading")
    ul 
      artist(v-for="artist in artists" :artist="artist" :key="artist.mbid")
   
</template>

<script>
import Country from './components/Country.vue';
import Artist from './components/Artist.vue';
import Spinner from './components/Spinner.vue';
import {getCountries, getArtists} from './api';
export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [],
      selectedCountry: 'Argentina',
      loading: true
    }
  },
  components: {
    Artist: Artist,
    Country: Country,
    Spinner: Spinner
  },
  methods: {
    refreshCountries()
    {
      const self = this;
      getCountries()
        .then( countries => self.countries = countries )
    },
    refreshArtists()
    {
      const self = this;
      this.loading = true;
      this.artists = [];
      getArtists(self.selectedCountry)
        .then( function (artists)
        {  
            self.loading = false;
            self.artists = artists;
        })
    }
  },
  mounted ()
  {
    this.refreshCountries()
    this.refreshArtists()  
  },
  watch: {
    selectedCountry ()
    {
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color red !important
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
