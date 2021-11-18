const calculadora = {
    display: document.querySelector('.display'),

    inicia(){
        this.clickBotoes();
    },

    clickBotoes(){

        document.querySelector('.calculadora').addEventListener('click', e =>{
            const el = e.target;
            
            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')){
                this.deleteOne();
            }

            if(el.classList.contains('btn-eq')){
                this.resultCount();
            }
        })
    },
    btnParaDisplay(valor){
        this.display.value += valor;
    },

    clearDisplay(){
        this.display.value = '';
    },

    deleteOne(){
        this.display.value = this.display.value.slice(0, -1);
    },

    resultCount(){

        try{
            let conta = this.display.value = eval(this.display.value);

            if(!conta){
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta inválida');
            return;
        }
    }

    
}
calculadora.inicia();