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
        if(!this.firstClickedCheckBox) {
            this.firstClickedCheckBox = eventObj.target;
        }else if(this.shiftIsDown){
            this.lastClickedCheckBox=eventObj.target;
        }else{
            this.firstClickedCheckBox=eventObj.target;
        }
    }

    shiftDown(){
        this.shiftIsDown = true;

        if (this.firstClickedCheckBox && this.lastClickedCheckBox) {
            //find index of clicks
            var firstClickIndex = this.arrayOfChecks.toArray().indexOf(this.firstClickedCheckBox);
            var lastClickIndex = this.arrayOfChecks.toArray().indexOf(this.lastClickedCheckBox);

            //order them
            if(firstClickIndex > lastClickIndex){
                var temp=firstClickIndex;
                firstClickIndex=lastClickIndex;
                lastClickIndex=temp;
            }

            for(var index=firstClickIndex; index<lastClickIndex; index++){
                this.arrayOfChecks[index].checked=true;
            }
        }
    }
    shiftUp(){
        // this.firstClickedCheckBox=null;
        this.lastClickedCheckBox=null;
        this.shiftIsDown=false;
    }
}

$(window).on("load", function () {
        var newObj = new CheckBoxSelector();
    }
);