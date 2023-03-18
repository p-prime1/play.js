'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenMaodal = document.querySelectorAll('.show-modal');
const closeModal =  function ()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};
const openModal = function () 
{
        // console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');


};
console.log(btnsOpenMaodal);

for (let i = 0; i < btnsOpenMaodal.length; i++)
{
    btnsOpenMaodal[i].addEventListener('click', openModal);
    // document.querySelector('.btn')
}
btn.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
    console.log(event.key);

    if (event.key == 'Escape') {
        if (!modal.classList.contains('hidden'))
        {
            closeModal();
        }
    }
})