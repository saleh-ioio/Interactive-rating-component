var isRated = true;

var rateHolder = document.querySelector('.numHolder');
var submittedRate = document.querySelector('#ratedNum');
var submitBtn = document.querySelector('.submit');
var submitCard = document.querySelector('.submitted');
var ratingCard = document.querySelector('.rating');

var currentRate ; 
rateHolder.addEventListener('click', function(e){

    if(e.target.className == 'numRate'){
        if(isRated){
            submitBtn.addEventListener('click', function(e){
                
                submitCard.classList.remove('hide');
                ratingCard.classList.add('hide');
                console.log('pressed submit');
            });
        }
        if(currentRate != null){
            currentRate.classList.remove('selected');
        }

        //assign new selected
        currentRate = e.target;
        currentRate.classList.add('selected');

        isRated = false;
        submittedRate.textContent = e.target.dataset.rate;


    }
});