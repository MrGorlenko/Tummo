var arr = new Vue({

    el: '#app',
    data:{
        amount:0,
        price:2400,
        count:1,
        total: 0,
        modalState: 'modal-passive'
    },
    methods:{
        addItem: function(){
            this.count ++
            this.price += 2400
        },
        removeItem: function(e){

            switch(this.count>1){
                case true:
                    this.count--;
                    this.price -= 2400
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
        },
        buyItem: function() {
            this.amount += this.count
            this.total += this.price
        }

    }

})