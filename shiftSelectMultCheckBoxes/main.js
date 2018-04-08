class CheckBoxSelector{
    constructor(){
        this.arrayOfChecks = $('input.checkbox');
        console.log(this.arrayOfChecks)

        this.firstClickedCheckBox=null;
        this.lastClickedCheckBox=null;

        this.shiftIsDown=false;

        this.handleEvents();
    }
    handleEvents(){
        $(document).on({
            keydown:this.handleKeyDown.bind(this),
            keyup:this.handleKeyUp.bind(this),
        })
        $('input.checkbox').on({
            click:this.clickCheckbox.bind(this),
        })
    }

    handleKeyDown(eventObj){
        switch(eventObj.key){
            case 'Shift':
                this.shiftDown();
                break;
        }
    }
    handleKeyUp(eventObj){
        switch (eventObj.key){
            case 'Shift':
                this.shiftUp();
                break;
        }
    }

    clickCheckbox(eventObj){
        console.log(eventObj);

        if(!this.firstClickedCheckBox) {
            this.firstClickedCheckBox = eventObj.target;
        }else if(this.shiftIsDown){
            this.lastClickedCheckBox=eventObj.target;
        }else{
            this.firstClickedCheckBox=eventObj.target;
        }
    }

    shiftDown(){
        console.log('pressed shift down')
        this.shiftIsDown = true;

        if (this.firstClickedCheckBox && this.lastClickedCheckBox) {
            //find index of clicks
            var firstClickIndex=null;
            var lastClickIndex=null;
            firstClickIndex = this.arrayOfChecks.toArray().indexOf(this.firstClickedCheckBox);
            lastClickIndex = this.arrayOfChecks.toArray().indexOf(this.lastClickedCheckBox);

            //order them
            if(firstClickIndex > lastClickIndex){
                fir
            }

            for(var checkboxIndex=0; checkboxIndex<this.arrayOfChecks.length; checkboxIndex++){
                // start with lower one


                // select all checks from one to the other

            }
        }
    }
    shiftUp(){
        console.log('let go of shift')

        this.firstClickedCheckBox=null;
        this.lastClickedCheckBox=null;
        this.shiftIsDown=false;
    }
}

$(window).on("load", function () {
        var newObj = new CheckBoxSelector();
    }
);