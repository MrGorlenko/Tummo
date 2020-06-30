var arr = new Vue({

    el: '#app',
    data:{
        count:1,
        modalState: 'modal-passive'
    },
    methods:{
        addItem: function(){
            this.count ++
        },
        removeItem: function(e){

            switch(this.count>1){
                case true:
                    this.count--;
                case false:
                    e.preventDefault();
                    break;
            }
        },
        removeModal: function(){
            this.modalState = 'modal-passive'
        },
        callModal: function(){
            this.modalState = 'modal-active'
        }
    }

})