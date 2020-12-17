// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.
var root =
new Vue({
  el: '#root',
  data: {
    library:[],
    typeMusic:"all",
},
  methods: {
    /*compare: function (a,b) {
    const yearA = a.year;
    const yearB = b.year;
    let comparison = 0;
    if (yearA > yearB) {
      comparison = -1;
    } else if (yearA < yearB) {
      comparison = 1;
    }
    return comparison;
  },*/
  },
  mounted:function (){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').
    then( (result) => {
        this.library= result.data.response;
          //this.library.sort(this.compare());
    });
    console.log(this.library);
  }
})
