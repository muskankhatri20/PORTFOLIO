const section=document.querySelectorAll('.section');
const sectbtns=document.querySelectorAll('.controll');
const sectbtn=document.querySelectorAll('.control');
const allsection=document.querySelectorAll('.main-content');

function pagetransition(){

    for(let i=0;i<sectbtn.length;i++){
        sectbtn[i].addEventListener('click', function(){
            let currentbtn=document.querySelectorAll('.active-btn');
3
            currentbtn[0].classList=currentbtn[0].className.replace('active-btn','');
            sectbtn[i].classList.add('active-btn');
        })
    }

    allsection[0].addEventListener('click', function(e){
        const id=e.target.dataset.id;
        if(id){
            sectbtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            section.forEach((sect)=>{
                sect.classList.remove('active');
            })

            const element=document.getElementById(id);
            element.classList.add('active');
           
        }

    })
}

pagetransition();
