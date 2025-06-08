
// <!-- 引用vue -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    let vm = new Vue({
        el: '#app',
        data: {
            input:{
                type:'',
                title:'',
                link:''

            }

        },
        methods: {

        },
        computed: {
// 舉例說明:
// // [
//   { type: '產品', title: '手機', link: '/phones' },
//   { type: '產品', title: '筆電', link: '/laptops' },
//   { type: '服務', title: '維修', link: '/repair' }
// ]

// {
//   sort: ['產品', '服務'], // 第一層分類的順序
//   map: {
//     '產品': {
//       sort: ['手機', '筆電'],       // 該分類下的項目順序
//       map: { 
//         '手機': { index: 0, link: '/phones' },
//         '筆電': { index: 1, link: '/laptops' }
//       }
//     },
//     '服務': {
//       sort: ['維修'],
//       map: {
//         '維修': { index: 2, link: '/repair' }
//       }
//         }
//     }
// }
// }



        //   
        typeList(){
            let obj={
                // sort為array。
                sort:[],
                // map裡面放type、title和link內容。
                map:{}
            }
            this.menu.forEach(({type,title,link},index)=>{
                // 內容初始化
                if(!obj.map[type]){
                obj.sort.push(type)
                obj.map[type]={
                    sort:[],
                    map:{}
                }
                
                }
                obj.map[type].sort.push(title)
                obj.map[type].map[title]={index,link}
            })
            return obj
        },
        titleList(){
            this.input.title=''
            if(this.input.type){
                return this.typeList.map[this.input.type]}else{
                    return []
                }
        },
      content(){
        if(this.input.title){
            return this.titleList.map[this.input.title]
        }else{
            return null
        }
        
        },

    },// end of computed
    });// end of vue





